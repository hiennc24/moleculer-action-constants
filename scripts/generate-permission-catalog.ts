#!/usr/bin/env ts-node
/**
 * Generates `src/permission-catalog.constant.ts` — the flat, typed id list —
 * from the tree in `src/permission-tree.constant.ts`.
 *
 * Both live in this package, so the flat list can never drift from the tree,
 * and neither depends on another repository being checked out. Hand-copying is
 * what left the same catalog in four places with several ids that existed in
 * none of them; deriving one from the other removes that failure mode.
 *
 * Run:
 *   npm run generate:permissions
 */

import * as fs from 'fs'
import * as path from 'path'

import PERMISSION_TREE, { PermissionTreeNode } from '../src/permission-tree.constant'

const OUT_FILE = path.resolve(__dirname, '../src/permission-catalog.constant.ts')

/** `sales:sales_management:sales_order:list` -> `SALES_SALES_MANAGEMENT_SALES_ORDER_LIST` */
const toConstantName = (id: string): string =>
  id.replace(/[.:]/g, '_').replace(/[^A-Za-z0-9_]/g, '_').toUpperCase()

/** Every grantable id: each node's own permKey, plus one per declared action. */
const collectIds = (nodes: PermissionTreeNode[]): string[] => {
  const ids = new Set<string>()
  const walk = (node: PermissionTreeNode) => {
    if (node.permKey) {
      ids.add(node.permKey)
      for (const action of node.actions ?? []) ids.add(`${node.permKey}:${action}`)
    }
    for (const child of node.children ?? []) walk(child)
  }
  nodes.forEach(walk)
  return [...ids].sort()
}

const build = (ids: string[]): string => {
  // Two distinct ids can collapse to the same constant name (`a:b_c` and
  // `a:b:c` both yield A_B_C). Letting one silently overwrite the other would
  // hand callers the wrong permission string, so fail instead.
  const byName = new Map<string, string[]>()
  for (const id of ids) {
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

  const lines = ids.map((id) => `\t${toConstantName(id)}: '${id}',`)

  return `/**
 * GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Every grantable permission id, keyed by the id with separators replaced by
 * underscores. Derived from \`permission-tree.constant.ts\`; regenerate with:
 *   npm run generate:permissions
 *
 * Entries: ${ids.length}
 *
 * An id exported here is grantable by construction — it came from the same
 * tree the role editor renders. See \`permission.constant.ts\` for the older
 * curated short names, kept for the callers already using them.
 */

const PERMISSION_CATALOG = {
${lines.join('\n')}
} as const

export type PermissionCatalogKey = keyof typeof PERMISSION_CATALOG
export type PermissionCatalogId = (typeof PERMISSION_CATALOG)[PermissionCatalogKey]

export default PERMISSION_CATALOG
`
}

const ids = collectIds(PERMISSION_TREE)
fs.writeFileSync(OUT_FILE, build(ids), 'utf-8')
console.log(`Wrote ${ids.length} permission ids from the in-package tree`)
