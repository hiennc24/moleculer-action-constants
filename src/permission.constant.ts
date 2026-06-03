export type PermissionConstantType = {
  [key in keyof typeof PERMISSIONS]: string;
};

const PERMISSIONS = {
  // 1. System Management Permission
  SVC_SYSTEM_MANAGEMENT_FULL: "system_management:*",

  // 1.1 Accounts
  SVC_AUTH_ACCOUNTS_FULL: "system_management:accounts:*",
  SVC_AUTH_ACCOUNTS_LIST: "system_management:accounts:list",
  SVC_AUTH_ACCOUNTS_READ: "system_management:accounts:read",
  SVC_AUTH_ACCOUNTS_WRITE: "system_management:accounts:write",
  SVC_AUTH_ACCOUNTS_UPDATE: "system_management:accounts:update",
  SVC_AUTH_ACCOUNTS_CREATE: "system_management:accounts:create",
  SVC_AUTH_ACCOUNTS_BULK_DELETE: "system_management:accounts:bulk_delete",
  SVC_AUTH_ACCOUNTS_UPDATE_STATUS: "system_management:accounts:update_status",

  // 1.2 Roles Management
  SVC_AUTH_ROLES_FULL: "system_management:roles:*",
  SVC_AUTH_ROLES_LIST: "system_management:roles:list",
  SVC_AUTH_ROLES_READ: "system_management:roles:read",
  SVC_AUTH_ROLES_UPDATE: "system_management:roles:update",
  SVC_AUTH_ROLES_CREATE: "system_management:roles:create",
  SVC_AUTH_ROLES_BULK_DELETE: "system_management:roles:bulk_delete",

  // 1.3 Permission Cache (gateway admin force-clear)
  SYSTEM_PERMISSION_CACHE_EVICT: "system_management:permission_cache:evict",

  // 2. Organization — application + group wildcards
  ORGANIZATION_APP_FULL: "organization_service:*",
  ORGANIZATION_GROUP_FULL: "organization_service:operational_organization:*",

  // 2.1 Employees (actions: list, read, create, update, delete, download, upload, cancel_approve)
  ORGANIZATION_EMPLOYEES_FULL: "organization_service:operational_organization:employees:*",
  ORGANIZATION_EMPLOYEES_LIST: "organization_service:operational_organization:employees:list",
  ORGANIZATION_EMPLOYEES_READ: "organization_service:operational_organization:employees:read",
  ORGANIZATION_EMPLOYEES_CREATE: "organization_service:operational_organization:employees:create",
  ORGANIZATION_EMPLOYEES_UPDATE: "organization_service:operational_organization:employees:update",
  ORGANIZATION_EMPLOYEES_DELETE: "organization_service:operational_organization:employees:delete",
  ORGANIZATION_EMPLOYEES_DOWNLOAD: "organization_service:operational_organization:employees:download",
  ORGANIZATION_EMPLOYEES_UPLOAD: "organization_service:operational_organization:employees:upload",
  ORGANIZATION_EMPLOYEES_CANCEL_APPROVE: "organization_service:operational_organization:employees:cancel_approve",

  // 2.2 Organizational (actions: list, read, create, update, delete, download, upload, approve, cancel_approve, update_status)
  ORGANIZATION_ORGANIZATIONAL_FULL: "organization_service:operational_organization:organizational:*",
  ORGANIZATION_ORGANIZATIONAL_LIST: "organization_service:operational_organization:organizational:list",
  ORGANIZATION_ORGANIZATIONAL_READ: "organization_service:operational_organization:organizational:read",
  ORGANIZATION_ORGANIZATIONAL_CREATE: "organization_service:operational_organization:organizational:create",
  ORGANIZATION_ORGANIZATIONAL_UPDATE: "organization_service:operational_organization:organizational:update",
  ORGANIZATION_ORGANIZATIONAL_DELETE: "organization_service:operational_organization:organizational:delete",
  ORGANIZATION_ORGANIZATIONAL_DOWNLOAD: "organization_service:operational_organization:organizational:download",
  ORGANIZATION_ORGANIZATIONAL_UPLOAD: "organization_service:operational_organization:organizational:upload",
  ORGANIZATION_ORGANIZATIONAL_APPROVE: "organization_service:operational_organization:organizational:approve",
  ORGANIZATION_ORGANIZATIONAL_CANCEL_APPROVE: "organization_service:operational_organization:organizational:cancel_approve",
  ORGANIZATION_ORGANIZATIONAL_UPDATE_STATUS: "organization_service:operational_organization:organizational:update_status",

  // 2.3 Value Chains (actions: list, read, create, update, delete, download, upload, approve)
  ORGANIZATION_VALUE_CHAINS_FULL: "organization_service:operational_organization:value_chains:*",
  ORGANIZATION_VALUE_CHAINS_LIST: "organization_service:operational_organization:value_chains:list",
  ORGANIZATION_VALUE_CHAINS_READ: "organization_service:operational_organization:value_chains:read",
  ORGANIZATION_VALUE_CHAINS_CREATE: "organization_service:operational_organization:value_chains:create",
  ORGANIZATION_VALUE_CHAINS_UPDATE: "organization_service:operational_organization:value_chains:update",
  ORGANIZATION_VALUE_CHAINS_DELETE: "organization_service:operational_organization:value_chains:delete",
  ORGANIZATION_VALUE_CHAINS_DOWNLOAD: "organization_service:operational_organization:value_chains:download",
  ORGANIZATION_VALUE_CHAINS_UPLOAD: "organization_service:operational_organization:value_chains:upload",
  ORGANIZATION_VALUE_CHAINS_APPROVE: "organization_service:operational_organization:value_chains:approve",

  // 2.4 Mission (actions: list, read, create, update, copy, delete, download, upload, approve, setting)
  ORGANIZATION_MISSION_FULL: "organization_service:operational_organization:mission:*",
  ORGANIZATION_MISSION_LIST: "organization_service:operational_organization:mission:list",
  ORGANIZATION_MISSION_READ: "organization_service:operational_organization:mission:read",
  ORGANIZATION_MISSION_CREATE: "organization_service:operational_organization:mission:create",
  ORGANIZATION_MISSION_UPDATE: "organization_service:operational_organization:mission:update",
  ORGANIZATION_MISSION_COPY: "organization_service:operational_organization:mission:copy",
  ORGANIZATION_MISSION_DELETE: "organization_service:operational_organization:mission:delete",
  ORGANIZATION_MISSION_DOWNLOAD: "organization_service:operational_organization:mission:download",
  ORGANIZATION_MISSION_UPLOAD: "organization_service:operational_organization:mission:upload",
  ORGANIZATION_MISSION_APPROVE: "organization_service:operational_organization:mission:approve",
  ORGANIZATION_MISSION_SETTING: "organization_service:operational_organization:mission:setting",
};

export default PERMISSIONS;
