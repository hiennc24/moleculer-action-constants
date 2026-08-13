#!/usr/bin/env ts-node
/**
 * Generates `src/permission-catalog.constant.ts` from the svc-auth permission
 * catalog.
 *
 * svc-auth is the authority rather than the frontend catalog: the role editor
 * builds its tree from `microservices/auth/src/permissions/*.json`, so an id
 * absent there cannot be attached to a role no matter what any other copy says.
 * Generating from it means every constant this file exports is grantable by
 * construction — the failure mode where a route gates on a well-formed id that
 * no role can ever hold stops being possible.
 *
 * Run from the repo root:
 *   npx ts-node scripts/generate-permission-catalog.ts [--ref <git-ref>] [catalogDir]
 *
 * The default catalog path assumes the standard workspace layout with this
 * package checked out beside `microservices/`. Pass a directory to override.
 *
 * `--ref` reads the catalog out of a git ref instead of the working tree, which
 * is usually what you want: whichever branch svc-auth happens to be checked out
 * on would otherwise decide what this package exports, and a feature branch
 * that predates a catalog entry silently drops it. Defaults to
 * `origin/testing`, the branch the services deploy from.
 */

import { execFileSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

const DEFAULT_CATALOG_DIR = path.resolve(
  __dirname,
  '../../microservices/auth/src/permissions'
)
const OUT_FILE = path.resolve(__dirname, '../src/permission-catalog.constant.ts')

interface CatalogNode {
  name?: string
  type?: string
  permKey?: string
  actions?: string[]
  children?: CatalogNode[]
}

/** `sales:sales_management:sales_order:list` -> `SALES_SALES_MANAGEMENT_SALES_ORDER_LIST` */
const toConstantName = (id: string): string =>
  id.replace(/[.:]/g, '_').replace(/[^A-Za-z0-9_]/g, '_').toUpperCase()

/** Repo-relative path of the catalog dir, needed to address it inside a git ref. */
const repoRelative = (dir: string): { repoRoot: string; prefix: string } => {
  const repoRoot = execFileSync('git', ['-C', dir, 'rev-parse', '--show-toplevel'], {
    encoding: 'utf-8'
  }).trim()
  return { repoRoot, prefix: path.relative(repoRoot, dir) }
}

/** Lists + reads catalog files from a git ref rather than the working tree. */
const readFromRef = (dir: string, ref: string): Array<{ file: string; body: string }> => {
  const { repoRoot, prefix } = repoRelative(dir)
  const git = (args: string[]) =>
    execFileSync('git', ['-C', repoRoot, ...args], { encoding: 'utf-8', maxBuffer: 64 * 1024 * 1024 })

  const files = git(['ls-tree', '--name-only', ref, `${prefix}/`])
    .split('\n')
    .filter((f) => f.endsWith('.json'))
    .sort()
  if (files.length === 0) {
    throw new Error(`No catalog JSON at ${prefix}/ in ref "${ref}"`)
  }
  return files.map((f) => ({ file: path.basename(f), body: git(['show', `${ref}:${f}`]) }))
}

const readFromWorkingTree = (dir: string): Array<{ file: string; body: string }> => {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort()
  if (files.length === 0) throw new Error(`No catalog JSON found in ${dir}`)
  return files.map((f) => ({ file: f, body: fs.readFileSync(path.join(dir, f), 'utf-8') }))
}

const collectIds = (sources: Array<{ file: string; body: string }>): Map<string, string> => {

  // id -> source file, so a duplicate id across modules is reported with both sides
  const ids = new Map<string, string>()
  const add = (id: string, file: string) => {
    const seen = ids.get(id)
    if (seen && seen !== file) {
      throw new Error(`Duplicate permission id "${id}" in both ${seen} and ${file}`)
    }
    ids.set(id, file)
  }

  for (const { file, body } of sources) {
    const walk = (node: CatalogNode) => {
      if (node.permKey) {
        // The bare permKey is grantable on its own (a resource-level grant);
        // the action ids hang off it.
        add(node.permKey, file)
        for (const action of node.actions ?? []) add(`${node.permKey}:${action}`, file)
      }
      for (const child of node.children ?? []) walk(child)
    }
    walk(JSON.parse(body))
  }
  return ids
}

const build = (ids: Map<string, string>, sourceLabel: string): string => {
  // Two distinct ids can collapse to the same constant name (`a:b_c` and
  // `a:b:c` both yield A_B_C). Silently letting one overwrite the other would
  // hand callers the wrong permission string, so fail instead.
  const byName = new Map<string, string[]>()
  for (const id of ids.keys()) {
    const name = toConstantName(id)
    byName.set(name, [...(byName.get(name) ?? []), id])
  }
  const collisions = [...byName.entries()].filter(([, v]) => v.length > 1)
  if (collisions.length > 0) {
    throw new Error(
      `Constant name collisions:\n` +
        collisions.map(([n, v]) => `  ${n} <- ${v.join(', ')}`).join('\n')
    )
  }

  const lines = [...ids.keys()]
    .sort()
    .map((id) => `\t${toConstantName(id)}: '${id}',`)

  return `/**
 * GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Every permission id defined in the svc-auth catalog, keyed by its id with
 * separators replaced by underscores. Regenerate with:
 *   npx ts-node scripts/generate-permission-catalog.ts
 *
 * Entries: ${ids.size}
 * Source: ${sourceLabel}
 *
 * Prefer these over hand-written constants: an id here is grantable by
 * construction, because it came from the catalog the role editor reads. See
 * \`permission.constant.ts\` for the older curated short names, which stay for
 * the callers already using them.
 */

const PERMISSION_CATALOG = {
${lines.join('\n')}
} as const

export type PermissionCatalogKey = keyof typeof PERMISSION_CATALOG
export type PermissionCatalogId = (typeof PERMISSION_CATALOG)[PermissionCatalogKey]

export default PERMISSION_CATALOG
`
}

const argv = process.argv.slice(2)
const refIdx = argv.indexOf('--ref')
const ref = refIdx >= 0 ? argv[refIdx + 1] : 'origin/testing'
const useWorkingTree = ref === 'worktree'
const positional = argv.filter((a, i) => i !== refIdx && i !== refIdx + 1)
const catalogDir = positional[0] ? path.resolve(positional[0]) : DEFAULT_CATALOG_DIR

if (!fs.existsSync(catalogDir)) {
  console.error(`Catalog directory not found: ${catalogDir}`)
  console.error('Pass the path explicitly if the workspace layout differs.')
  process.exit(1)
}

const sources = useWorkingTree ? readFromWorkingTree(catalogDir) : readFromRef(catalogDir, ref)
const sourceLabel = useWorkingTree ? `${catalogDir} (working tree)` : `svc-auth ${ref}`
const ids = collectIds(sources)
fs.writeFileSync(OUT_FILE, build(ids, sourceLabel), 'utf-8')
console.log(`Wrote ${ids.size} permission ids from ${sourceLabel}`)
