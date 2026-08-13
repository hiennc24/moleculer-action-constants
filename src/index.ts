import SERVICE_BROKER from './service.constant.json';

export default SERVICE_BROKER;

export type ServiceBrokerConstantType = {
  [K in keyof typeof SERVICE_BROKER]: (typeof SERVICE_BROKER)[K];
};

export {
  default as COLLECTIONS,
  CollectionsConstantType,
} from './collections.constant';

export const addLocalServices = (services: ServiceBrokerConstantType) => {
  Object.assign(SERVICE_BROKER, services);
  console.log('added local services!');
};

export { default as PERMISSIONS } from './permission.constant';

// Generated from the svc-auth catalog — every id the role editor can grant.
// Prefer this over PERMISSIONS for new code; PERMISSIONS keeps the older
// curated short names for callers already on them.
export {
  default as PERMISSION_CATALOG,
  PermissionCatalogKey,
  PermissionCatalogId,
} from './permission-catalog.constant';

// The catalog tree itself — display metadata and hierarchy, which the flat id
// list above cannot carry. svc-auth renders the role editor from this; it is
// exported here so the per-service JSON copies can be retired.
export {
  default as PERMISSION_TREE,
  PERMISSION_ACTION_NAMES,
  PermissionTreeNode,
} from './permission-tree.constant';
