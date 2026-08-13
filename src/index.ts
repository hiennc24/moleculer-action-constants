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
