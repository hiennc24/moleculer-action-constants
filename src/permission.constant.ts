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
  // 2.1 Employees (actions: list, read, create, update, delete, download, upload, import, cancel_approve)
  ORGANIZATION_EMPLOYEES_FULL:
    "organization_service:operational_organization:employees:*",
  ORGANIZATION_EMPLOYEES_LIST:
    "organization_service:operational_organization:employees:list",
  ORGANIZATION_EMPLOYEES_READ:
    "organization_service:operational_organization:employees:read",
  ORGANIZATION_EMPLOYEES_CREATE:
    "organization_service:operational_organization:employees:create",
  ORGANIZATION_EMPLOYEES_UPDATE:
    "organization_service:operational_organization:employees:update",
  ORGANIZATION_EMPLOYEES_DELETE:
    "organization_service:operational_organization:employees:delete",
  ORGANIZATION_EMPLOYEES_DOWNLOAD:
    "organization_service:operational_organization:employees:download",
  ORGANIZATION_EMPLOYEES_UPLOAD:
    "organization_service:operational_organization:employees:upload",
  ORGANIZATION_EMPLOYEES_IMPORT:
    "organization_service:operational_organization:employees:import",
  ORGANIZATION_EMPLOYEES_CANCEL_APPROVE:
    "organization_service:operational_organization:employees:cancel_approve",
  // 2.2 Organizational (actions: list, read, create, update, delete, download, upload, approve, cancel_approve, update_status)
  ORGANIZATION_ORGANIZATIONAL_FULL:
    "organization_service:operational_organization:organizational:*",
  ORGANIZATION_ORGANIZATIONAL_LIST:
    "organization_service:operational_organization:organizational:list",
  ORGANIZATION_ORGANIZATIONAL_READ:
    "organization_service:operational_organization:organizational:read",
  ORGANIZATION_ORGANIZATIONAL_CREATE:
    "organization_service:operational_organization:organizational:create",
  ORGANIZATION_ORGANIZATIONAL_UPDATE:
    "organization_service:operational_organization:organizational:update",
  ORGANIZATION_ORGANIZATIONAL_DELETE:
    "organization_service:operational_organization:organizational:delete",
  ORGANIZATION_ORGANIZATIONAL_DOWNLOAD:
    "organization_service:operational_organization:organizational:download",
  ORGANIZATION_ORGANIZATIONAL_UPLOAD:
    "organization_service:operational_organization:organizational:upload",
  ORGANIZATION_ORGANIZATIONAL_APPROVE:
    "organization_service:operational_organization:organizational:approve",
  ORGANIZATION_ORGANIZATIONAL_CANCEL_APPROVE:
    "organization_service:operational_organization:organizational:cancel_approve",
  ORGANIZATION_ORGANIZATIONAL_UPDATE_STATUS:
    "organization_service:operational_organization:organizational:update_status",
  // 2.3 Value Chains (actions: list, read, create, update, delete, download, upload, approve)
  ORGANIZATION_VALUE_CHAINS_FULL:
    "organization_service:operational_organization:value_chains:*",
  ORGANIZATION_VALUE_CHAINS_LIST:
    "organization_service:operational_organization:value_chains:list",
  ORGANIZATION_VALUE_CHAINS_READ:
    "organization_service:operational_organization:value_chains:read",
  ORGANIZATION_VALUE_CHAINS_CREATE:
    "organization_service:operational_organization:value_chains:create",
  ORGANIZATION_VALUE_CHAINS_UPDATE:
    "organization_service:operational_organization:value_chains:update",
  ORGANIZATION_VALUE_CHAINS_DELETE:
    "organization_service:operational_organization:value_chains:delete",
  ORGANIZATION_VALUE_CHAINS_DOWNLOAD:
    "organization_service:operational_organization:value_chains:download",
  ORGANIZATION_VALUE_CHAINS_UPLOAD:
    "organization_service:operational_organization:value_chains:upload",
  ORGANIZATION_VALUE_CHAINS_APPROVE:
    "organization_service:operational_organization:value_chains:approve",
  // 2.4 Mission (actions: list, read, create, update, copy, delete, download, upload, approve, setting)
  ORGANIZATION_MISSION_FULL:
    "organization_service:operational_organization:mission:*",
  ORGANIZATION_MISSION_LIST:
    "organization_service:operational_organization:mission:list",
  ORGANIZATION_MISSION_READ:
    "organization_service:operational_organization:mission:read",
  ORGANIZATION_MISSION_CREATE:
    "organization_service:operational_organization:mission:create",
  ORGANIZATION_MISSION_UPDATE:
    "organization_service:operational_organization:mission:update",
  ORGANIZATION_MISSION_COPY:
    "organization_service:operational_organization:mission:copy",
  ORGANIZATION_MISSION_DELETE:
    "organization_service:operational_organization:mission:delete",
  ORGANIZATION_MISSION_DOWNLOAD:
    "organization_service:operational_organization:mission:download",
  ORGANIZATION_MISSION_UPLOAD:
    "organization_service:operational_organization:mission:upload",
  ORGANIZATION_MISSION_APPROVE:
    "organization_service:operational_organization:mission:approve",
  ORGANIZATION_MISSION_SETTING:
    "organization_service:operational_organization:mission:setting",
  // 3. Sales — E-commerce (marketplace); shop-centric single resource.
  // Every marketplace area (orders, settlements, creators, sku mapping, sync,
  // analytics, credentials) is shop-scoped, so the module gates on one
  // resource `sales:ecommerce_management:shop` with standard actions.
  ECOMMERCE_SHOP_FULL: "sales:ecommerce_management:shop:*",
  ECOMMERCE_SHOP_LIST: "sales:ecommerce_management:shop:list",
  ECOMMERCE_SHOP_READ: "sales:ecommerce_management:shop:read",
  ECOMMERCE_SHOP_CREATE: "sales:ecommerce_management:shop:create",
  ECOMMERCE_SHOP_UPDATE: "sales:ecommerce_management:shop:update",
  ECOMMERCE_SHOP_DELETE: "sales:ecommerce_management:shop:delete",
  ECOMMERCE_SHOP_UPDATE_STATUS: "sales:ecommerce_management:shop:update_status",
  ECOMMERCE_SHOP_CONFIGURE: "sales:ecommerce_management:shop:configure",
  ECOMMERCE_SHOP_SETTING: "sales:ecommerce_management:shop:setting",
  ECOMMERCE_SHOP_SYNC: "sales:ecommerce_management:shop:sync",
  ECOMMERCE_SHOP_APPROVE: "sales:ecommerce_management:shop:approve",

  // 4. Sales & CRM. Every id below already exists in the permission catalog and
  // is already gated on by the frontend, so no role reseed is required — these
  // constants only give the gateway a typed name for a string tenants already
  // hold. Only actions that a gateway route actually uses are declared.

  // 4.1 Sales order (SO) — also covers the SO line-item routes.
  SALES_ORDERS_LIST: "sales:sales_management:sales_operations:sales_order:list",
  SALES_ORDERS_READ: "sales:sales_management:sales_operations:sales_order:read",
  SALES_ORDERS_CREATE:
    "sales:sales_management:sales_operations:sales_order:create",
  SALES_ORDERS_UPDATE:
    "sales:sales_management:sales_operations:sales_order:update",
  SALES_ORDERS_DELETE:
    "sales:sales_management:sales_operations:sales_order:delete",
  SALES_ORDERS_DOWNLOAD:
    "sales:sales_management:sales_operations:sales_order:download",
  SALES_ORDERS_UPDATE_STATUS:
    "sales:sales_management:sales_operations:sales_order:update_status",

  // 4.2 Lead — the CRM pipeline, plus its schedules/comments/tasks sub-objects.
  SALES_LEADS_LIST: "sales:sales_management:sales_operations:lead:list",
  SALES_LEADS_READ: "sales:sales_management:sales_operations:lead:read",
  SALES_LEADS_CREATE: "sales:sales_management:sales_operations:lead:create",
  SALES_LEADS_UPDATE: "sales:sales_management:sales_operations:lead:update",
  SALES_LEADS_DELETE: "sales:sales_management:sales_operations:lead:delete",

  // 4.3 Promotion.
  SALES_PROMOTIONS_LIST: "sales:sales_management:sales_operations:promotion:list",
  SALES_PROMOTIONS_READ: "sales:sales_management:sales_operations:promotion:read",
  SALES_PROMOTIONS_CREATE:
    "sales:sales_management:sales_operations:promotion:create",
  SALES_PROMOTIONS_UPDATE:
    "sales:sales_management:sales_operations:promotion:update",
  SALES_PROMOTIONS_DELETE:
    "sales:sales_management:sales_operations:promotion:delete",
  SALES_PROMOTIONS_UPDATE_STATUS:
    "sales:sales_management:sales_operations:promotion:update_status",

  // 4.4 Delivery receipt.
  SALES_DELIVERY_RECEIPTS_LIST:
    "sales:sales_management:sales_operations:delivery_receipt:list",
  SALES_DELIVERY_RECEIPTS_READ:
    "sales:sales_management:sales_operations:delivery_receipt:read",
  SALES_DELIVERY_RECEIPTS_CREATE:
    "sales:sales_management:sales_operations:delivery_receipt:create",
  SALES_DELIVERY_RECEIPTS_UPDATE:
    "sales:sales_management:sales_operations:delivery_receipt:update",

  // 4.5 After-sales & complaints. Catalog defines no `list`/`update_status`
  // for this resource, so listing maps to `read` and status changes to `update`.
  SALES_AFTER_SALES_READ:
    "sales:sales_management:sales_operations:after_sales_and_complaints:read",
  SALES_AFTER_SALES_CREATE:
    "sales:sales_management:sales_operations:after_sales_and_complaints:create",
  SALES_AFTER_SALES_UPDATE:
    "sales:sales_management:sales_operations:after_sales_and_complaints:update",
  SALES_AFTER_SALES_DELETE:
    "sales:sales_management:sales_operations:after_sales_and_complaints:delete",

  // 4.6 Pre-sales data. Catalog defines no `list`, so listing maps to `read`.
  SALES_PRE_SALES_READ:
    "sales:sales_management:sales_operations:pre_sales_data:read",
  SALES_PRE_SALES_CREATE:
    "sales:sales_management:sales_operations:pre_sales_data:create",
  SALES_PRE_SALES_UPDATE:
    "sales:sales_management:sales_operations:pre_sales_data:update",
  SALES_PRE_SALES_DELETE:
    "sales:sales_management:sales_operations:pre_sales_data:delete",

  // 4.7 Debt — split across three catalog resources. `debts_management` only
  // defines list/read, so debt mutations (netting, GL posting, reconciliation,
  // dunning) gate on `payment_document`, the resource that owns write actions.
  SALES_DEBTS_LIST:
    "sales:sales_management:sales_operations:debts_management:list",
  SALES_DEBTS_READ:
    "sales:sales_management:sales_operations:debts_management:read",
  SALES_SO_DEBTS_LIST: "sales:sales_management:sales_operations:so_debts:list",
  SALES_SO_DEBTS_READ: "sales:sales_management:sales_operations:so_debts:read",
  SALES_PAYMENT_DOCUMENTS_LIST:
    "sales:sales_management:sales_operations:payment_document:list",
  SALES_PAYMENT_DOCUMENTS_READ:
    "sales:sales_management:sales_operations:payment_document:read",
  SALES_PAYMENT_DOCUMENTS_CREATE:
    "sales:sales_management:sales_operations:payment_document:create",
  SALES_PAYMENT_DOCUMENTS_UPDATE:
    "sales:sales_management:sales_operations:payment_document:update",
  SALES_PAYMENT_DOCUMENTS_UPDATE_STATUS:
    "sales:sales_management:sales_operations:payment_document:update_status",

  // 4.8 Reporting.
  SALES_REPORTS_READ:
    "sales:sales_management:sales_operations:sales_report:read",
  SALES_ORDER_VOUCHERS_LIST:
    "sales:sales_management:sales_reporting:order_vouchers:list",
  SALES_ORDER_VOUCHERS_READ:
    "sales:sales_management:sales_reporting:order_vouchers:read",
  SALES_ORDER_INVENTORY_LIST:
    "sales:sales_management:sales_reporting:order_inventory:list",

  // 4.9 Planning — sales plan (actual-value screens) and sales cost.
  SALES_PLANS_READ:
    "sales:sales_management:planning_reporting:sales_plan:read",
  SALES_PLANS_CREATE:
    "sales:sales_management:planning_reporting:sales_plan:create",
  SALES_PLANS_UPDATE:
    "sales:sales_management:planning_reporting:sales_plan:update",
  SALES_PLANS_DELETE:
    "sales:sales_management:planning_reporting:sales_plan:delete",
  SALES_COSTS_LIST:
    "sales:sales_management:planning_reporting:sales_cost:list",
  SALES_COSTS_READ:
    "sales:sales_management:planning_reporting:sales_cost:read",
  SALES_COSTS_CREATE:
    "sales:sales_management:planning_reporting:sales_cost:create",
  SALES_COSTS_UPDATE:
    "sales:sales_management:planning_reporting:sales_cost:update",
  SALES_COSTS_DELETE:
    "sales:sales_management:planning_reporting:sales_cost:delete",

  // 4.10 Pricing policy.
  SALES_PRICING_POLICIES_READ: "sales:sales_management:pricing_policy:read",
  SALES_PRICING_POLICIES_CREATE: "sales:sales_management:pricing_policy:create",
  SALES_PRICING_POLICIES_UPDATE: "sales:sales_management:pricing_policy:update",
  SALES_PRICING_POLICIES_UPDATE_STATUS:
    "sales:sales_management:pricing_policy:update_status",
  SALES_PRICING_POLICIES_DELETE: "sales:sales_management:pricing_policy:delete",

  // 4.11 Sales settings — also covers the sale-type catalogue screens.
  SALES_SETTINGS_LIST: "sales:settings:list",
  SALES_SETTINGS_READ: "sales:settings:read",
  SALES_SETTINGS_CREATE: "sales:settings:create",
  SALES_SETTINGS_UPDATE: "sales:settings:update",
  SALES_SETTINGS_DELETE: "sales:settings:delete",

  // 4.12 Partners (customers). Lives under the administration application, not
  // sales — the customer master is shared, and the frontend gates on these ids.
  ADMINISTRATION_PARTNERS_LIST: "administration:partners:list",
  ADMINISTRATION_PARTNERS_READ: "administration:partners:read",
  ADMINISTRATION_PARTNERS_CREATE: "administration:partners:create",
  ADMINISTRATION_PARTNERS_UPDATE: "administration:partners:update",
  ADMINISTRATION_PARTNERS_DELETE: "administration:partners:delete",
};

export default PERMISSIONS;
