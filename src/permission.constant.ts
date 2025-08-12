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
};

export default PERMISSIONS;
