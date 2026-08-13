#!/usr/bin/env ts-node
/**
 * One-off migration aid: converts the svc-auth catalog JSON into
 * `src/permission-tree.constant.ts`, so this package can own the tree and the
 * per-service JSON copies can be retired.
 *
 * The tree — not the flat id list — is what actually has to move. svc-auth
 * serves the role editor from it (`getApplicationActions`), and that needs the
 * display name, description, type and hierarchy of every node, none of which a
 * list of id strings carries.
 *
 * Run:
 *   npx ts-node scripts/import-permission-tree.ts [--ref <git-ref>] [catalogDir]
 *
 * Once the JSON files are gone this script has no input left and should be
 * deleted; `permission-tree.constant.ts` becomes the hand-authored source.
 */

import { execFileSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

const DEFAULT_CATALOG_DIR = path.resolve(__dirname, '../../microservices/auth/src/permissions')
const OUT_FILE = path.resolve(__dirname, '../src/permission-tree.constant.ts')

/** Module order matters: the role editor renders the tree in this sequence. */
const MODULE_ORDER = [
  'core',
  'hcm',
  'sales',
  'purchase',
  'warehouse',
  'workflows',
  'organization',
  'administration',
  'system'
]

/** Vietnamese labels for action nodes, mirrored from svc-auth's expander. */
const ACTION_NAMES: Record<string, string> = {
  list: 'Xem danh sách',
  read: 'Xem chi tiết',
  create: 'Tạo mới',
  update: 'Cập nhật',
  delete: 'Xóa',
  download: 'Tải xuống',
  upload: 'Tải lên',
  print: 'In',
  approve: 'Phê duyệt',
  cancel_approve: 'Hủy phê duyệt',
  bulk_update: 'Cập nhật hàng loạt',
  bulk_delete: 'Xóa hàng loạt',
  update_status: 'Cập nhật trạng thái',
  setting: 'Thiết lập',
  configure: 'Cấu hình',
  copy: 'Sao chép',
  send: 'Gửi',
  sync: 'Đồng bộ',
  export: 'Xuất',
  generate: 'Tạo báo cáo',
  version_control: 'Kiểm soát phiên bản'
}

const readModules = (dir: string, ref: string | null): Array<{ name: string; body: string }> => {
  if (ref === null) {
    return MODULE_ORDER.map((name) => ({
      name,
      body: fs.readFileSync(path.join(dir, `${name}.json`), 'utf-8')
    }))
  }
  const repoRoot = execFileSync('git', ['-C', dir, 'rev-parse', '--show-toplevel'], {
    encoding: 'utf-8'
  }).trim()
  const prefix = path.relative(repoRoot, dir)
  return MODULE_ORDER.map((name) => ({
    name,
    body: execFileSync('git', ['-C', repoRoot, 'show', `${ref}:${prefix}/${name}.json`], {
      encoding: 'utf-8',
      maxBuffer: 64 * 1024 * 1024
    })
  }))
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

const modules = readModules(catalogDir, ref).map(({ name, body }) => ({
  name,
  node: JSON.parse(body)
}))

const countIds = (node: any): number => {
  let n = node.permKey ? 1 + (node.actions?.length ?? 0) : 0
  for (const c of node.children ?? []) n += countIds(c)
  return n
}
const total = modules.reduce((sum, m) => sum + countIds(m.node), 0)

const body = `/**
 * The permission catalog: every module, group, feature and the actions each
 * feature supports.
 *
 * This is the tree the role editor renders — svc-auth expands it into ACTION
 * nodes and filters it per user. It carries display metadata (name,
 * description, type, hierarchy), which is why the flat id list in
 * \`permission-catalog.constant.ts\` cannot stand in for it; that file is
 * derived from this one.
 *
 * Nodes: ${total} grantable ids across ${modules.length} modules.
 * Imported from svc-auth ${ref ?? 'working tree'} — see
 * scripts/import-permission-tree.ts. Edit here once the per-service JSON
 * copies are retired.
 */

export interface PermissionTreeNode {
\tapplication?: string
\tname: string
\tdescription?: string
\ttype: 'MODULE' | 'GROUP' | 'FEATURE' | 'ACTION' | 'SYSTEM'
\tpermKey: string
\taction?: string
\t/** Compact form: expanded into ACTION child nodes by consumers. */
\tactions?: string[]
\tchildren?: PermissionTreeNode[]
}

/** Vietnamese labels for action nodes, keyed by action name. */
export const PERMISSION_ACTION_NAMES: Record<string, string> = ${JSON.stringify(
  ACTION_NAMES,
  null,
  '\t'
).replace(/\n/g, '\n')}

/** Modules in render order. */
const PERMISSION_TREE: PermissionTreeNode[] = ${JSON.stringify(
  modules.map((m) => m.node),
  null,
  '\t'
)}

export default PERMISSION_TREE
`

fs.writeFileSync(OUT_FILE, body, 'utf-8')
console.log(`Wrote ${modules.length} modules / ${total} ids from svc-auth ${ref ?? 'working tree'}`)
