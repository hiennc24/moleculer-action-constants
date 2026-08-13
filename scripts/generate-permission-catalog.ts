#!/usr/bin/env ts-node
/**
 * Fills the generated section of `src/permission.constant.ts` with every id the
 * svc-auth catalog defines.
 *
 * svc-auth owns the catalog — the role editor builds its tree from
 * `microservices/auth/src/permissions/*.json`, so an id absent there cannot be
 * attached to a role no matter what any copy elsewhere says. Deriving the
 * constants from it means an id exported here is grantable by construction,
 * which is what hand-copying failed to guarantee: the same catalog ended up in
 * several places, they drifted, and some ids that routes gated on existed in
 * none of them.
 *
 * Only the region between the BEGIN/END markers is rewritten; the curated short
 * names above it are hand-maintained and left alone.
 *
 * Run:
 *   npm run generate:permissions [-- --ref <git-ref>] [catalogDir]
 *
 * `--ref` picks which branch of svc-auth to read (default `origin/testing`, the
 * branch services deploy from) rather than whatever happens to be checked out —
 * a feature branch predating a catalog entry would otherwise silently drop it.
 * Pass `--ref worktree` to read local edits.
 */

import { execFileSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

const DEFAULT_CATALOG_DIR = path.resolve(__dirname, '../../microservices/auth/src/permissions')
const TARGET = path.resolve(__dirname, '../src/permission.constant.ts')

const BEGIN = '  // ==== GENERATED FROM THE svc-auth CATALOG — DO NOT EDIT BELOW ===='
const END = '  // ==== END GENERATED ===='

interface CatalogNode {
  permKey?: string
  actions?: string[]
  children?: CatalogNode[]
}

/** `sales:sales_management:sales_order:list` -> `SALES_SALES_MANAGEMENT_SALES_ORDER_LIST` */
const toConstantName = (id: string): string =>
  id.replace(/[.:]/g, '_').replace(/[^A-Za-z0-9_]/g, '_').toUpperCase()

const readCatalog = (dir: string, ref: string | null): string[] => {
  if (ref === null) {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .map((f) => fs.readFileSync(path.join(dir, f), 'utf-8'))
  }
  const repoRoot = execFileSync('git', ['-C', dir, 'rev-parse', '--show-toplevel'], {
    encoding: 'utf-8'
  }).trim()
  const prefix = path.relative(repoRoot, dir)
  const git = (args: string[]) =>
    execFileSync('git', ['-C', repoRoot, ...args], {
      encoding: 'utf-8',
      maxBuffer: 64 * 1024 * 1024
    })
  const files = git(['ls-tree', '--name-only', ref, `${prefix}/`])
    .split('\n')
    .filter((f) => f.endsWith('.json'))
    .sort()
  if (files.length === 0) throw new Error(`No catalog JSON at ${prefix}/ in ref "${ref}"`)
  return files.map((f) => git(['show', `${ref}:${f}`]))
}

/** Every grantable id: each node's own permKey, plus one per declared action. */
const collectIds = (bodies: string[]): string[] => {
  const ids = new Set<string>()
  const walk = (node: CatalogNode) => {
    if (node.permKey) {
      ids.add(node.permKey)
      for (const action of node.actions ?? []) ids.add(`${node.permKey}:${action}`)
    }
    for (const child of node.children ?? []) walk(child)
  }
  bodies.forEach((b) => walk(JSON.parse(b)))
  return [...ids].sort()
}

const argv = process.argv.slice(2)
const refIdx = argv.indexOf('--ref')
const refArg = refIdx >= 0 ? argv[refIdx + 1] : 'origin/testing'
const ref = refArg === 'worktree' ? null : refArg
const positional = argv.filter((a, i) => i !== refIdx && i !== refIdx + 1)
const catalogDir = positional[0] ? path.resolve(positional[0]) : DEFAULT_CATALOG_DIR

if (!fs.existsSync(catalogDir)) {
  console.error(`Catalog directory not found: ${catalogDir}`)
  process.exit(1)
}

const source = fs.readFileSync(TARGET, 'utf-8')
const start = source.indexOf(BEGIN)
const stop = source.indexOf(END)
if (start < 0 || stop < 0) {
  console.error(`Missing generated-section markers in ${path.basename(TARGET)}.`)
  process.exit(1)
}

const ids = collectIds(readCatalog(catalogDir, ref))

// Curated names live above the markers. A generated name colliding with one
// would silently replace it at runtime — the last key wins in an object
// literal — so refuse rather than hand callers the wrong permission string.
const curated = new Set(
  [...source.slice(0, start).matchAll(/^\s+([A-Z0-9_]+)\s*:/gm)].map((m) => m[1])
)
const clashes = ids.map(toConstantName).filter((n) => curated.has(n))
if (clashes.length > 0) {
  console.error(`Generated names collide with curated ones: ${clashes.join(', ')}`)
  process.exit(1)
}

// Two distinct ids can also collapse to the same generated name (`a:b_c` and
// `a:b:c` both yield A_B_C).
const byName = new Map<string, string[]>()
for (const id of ids) {
  const n = toConstantName(id)
  byName.set(n, [...(byName.get(n) ?? []), id])
}
const dupes = [...byName.entries()].filter(([, v]) => v.length > 1)
if (dupes.length > 0) {
  console.error(
    `Two ids map to one constant name:\n` +
      dupes.map(([n, v]) => `  ${n} <- ${v.join(', ')}`).join('\n')
  )
  process.exit(1)
}

const block = [
  BEGIN,
  `  // ${ids.length} ids, svc-auth ${ref ?? 'working tree'}. Regenerate: npm run generate:permissions`,
  ...ids.map((id) => `  ${toConstantName(id)}: '${id}',`),
  END
].join('\n')

fs.writeFileSync(TARGET, source.slice(0, start) + block + source.slice(stop + END.length), 'utf-8')
console.log(`Wrote ${ids.length} ids into ${path.basename(TARGET)} (svc-auth ${ref ?? 'worktree'})`)
