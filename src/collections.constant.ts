export type CollectionsConstantType = {
  [key in keyof typeof COLLECTIONS]: string;
};

const COLLECTIONS = {
  // Menu
  MENU_REPOSITORY_NAME: "menu",
  MENU_COLLECTION_NAME: "menus",

  // Menu Application
  MENU_APPLICATION_REPOSITORY_NAME: "menuApplication",
  MENU_APPLICATION_COLLECTION_NAME: "menu_applications",

  // Facility List
  FACILITY_LIST_REPOSITORY_NAME: "facilityList",
  FACILITY_LIST_COLLECTION_NAME: "facility_lists",

  // Channel List
  CHANNEL_LIST_REPOSITORY_NAME: "channelList",
  CHANNEL_LIST_COLLECTION_NAME: "channel_lists",

  // Currency List
  CURRENCY_LIST_REPOSITORY_NAME: "currencyList",
  CURRENCY_LIST_COLLECTION_NAME: "currency_lists",

  // Contract
  CONTRACT_LISTS_REPOSITORY_NAME: "contractList",
  CONTRACT_LISTS_COLLECTION_NAME: "contract_lists",
  CONTRACT_COLUMNS_REPOSITORY_NAME: "contractColumn",
  CONTRACT_COLUMNS_COLLECTION_NAME: "contract_columns",
  CONTRACT_MISSIONS_REPOSITORY_NAME: "contractMission",
  CONTRACT_MISSIONS_COLLECTION_NAME: "contract_missions",
  CONTRACT_HISTORIES_REPOSITORY_NAME: "contractHistory",
  CONTRACT_HISTORIES_COLLECTION_NAME: "contract_histories",
  CONTRACT_MISSION_COLUMNS_REPOSITORY_NAME: "contractMissionColumn",
  CONTRACT_MISSION_COLUMNS_COLLECTION_NAME: "contract_mission_columns",
  CONTRACT_LIBRARIES_REPOSITORY_NAME: "contractLibrary",
  CONTRACT_LIBRARIES_COLLECTION_NAME: "contract_libraries",
  CONTRACT_KEYS_REPOSITORY_NAME: "contractKey",
  CONTRACT_KEYS_COLLECTION_NAME: "contract_keys",

  // Selling Method
  SELLING_METHOD_REPOSITORY_NAME: "sellingMethod",
  SELLING_METHOD_COLLECTION_NAME: "selling_methods",

  // Warehouse
  WAREHOUSE_LIST_REPOSITORY_NAME: "warehouseList",
  WAREHOUSE_LIST_COLLECTION_NAME: "warehouse_lists",
  WAREHOUSE_TYPE_REPOSITORY_NAME: "warehouseType",
  WAREHOUSE_TYPE_COLLECTION_NAME: "warehouse_types",

  // Management Criteria
  MANAGEMENT_CRITERIA_REPOSITORY_NAME: "managementCriteria",
  MANAGEMENT_CRITERIA_COLLECTION_NAME: "management_criterias",

  // Method List
  METHOD_LIST_REPOSITORY_NAME: "methodList",
  METHOD_LIST_COLLECTION_NAME: "method_lists",

  // Method Item
  METHOD_ITEM_REPOSITORY_NAME: "methodItem",
  METHOD_ITEM_COLLECTION_NAME: "method_items",

  // Administration List
  ADMINISTRATION_LIST_REPOSITORY_NAME: "administrationList",
  ADMINISTRATION_LIST_COLLECTION_NAME: "administration_lists",

  // Administration Item
  ADMINISTRATION_ITEMS_REPOSITORY_NAME: "administrationItem",
  ADMINISTRATION_ITEMS_COLLECTION_NAME: "administration_items",

  // Customer
  CUSTOMER_REPOSITORY_NAME: "customer",
  CUSTOMER_COLLECTION_NAME: "customers",

  // Customer Detail
  CUSTOMER_DETAIL_REPOSITORY_NAME: "customerDetail",
  CUSTOMER_DETAIL_COLLECTION_NAME: "customer_details",

  // ORGANIZATION SERVICE
  // Employee
  EMPLOYEE_REPOSITORY_NAME: "employee",
  EMPLOYEE_COLLECTION_NAME: "employees",
  EMPLOYEE_DETAIL_REPOSITORY_NAME: "employeeDetail",
  EMPLOYEE_DETAIL_COLLECTION_NAME: "employee_details",
  EMPLOYEE_SETTING_REPOSITORY_NAME: "employeeSetting",
  EMPLOYEE_SETTING_COLLECTION_NAME: "employee_settings",
  EMPLOYEE_JOB_REPOSITORY_NAME: "employeeJob",
  EMPLOYEE_JOB_COLLECTION_NAME: "employee_jobs",
  EMPLOYEE_SALARY_REPOSITORY_NAME: "employeeSalary",
  EMPLOYEE_SALARY_COLLECTION_NAME: "employee_salaries",
  EMPLOYEE_SALARY_HISTORY_REPOSITORY_NAME: "employeeSalaryHistory",
  EMPLOYEE_SALARY_HISTORY_COLLECTION_NAME: "employee_salary_histories",

  // Organization
  ORGANIZATION_REPOSITORY_NAME: "organization",
  ORGANIZATION_COLLECTION_NAME: "organizations",

  // Department
  DEPARTMENT_REPOSITORY_NAME: "department",
  DEPARTMENT_COLLECTION_NAME: "departments",

  // Position
  POSITION_REPOSITORY_NAME: "position",
  POSITION_COLLECTION_NAME: "positions",

  // Org Setting
  ORG_SETTING_REPOSITORY_NAME: "orgSetting",
  ORG_SETTING_COLLECTION_NAME: "org_settings",

  // AUTH SERVICE
  // User
  TENANT_USER_REPOSITORY_NAME: "tenantUser",
  TENANT_USER_COLLECTION_NAME: "tenant_users",

  // Application
  TENANT_APPLICATION_REPOSITORY_NAME: "tenantApplication",
  TENANT_APPLICATION_COLLECTION_NAME: "tenant_applications",

  // Verify Email Token
  VERIFY_EMAIL_TOKEN_REPOSITORY_NAME: "verifyEmailToken",
  VERIFY_EMAIL_TOKEN_COLLECTION_NAME: "verify_email_tokens",

  // Authentication
  REFRESH_TOKEN_REPOSITORY_NAME: "refreshToken",
  REFRESH_TOKEN_COLLECTION_NAME: "refresh_tokens",

  // Authorize
  TENANT_ROLE_REPOSITORY_NAME: "tenantRole",
  TENANT_ROLE_COLLECTION_NAME: "tenant_roles",
  APPLICATION_ACTION_REPOSITORY_NAME: "applicationAction",
  APPLICATION_ACTION_COLLECTION_NAME: "application_actions",

  // AUTH2 PLATFORM
  AUTH2_REPOSITORY_NAME: "oAuth2",
  AUTH2_COLLECTION_NAME: "oauth2",

  // platform
  PLATFORM_REPOSITORY_NAME: "platformIntegration",
  PLATFORM_COLLECTION_NAME: "platform_integrations",
  // managements
  PLATFORM_MANAGEMENT_REPOSITORY_NAME: "platformManagement",
  PLATFORM_MANAGEMENT_COLLECTION_NAME: "platform_managements",
  // ecomerce
  EC_PRODUCTS_REPOSITORY_NAME: "ecProduct",
  EC_PRODUCTS_COLLECTION_NAME: "ec_products",
  EC_ORDERS_REPOSITORY_NAME: "ecOrder",
  EC_ORDERS_COLLECTION_NAME: "ec_orders",
  EC_ORDER_PRODUCTS_REPOSITORY_NAME: "ecOrderProduct",
  EC_ORDER_PRODUCTS_COLLECTION_NAME: "ec_order_products",

  // Verify Email Token
  VERIFY_PLATFORM_TOKEN_REPOSITORY_NAME: "verifyPlatformToken",
  VERIFY_PLATFORM_TOKEN_COLLECTION_NAME: "verify_platform_tokens",

  // Lock Login
  LOCK_LOGIN_REPOSITORY_NAME: "lockLogIn",
  LOCK_LOGIN_COLLECTION_NAME: "lock_log_in",

  // Webhooks
  WEBHOOKS_COLLECTION_NAME: "webHooks",
  WEBHOOKS_REPOSITORY_NAME: "web_hooks",

  // SALES PLAN
  // Sales Plan
  SALES_PLAN_CORE_COLLECTION_NAME: "sales_plan_cores",
  SALES_PLAN_YEAR_REPOSITORY_NAME: "salesPlanYear",
  SALES_PLAN_YEAR_COLLECTION_NAME: "sales_plan_years",
  ACTIONS_PLANS_REPOSITORY_NAME: "actionsPlan",
  ACTIONS_PLANS_COLLECTION_NAME: "actions_plans",
  SALES_PLAN_REPOSITORY_NAME: "salesPlan",
  SALES_PLAN_COLLECTION_NAME: "sales_plans",
  SALES_PLAN_GROUP_REPOSITORY_NAME: "salesPlanGroup",
  SALES_PLAN_GROUP_COLLECTION_NAME: "sales_plan_groups",
  SALES_PLAN_SETTING_REPOSITORY_NAME: "salesPlanSetting",
  SALES_PLAN_SETTING_COLLECTION_NAME: "sales_plan_settings",
  SALES_PLAN_PRODUCT_REPOSITORY_NAME: "salesPlanProduct",
  SALES_PLAN_PRODUCT_COLLECTION_NAME: "sales_plan_products",
  SALES_PLAN_CONFIGURATION_REPOSITORY_NAME: "salesPlanConfiguration",
  SALES_PLAN_CONFIGURATION_COLLECTION_NAME: "sales_plan_configurations",
  SALES_PLAN_REVENUE_CONFIGURATION_REPOSITORY_NAME:
    "salesPlanRevenueConfiguration",
  SALES_PLAN_REVENUE_CONFIGURATION_COLLECTION_NAME:
    "sales_plan_revenue_configurations",
  SALES_PLAN_REVENUE_CONFIGURATION_DETAIL_REPOSITORY_NAME:
    "salesPlanRevenueConfigurationDetail",
  SALES_PLAN_REVENUE_CONFIGURATION_DETAIL_COLLECTION_NAME:
    "sales_plan_revenue_configuration_details",
  SALES_PLAN_VERSION_REPOSITORY_NAME: "salesPlanVersion",
  SALES_PLAN_VERSION_COLLECTION_NAME: "sales_plan_versions",
  SALES_PLAN_ALLOCATION_REPOSITORY_NAME: "salesPlanAllocation",
  SALES_PLAN_ALLOCATION_COLLECTION_NAME: "sales_plan_allocations",
  SALES_PLAN_SUBDIVISION_REPOSITORY_NAME: "salesPlanSubdivision",
  SALES_PLAN_SUBDIVISION_COLLECTION_NAME: "sales_plan_subdivisions",
  SALES_PLAN_SUBDIVISION_CONFIG_REPOSITORY_NAME: "salesPlanSubdivisionConfig",

  // Sales Plan - collections view
  SALES_PLAN_DATA_STATISTICS_VIEWS_REPOSITORY_NAME:
    "salesPlanDataStatisticsView",
  SALES_PLAN_DATA_STATISTICS_VIEWS_COLLECTION_NAME:
    "sales_plan_data_statistics_views",
  SALES_PLAN_GROUPS_DATA_STATISTICS_VIEWS_REPOSITORY_NAME:
    "salesPlanGroupsDataStatisticsView",
  SALES_PLAN_GROUPS_DATA_STATISTICS_VIEWS_COLLECTION_NAME:
    "sales_plan_groups_data_statistics_views",

  // Purchase Plan
  PURCHASE_PLAN_REPOSITORY_NAME: "purchasePlan",
  PURCHASE_PLAN_COLLECTION_NAME: "purchase_plans",
  PURCHASE_PLAN_GROUP_REPOSITORY_NAME: "purchasePlanGroup",
  PURCHASE_PLAN_GROUP_COLLECTION_NAME: "purchase_plan_groups",

  // HumanResourcePlanning  - SalaryAndBenefit
  SALARY_BENEFIT_DEPARTMENT_REPOSITORY_NAME: "salaryBenefitDepartment",
  SALARY_BENEFIT_DEPARTMENT_COLLECTION_NAME: "salary_benefit_departments",
  SALARY_BENEFIT_PLAN_REPOSITORY_NAME: "salaryBenefitPlan",
  SALARY_BENEFIT_PLAN_COLLECTION_NAME: "salary_benefit_plans",
  SALARY_BENEFIT_PLAN_MONTH_REPOSITORY_NAME: "salaryBenefitPlanMonth",
  SALARY_BENEFIT_PLAN_MONTH_COLLECTION_NAME: "salary_benefit_plan_months",
  SALARY_BENEFIT_SPECIAL_COLUMN_REPOSITORY_NAME: "salaryBenefitSpecialColumn",
  SALARY_BENEFIT_SPECIAL_COLUMN_COLLECTION_NAME:
    "salary_benefit_special_columns",

  // Actual Sales
  ACTUAL_SALES_PRODUCT_REPOSITORY_NAME: "actualSalesProduct",
  ACTUAL_SALES_PRODUCT_COLLECTION_NAME: "actual_sales_products",

  ACTUAL_SALES_GROUP_REPOSITORY_NAME: "actualSalesGroup",
  ACTUAL_SALES_GROUP_COLLECTION_NAME: "actual_sales_groups",

  PLAN_QUANTITY_REPOSITORY_NAME: "planQuantity",
  PLAN_QUANTITY_COLLECTION_NAME: "plan_quantities",

  SALES_PLAN_YEAR_STATUS_REPOSITORY_NAME: "salesPlanYearStatus",
  SALES_PLAN_YEAR_STATUS_COLLECTION_NAME: "sales_plan_year_status",

  // FM01 Classification Mapping
  FINANCE_MODAL_CLASSIFICATION_MAPPING_REPOSITORY_NAME:
    "financialModelClassificationMapping",
  FINANCE_MODAL_CLASSIFICATION_MAPPING_COLLECTION_NAME:
    "financial_model_classification_mappings",

  // Order products
  SALES_ORDER_PRODUCTS_REPOSITORY_NAME: "salesOrderProduct",
  SALES_ORDER_PRODUCTS_COLLECTION_NAME: "sales_order_products",

  // SHARED SERVICE
  // Activity Log
  ACTIVITY_LOG_REPOSITORY_NAME: "activityLog",
  ACTIVITY_LOG_COLLECTION_NAME: "activity_logs",

  // Setting Common
  SETTING_COMMON_REPOSITORY_NAME: "settingCommon",
  SETTING_COMMON_COLLECTION_NAME: "setting_commons",

  // Setting Financial Year
  SETTING_FINANCIAL_YEAR_REPOSITORY_NAME: "settingFinancialYear",
  SETTING_FINANCIAL_YEAR_COLLECTION_NAME: "setting_financial_years",

  // Setting Access Token
  SETTING_ACCESS_TOKEN_REPOSITORY_NAME: "settingAccessToken",
  SETTING_ACCESS_TOKEN_COLLECTION_NAME: "setting_access_tokens",

  // Setting Ecommerce Platform
  SETTING_ECOMMERCE_PLATFORM_REPOSITORY_NAME: "settingEcommercePlatform",
  SETTING_ECOMMERCE_PLATFORM_COLLECTION_NAME: "setting_ecommerce_platforms",

  // setting invoices
  SETTING_INVOICE_REPOSITORY_NAME: "settingInvoice",
  SETTING_INVOICE_COLLECTION_NAME: "setting_invoices",
  // Province
  PROVINCE_REPOSITORY_NAME: "province",
  PROVINCE_COLLECTION_NAME: "provinces",

  // District
  DISTRICT_REPOSITORY_NAME: "district",
  DISTRICT_COLLECTION_NAME: "districts",

  // PRODUCT SERVICE
  // in-out Inventories
  IN_OUT_INVENTORY_REPOSITORY_NAME: "inOutInventory",
  IN_OUT_INVENTORY_COLLECTION_NAME: "in_out_inventories",
  IN_OUT_PRODUCTS_REPOSITORY_NAME: "inOutProduct",
  IN_OUT_PRODUCTS_COLLECTION_NAME: "in_out_products",

  // Inventories
  INVENTORY_TRANSACTION_REPOSITORY_NAME: "inventoryTransaction",
  INVENTORY_TRANSACTION_COLLECTION_NAME: "inventory_transactions",
  INVENTORY_PRODUCTS_REPOSITORY_NAME: "inventoryProduct",
  INVENTORY_PRODUCTS_COLLECTION_NAME: "inventory_products",

  // Order Inventories for SOPO & another modules
  ORDER_INVENTORY_REPOSITORY_NAME: "orderInventory",
  ORDER_INVENTORY_COLLECTION_NAME: "order_inventories",

  // Inventories - Order Product Items
  ORDER_PRODUCT_ITEM_REPOSITORY_NAME: "orderProductItem",
  ORDER_PRODUCT_ITEM_COLLECTION_NAME: "order_product_items",

  // Warehouse Products
  WAREHOUSE_PRODUCT_REPOSITORY_NAME: "warehouseProduct",
  WAREHOUSE_PRODUCT_COLLECTION_NAME: "warehouse_products",

  // Warehouse Setting
  WAREHOUSE_SETTING_REPOSITORY_NAME: "warehouseSetting",
  WAREHOUSE_SETTING_COLLECTION_NAME: "warehouse_settings",

  // Group Labels
  GROUP_LABEL_REPOSITORY_NAME: "productGroupLabel",
  GROUP_LABEL_COLLECTION_NAME: "product_group_labels",

  // Product Items
  PRODUCT_ITEM_REPOSITORY_NAME: "productItem",
  PRODUCT_ITEM_COLLECTION_NAME: "product_items",

  // Product Details
  PRODUCT_DETAIL_REPOSITORY_NAME: "productDetail",
  PRODUCT_DETAIL_COLLECTION_NAME: "product_details",

  // Product Variants
  PRODUCT_VARIANT_REPOSITORY_NAME: "productVariant",
  PRODUCT_VARIANT_COLLECTION_NAME: "product_variants",

  // Product Combos
  PRODUCT_COMBO_REPOSITORY_NAME: "productCombo",
  PRODUCT_COMBO_COLLECTION_NAME: "product_combos",

  // Order products
  WAREHOUSE_REPOSITORY_NAME: "warehouse",
  WAREHOUSE_COLLECTION_NAME: "warehouses",

  // Voucher Parameter
  VOUCHER_PARAMETER_REPOSITORY_NAME: "voucherParameter",
  VOUCHER_PARAMETER_COLLECTION_NAME: "voucher_parameters",

  // Product History
  PRODUCT_IMPORT_HISTORIES_REPOSITORY_NAME: "productImportHistories",
  PRODUCT_IMPORT_HISTORIES_COLLECTION_NAME: "product_import_histories",

  // Product Setting
  PRODUCT_SETTING_REPOSITORY_NAME: "productSetting",
  PRODUCT_SETTING_COLLECTION_NAME: "product_settings",

  // Bizcore - API
  // Value Chains
  VALUE_CHAIN_REPOSITORY_NAME: "valueChain",
  VALUE_CHAIN_COLLECTION_NAME: "value_chains",
  PROCESS_REPOSITORY_NAME: "process",
  PROCESS_COLLECTION_NAME: "processes",
  PROCESS_DETAIL_REPOSITORY_NAME: "processDetail",
  PROCESS_DETAIL_COLLECTION_NAME: "process_details",

  // Financial Model
  FINANCE_MODAL_LIST_REPOSITORY_NAME: "financialModelList",
  FINANCE_MODAL_LIST_COLLECTION_NAME: "financial_model_lists",
  FINANCE_MODAL_TARGET_REPOSITORY_NAME: "financialModelTarget",
  FINANCE_MODAL_TARGET_COLLECTION_NAME: "financial_model_targets",
  FINANCE_MODAL_CONFIGURATION_REPOSITORY_NAME: "financialModelConfiguration",
  FINANCE_MODAL_CONFIGURATION_COLLECTION_NAME: "financial_model_configurations",
  FINANCE_MODAL_TARGET_CONFIGURATION_REPOSITORY_NAME:
    "financialModelTargetConfiguration",
  FINANCE_MODAL_TARGET_CONFIGURATION_COLLECTION_NAME:
    "financial_model_target_configurations",
  FINANCE_MODAL_VERSION_REPOSITORY_NAME: "financialModelVersion",
  FINANCE_MODAL_VERSION_COLLECTION_NAME: "financial_model_versions",
  FINANCE_MODAL_ALLOCATION_MAPPING_REPOSITORY_NAME:
    "financialModelAllocationMapping",
  FINANCE_MODAL_ALLOCATION_MAPPING_COLLECTION_NAME:
    "financial_model_allocation_mappings",

  // Expense List
  EXPENSE_LISTS_REPOSITORY_NAME: "expenseList",
  EXPENSE_LISTS_COLLECTION_NAME: "expense_lists",
  ACTUAL_EXPENSE_LISTS_REPOSITORY_NAME: "actualExpenseList",
  ACTUAL_EXPENSE_LISTS_COLLECTION_NAME: "actual_expense_lists",
  REAL_EXPENSE_LISTS_REPOSITORY_NAME: "realExpenseList",
  REAL_EXPENSE_LISTS_COLLECTION_NAME: "real_expense_lists",

  // Init Business Plan
  INIT_BUSINESS_LAN_REPOSITORY_NAME: "initBusinessPlan",
  INIT_BUSINESS_LAN_COLLECTION_NAME: "init_business_plans",

  // Actual profit
  ACTUAL_PROFIT_REPOSITORY_NAME: "actualProfit",
  ACTUAL_PROFIT_COLLECTION_NAME: "actual_profits",

  // Product Service
  PRODUCT_SERVICE_REPOSITORY_NAME: "productService",
  PRODUCT_SERVICE_COLLECTION_NAME: "product_services",
  PRODUCT_CATEGORY_REPOSITORY_NAME: "productCategory",
  PRODUCT_CATEGORY_COLLECTION_NAME: "product_categories",

  // Department Mission
  DEPARTMENT_SEGMENT_REPOSITORY_NAME: "departmentSegment",
  DEPARTMENT_SEGMENT_COLLECTION_NAME: "department_segments",
  DEPARTMENT_TODO_REPOSITORY_NAME: "departmentTodo",
  DEPARTMENT_TODO_COLLECTION_NAME: "department_todos",
  DEPARTMENT_CHECKLIST_REPOSITORY_NAME: "departmentChecklist",
  DEPARTMENT_CHECKLIST_COLLECTION_NAME: "department_checklists",
  DEPARTMENT_REGULATION_REPOSITORY_NAME: "departmentRegulation",
  DEPARTMENT_REGULATION_COLLECTION_NAME: "department_regulations",
  DEPARTMENT_REGULATION_ITEM_REPOSITORY_NAME: "departmentRegulationItem",
  DEPARTMENT_REGULATION_ITEM_COLLECTION_NAME: "department_regulation_items",

  // Balance Score Cards
  BALANCE_SCORE_CARD_REPOSITORY_NAME: "balanceScoreCard",
  BALANCE_SCORE_CARD_COLLECTION_NAME: "balance_score_cards",
  BALANCE_SCORE_CARD_LIST_REPOSITORY_NAME: "balancedScoreCardList",
  BALANCE_SCORE_CARD_LIST_COLLECTION_NAME: "balanced_score_card_lists",
  BALANCE_SCORE_CARD_ITEM_REPOSITORY_NAME: "balancedScorecardItem",
  BALANCE_SCORE_CARD_ITEM_COLLECTION_NAME: "balanced_score_card_items",
  BALANCE_SCORE_CARD_ITEM_FIELD_REPOSITORY_NAME: "balancedScoreCardItemField",
  BALANCE_SCORE_CARD_ITEM_FIELD_COLLECTION_NAME:
    "balanced_score_card_item_fields",
  BALANCE_SCORE_VERSION_REPOSITORY_NAME: "balancedScoreCardVersion",
  BALANCE_SCORE_VERSION_COLLECTION_NAME: "balanced_score_card_versions",

  // Cash flow
  CASH_FLOW_LIST_REPOSITORY_NAME: "cashFlowList",
  CASH_FLOW_LIST_COLLECTION_NAME: "cash_flow_lists",
  ACTUAL_CASH_FLOW_LIST_REPOSITORY_NAME: "actualCashFlowList",
  ACTUAL_CASH_FLOW_LIST_COLLECTION_NAME: "actual_cash_flow_lists",
  REAL_CASH_FLOW_LIST_REPOSITORY_NAME: "realCashFlowList",
  REAL_CASH_FLOW_LIST_COLLECTION_NAME: "real_cash_flow_lists",

  // FM02
  FM_STYLE_2_LIST_REPOSITORY_NAME: "financialModelStyle2List",
  FM_STYLE_2_LIST_COLLECTION_NAME: "financial_model_style_2_lists",
  FM_STYLE_2_CONFIGURATION_REPOSITORY_NAME:
    "financialModelStyle2Configurations",
  FM_STYLE_2_CONFIGURATION_COLLECTION_NAME:
    "financial_model_style_2_configurations",
  FM_STYLE_2_CONFIGURATION_ALLOCATION_REPOSITORY_NAME:
    "financialModelStyle2Allocations",
  FM_STYLE_2_CONFIGURATION_ALLOCATION_COLLECTION_NAME:
    "financial_model_style_2_allocations",
  FM_STYLE_2_TARGET_REPOSITORY_NAME: "financialModelStyle2Target",
  FM_STYLE_2_TARGET_COLLECTION_NAME: "financial_model_style_2_target",
  FM_STYLE_2_VERSION_REPOSITORY_NAME: "financialModelStyle2Version",
  FM_STYLE_2_VERSION_COLLECTION_NAME: "financial_model_style_2_versions",

  // Setting
  CORE_SETTING_REPOSITORY_NAME: "coreSetting",
  CORE_SETTING_COLLECTION_NAME: "core_settings",

  // Income and Revenue
  INCOME_AND_REVENUE_LIST_REPOSITORY_NAME: "incomeAndRevenueList",
  INCOME_AND_REVENUE_LIST_COLLECTION_NAME: "income_and_revenue_lists",
  ACTUAL_INCOME_AND_REVENUE_LIST_REPOSITORY_NAME: "actualIncomeAndRevenueList",
  ACTUAL_INCOME_AND_REVENUE_LIST_COLLECTION_NAME:
    "actual_income_and_revenue_lists",

  // SyncMethod
  SYNC_METHOD_REPOSITORY_NAME: "syncMethod",
  SYNC_METHOD_COLLECTION_NAME: "sync_methods",

  // T&M Contract
  TM_CONTRACT_REPOSITORY_NAME: "tmContract",
  TM_CONTRACT_COLLECTION_NAME: "tm_contracts",
  TM_CONTRACT_BONUS_REPOSITORY_NAME: "tmContractBonus",
  TM_CONTRACT_BONUS_COLLECTION_NAME: "tm_contract_bonuses",
  TM_CONTRACT_BUDGET_REPOSITORY_NAME: "tmContractBudget",
  TM_CONTRACT_BUDGET_COLLECTION_NAME: "tm_contract_budgets",
  TM_CONTRACT_SALARY_REPOSITORY_NAME: "tmContractSalary",
  TM_CONTRACT_SALARY_COLLECTION_NAME: "tm_contract_salaries",
  TM_CONTRACT_TARGET_REPOSITORY_NAME: "tmContractTarget",
  TM_CONTRACT_TARGET_COLLECTION_NAME: "tm_contract_targets",
  TM_CONTRACT_BOUNDARY_REPOSITORY_NAME: "tmContractBoundary",
  TM_CONTRACT_BOUNDARY_COLLECTION_NAME: "tm_contract_boundaries",

  // Transport list
  TRANSPORT_LIST_REPOSITORY_NAME: "transportList",
  TRANSPORT_LIST_COLLECTION_NAME: "transport_lists",
  TRANSPORT_STATUS_REPOSITORY_NAME: "transportStatus",
  TRANSPORT_STATUS_COLLECTION_NAME: "transport_statuses",

  // Version
  VERSION_REPOSITORY_NAME: "version",
  VERSION_COLLECTION_NAME: "versions",

  // FinancialPlanAndReport
  FINANCIAL_PLAN_AND_REPORT_REPOSITORY_NAME: "financialPlanAndReport",
  FINANCIAL_PLAN_AND_REPORT_COLLECTION_NAME: "financial_plan_and_reports",

  // FinancialPlanAndReportItem
  FINANCIAL_PLAN_AND_REPORT_FM01_ITEM_REPOSITORY_NAME:
    "financialPlanAndReportFm01Item",
  FINANCIAL_PLAN_AND_REPORT_FM01_ITEM_COLLECTION_NAME:
    "financial_plan_and_report_fm01_items",

  // FM03
  FM_STYLE_3_VERSION_REPOSITORY_NAME: "financialModelStyle3Version",
  FM_STYLE_3_VERSION_COLLECTION_NAME: "financial_model_style_3_versions",
  FM_STYLE_3_CONFIG_REPOSITORY_NAME: "financialModelStyle3Config",
  FM_STYLE_3_CONFIG_COLLECTION_NAME: "financial_model_style_3_configs",

  // HCM - API
  // Dashboard
  DASHBOARD_REPOSITORY_NAME: "dashboard",
  DASHBOARD_COLLECTION_NAME: "dashboards",

  // Salary ranges
  SALARY_SETTING_REPOSITORY_NAME: "salarySetting",
  SALARY_SETTING_COLLECTION_NAME: "salary_settings",
  SALARY_RANGER_REPOSITORY_NAME: "salaryRange",
  SALARY_RANGER_COLLECTION_NAME: "salary_ranges",
  SALARY_HISTORY_REPOSITORY_NAME: "salaryHistory",
  SALARY_HISTORY_COLLECTION_NAME: "salary_histories",

  // Payroll Template
  PAYROLL_TEMPLATE_SETTING_REPOSITORY_NAME: "payrollTemplateSetting",
  PAYROLL_TEMPLATE_SETTING_COLLECTION_NAME: "payroll_template_settings",
  PAYROLL_TEMPLATE_EMPLOYEE_REPOSITORY_NAME: "payrollTemplateEmployee",
  PAYROLL_TEMPLATE_EMPLOYEE_COLLECTION_NAME: "payroll_template_employees",

  // Paycheck
  PAYCHECK_SETTING_REPOSITORY_NAME: "paycheckSetting",
  PAYCHECK_SETTING_COLLECTION_NAME: "paycheck_settings",
  PAYCHECK_EMPLOYEE_REPOSITORY_NAME: "paycheckEmployee",
  PAYCHECK_EMPLOYEE_COLLECTION_NAME: "paycheck_employees",

  // Salary Composition
  SALARY_COMPOSITION_REPOSITORY_NAME: "salaryComposition",
  SALARY_COMPOSITION_COLLECTION_NAME: "salary_compositions",

  // Setting
  HCM_SETTING_REPOSITORY_NAME: "hcmSetting",
  HCM_SETTING_COLLECTION_NAME: "hcm_settings",
  SETTING_WORKING_DAY_REPOSITORY_NAME: "settingWorkingDay",
  SETTING_WORKING_DAY_COLLECTION_NAME: "setting_working_days",
  SETTING_HOLIDAY_REPOSITORY_NAME: "settingHoliday",
  SETTING_HOLIDAY_COLLECTION_NAME: "setting_holidays",

  // Payroll
  PAYROLL_REPOSITORY_NAME: "payroll",
  PAYROLL_COLLECTION_NAME: "payrolls",
  PAYROLL_SETTING_REPOSITORY_NAME: "payrollSetting",
  PAYROLL_SETTING_COLLECTION_NAME: "payroll_settings",
  PAYROLL_EMPLOYEE_REPOSITORY_NAME: "payrollEmployee",
  PAYROLL_EMPLOYEE_COLLECTION_NAME: "payroll_employees",

  // Bonus Mechanism
  BONUS_ITEM_REPOSITORY_NAME: "bonusItem",
  BONUS_ITEM_COLLECTION_NAME: "bonus_items",
  BONUS_RANGE_REPOSITORY_NAME: "bonusRange",
  BONUS_RANGE_COLLECTION_NAME: "bonus_ranges",
  BONUS_CATEGORY_REPOSITORY_NAME: "bonusCategory",
  BONUS_CATEGORY_COLLECTION_NAME: "bonus_categories",
  BONUS_RANGE_EMPLOYEE_REPOSITORY_NAME: "bonusRangeEmployee",
  BONUS_RANGE_EMPLOYEE_COLLECTION_NAME: "bonus_range_employees",
  BONUS_CALCULATE_BASIS_REPOSITORY_NAME: "bonusCalculateBasis",
  BONUS_CALCULATE_BASIS_COLLECTION_NAME: "bonus_calculate_basis",
  BONUS_CALCULATE_SCHEDULE_REPOSITORY_NAME: "bonusCalculateSchedule",
  BONUS_CALCULATE_SCHEDULE_COLLECTION_NAME: "bonus_calculate_schedules",
  BONUS_CALCULATE_BASIS_CONFIG_REPOSITORY_NAME: "bonusCalculateBasisConfig",
  BONUS_CALCULATE_BASIS_CONFIG_COLLECTION_NAME: "bonus_calculate_basis_configs",

  // Leave Management
  LEAVE_REPOSITORY_NAME: "leave",
  LEAVE_COLLECTION_NAME: "leaves",
  LEAVE_CONFIG_REPOSITORY_NAME: "leaveConfiguration",
  LEAVE_CONFIG_COLLECTION_NAME: "leave_configurations",
  LEAVE_EMPLOYEE_REPOSITORY_NAME: "leaveEmployee",
  LEAVE_EMPLOYEE_COLLECTION_NAME: "leave_employees",
  LEAVE_DEPARTMENT_REPOSITORY_NAME: "leaveDepartment",
  LEAVE_DEPARTMENT_COLLECTION_NAME: "leave_departments",

  // Timekeeping
  TIMEKEEPING_SETTING_REPOSITORY_NAME: "timekeepingSettings",
  TIMEKEEPING_SETTING_COLLECTION_NAME: "timekeeping_settings",
  TIMEKEEPING_TIMEKEEPER_REPOSITORY_NAME: "timekeepingTimekeeper",
  TIMEKEEPING_TIMEKEEPER_COLLECTION_NAME: "timekeeping_timekeepers",
  TIMEKEEPING_EMPLOYEE_CONFIG_REPOSITORY_NAME: "timekeepingEmployeeConfig",
  TIMEKEEPING_EMPLOYEE_CONFIG_COLLECTION_NAME: "timekeeping_employee_configs",
  TIMEKEEPING_SUMMARY_REPOSITORY_NAME: "timekeepingSummary",
  TIMEKEEPING_SUMMARY_COLLECTION_NAME: "timekeeping_summaries",
  TIMEKEEPING_DETAIL_REPOSITORY_NAME: "timekeepingDetail",
  TIMEKEEPING_DETAIL_COLLECTION_NAME: "timekeeping_details",
  TIMEKEEPING_OVERTIME_REPOSITORY_NAME: "timekeepingOverTime",
  TIMEKEEPING_OVERTIME_COLLECTION_NAME: "timekeeping_overtimes",
  TIMEKEEPING_COMPONENT_REPOSITORY_NAME: "timekeepingComponent",
  TIMEKEEPING_COMPONENT_COLLECTION_NAME: "timekeeping_components",
  TIMEKEEPING_EMPLOYEE_REPOSITORY_NAME: "timekeepingEmployee",
  TIMEKEEPING_EMPLOYEE_COLLECTION_NAME: "timekeeping_employees",
  TIMEKEEPING_REQUEST_REPOSITORY_NAME: "timekeepingRequest",
  TIMEKEEPING_REQUEST_COLLECTION_NAME: "timekeeping_requests",

  // Work Shift
  WORK_SHIFT_REPOSITORY_NAME: "workShift",
  WORK_SHIFT_COLLECTION_NAME: "work_shift",
  WORK_SHIFT_ITEM_REPOSITORY_NAME: "workShiftItem",
  WORK_SHIFT_ITEM_COLLECTION_NAME: "work_shift_items",
  WORK_SHIFT_EMPLOYEE_REPOSITORY_NAME: "workShiftEmployee",
  WORK_SHIFT_EMPLOYEE_COLLECTION_NAME: "work_shift_employees",

  // Setting
  MOBILE_SETTING_REPOSITORY_NAME: "mobileSetting",
  MOBILE_SETTING_COLLECTION_NAME: "mobile_settings",

  // SALE - API
  // Sale Order
  VENDOR_CONFIRM_REPOSITORY_NAME: "vendorConfirm",
  VENDOR_CONFIRM_COLLECTION_NAME: "vendor_confirm",
  INVOICES_REPOSITORY_NAME: "invoice",
  INVOICES_COLLECTION_NAME: "invoices",
  SALE_TYPES_REPOSITORY_NAME: "saleType",
  SALE_TYPES_COLLECTION_NAME: "sale_types",
  SALE_ORDERS_REPOSITORY_NAME: "salesOrder",
  SALE_ORDERS_COLLECTION_NAME: "sales_orders",
  SALE_ORDERS_DETAIL_REPOSITORY_NAME: "salesOrderDetail",
  SALE_ORDERS_DETAIL_COLLECTION_NAME: "sales_order_details",
  SALE_ORDERS_HISTORY_REPOSITORY_NAME: "salesOrderHistories",
  SALE_ORDERS_HISTORY_COLLECTION_NAME: "sales_order_histories",
  ORDER_DASHBOARDS_REPOSITORY_NAME: "salesOrderDashboard",
  ORDER_DASHBOARDS_COLLECTION_NAME: "sales_order_dashboards",
  DASHBOARD_PROCESS_ITEMS_REPOSITORY_NAME: "dashboardProcessItem",
  DASHBOARD_PROCESS_ITEMS_COLLECTION_NAME: "dashboard_process_items",

  // Lead
  LEAD_ITEM_REPOSITORY_NAME: "leadItem",
  LEAD_ITEM_COLLECTION_NAME: "lead_items",
  LEAD_DETAIL_REPOSITORY_NAME: "leadDetail",
  LEAD_DETAIL_COLLECTION_NAME: "lead_details",
  LEAD_STATUS_REPOSITORY_NAME: "leadStatus",
  LEAD_STATUS_COLLECTION_NAME: "lead_statuses",
  LEAD_PRODUCT_REPOSITORY_NAME: "leadProduct",
  LEAD_PRODUCT_COLLECTION_NAME: "lead_products",
  LEAD_SETTING_REPOSITORY_NAME: "leadSetting",
  LEAD_SETTING_COLLECTION_NAME: "lead_settings",
  LEAD_HISTORY_REPOSITORY_NAME: "leadHistory",
  LEAD_HISTORY_COLLECTION_NAME: "lead_histories",
  LEAD_SCHEDULE_REPOSITORY_NAME: "leadSchedule",
  LEAD_SCHEDULE_COLLECTION_NAME: "lead_schedules",
  LEAD_COMMENT_REPOSITORY_NAME: "leadComment",
  LEAD_COMMENT_COLLECTION_NAME: "lead_comments",
  LEAD_SALE_TYPE_REPOSITORY_NAME: "leadSaleType",
  LEAD_SALE_TYPE_COLLECTION_NAME: "lead_sale_types",
  PAYMENT_METHOD_REPOSITORY_NAME: "paymentMethod",
  PAYMENT_METHOD_COLLECTION_NAME: "payment_methods",
  TRANSPORTATION_REPOSITORY_NAME: "transportation",
  TRANSPORTATION_COLLECTION_NAME: "transportations",
  LEAD_DEPARTMENT_REPOSITORY_NAME: "leadDepartment",
  LEAD_DEPARTMENT_COLLECTION_NAME: "lead_departments",
  NEGOTIATION_DETAIL_REPOSITORY_NAME: "negotiationDetail",
  NEGOTIATION_DETAIL_COLLECTION_NAME: "negotiation_details",

  // Campaign Price
  CAMPAIGN_PRICE_REPOSITORY_NAME: "campaignPrice",
  CAMPAIGN_PRICE_COLLECTION_NAME: "campaign_prices",

  CAMPAIGN_PRODUCT_PRICE_REPOSITORY_NAME: "campaignProductPrice",
  CAMPAIGN_PRODUCT_PRICE_COLLECTION_NAME: "campaign_product_prices",

  CAMPAIGN_PRICE_HISTORY_REPOSITORY_NAME: "campaignPriceHistory",
  CAMPAIGN_PRICE_HISTORY_COLLECTION_NAME: "campaign_price_histories",

  // Sales Plan
  SALES_PLAN_CLASSIFICATION_LIST_REPOSITORY_NAME: "salesPlanClassificationList",
  SALES_PLAN_CLASSIFICATION_LIST_COLLECTION_NAME:
    "sales_plan_classification_lists",

  // Setting
  SALES_SETTING_REPOSITORY_NAME: "salesSetting",
  SALES_SETTING_COLLECTION_NAME: "sales_settings",

  // promotion Product
  PROMOTION_PRODUCT_REPOSITORY_NAME: "promotionProduct",
  PROMOTION_PRODUCT_COLLECTION_NAME: "promotion_products",

  // promotion group label
  PROMOTION_GROUP_LABEL_REPOSITORY_NAME: "promotionGroupLabel",
  PROMOTION_GROUP_LABEL_COLLECTION_NAME: "promotion_group_labels",

  // promotion
  PROMOTION_REPOSITORY_NAME: "promotion",
  PROMOTION_COLLECTION_NAME: "promotions",

  // promotion details
  PROMOTION_DETAILS_REPOSITORY_NAME: "promotionDetails",
  PROMOTION_DETAILS_COLLECTION_NAME: "promotion_details",

  // promotion details
  PROMOTION_HISTORY_REPOSITORY_NAME: "promotion_histories",
  PROMOTION_HISTORY_COLLECTION_NAME: "promotionHistory",
  // promotion report
  PROMOTION_REPORT_REPOSITORY_NAME: "promotionReport",
  PROMOTION_REPORT_COLLECTION_NAME: "promotion_reports",

  // promotion report views
  PROMOTION_REPORT_VIEW_REPOSITORY_NAME: "promotionReportView",
  PROMOTION_REPORT_VIEW_COLLECTION_NAME: "promotion_report_views",

  // promotion Type
  PROMOTION_TYPE_REPOSITORY_NAME: "promotionType",
  PROMOTION_TYPE_COLLECTION_NAME: "promotion_types",

  // Delivery Order
  DELIVERY_ORDER_REPOSITORY_NAME: "deliveryOrder",
  DELIVERY_ORDER_COLLECTION_NAME: "delivery_orders",

  // Delivery Product
  DELIVERY_PRODUCT_REPOSITORY_NAME: "deliveryProduct",
  DELIVERY_PRODUCT_COLLECTION_NAME: "delivery_products",

  // Delivery History
  DELIVERY_HISTORY_REPOSITORY_NAME: "deliveryHistory",
  DELIVERY_HISTORY_COLLECTION_NAME: "delivery_histories",

  // Sale costs
  SALE_COSTS_REPOSITORY_NAME: "saleCosts",
  SALE_COSTS_COLLECTION_NAME: "sale_costs",
  SALE_COSTS_CONFIGURATION_REPOSITORY_NAME: "saleCostsConfiguration",
  SALE_COSTS_CONFIGURATION_COLLECTION_NAME: "sale_costs_configurations",

  // ProductAccountingValue
  PRODUCT_ACCOUNTING_VALUES_REPOSITORY_NAME: "productAccountingValues",
  PRODUCT_ACCOUNTING_VALUES_COLLECTION_NAME: "product_accounting_values",

  // GroupLabelAccountingValue
  GROUP_LABEL_ACCOUNTING_VALUES_REPOSITORY_NAME: "groupLabelAccountingValues",
  GROUP_LABEL_ACCOUNTING_VALUES_COLLECTION_NAME:
    "group_label_accounting_values",

  // Debt
  DEBTS_REPOSITORY_NAME: "debts",
  DEBTS_COLLECTION_NAME: "debts",
  DEBT_DETAILS_REPOSITORY_NAME: "debtDetail",
  DEBT_DETAILS_COLLECTION_NAME: "debt_details",
  DEBT_HISTORIES_REPOSITORY_NAME: "debtHistory",
  DEBT_HISTORIES_COLLECTION_NAME: "debt_histories",

  // order voucher
  ORDER_VOUCHER_REPOSITORY_NAME: "orderVouchers",
  ORDER_VOUCHER_COLLECTION_NAME: "order_vouchers",

  // WAREHOUSE - API
  // Sale Order
  ORDER_ADDRESSES_REPOSITORY_NAME: "orderAddress",
  ORDER_ADDRESSES_COLLECTION_NAME: "order_addresses",
  ORDER_HISTORIES_REPOSITORY_NAME: "orderHistory",
  ORDER_HISTORIES_COLLECTION_NAME: "order_histories",
  ORDER_PROMOTIONS_REPOSITORY_NAME: "orderPromotion",
  ORDER_PROMOTIONS_COLLECTION_NAME: "order_promotions",

  // ware house
  WAREHOUSE_VOUCHER_REPOSITORY_NAME: "warehouseVoucher",
  WAREHOUSE_VOUCHER_COLLECTION_NAME: "warehouse_vouchers",

  // warehouse voucher product
  WAREHOUSE_VOUCHER_PRODUCT_REPOSITORY_NAME: "warehouseVoucherProduct",
  WAREHOUSE_VOUCHER_PRODUCT_COLLECTION_NAME: "warehouse_voucher_products",

  // Warehouse Inventories
  WAREHOUSE_INVENTORY_REPOSITORY_NAME: "warehouseInventory",
  WAREHOUSE_INVENTORY_COLLECTION_NAME: "warehouse_inventories",
  PRODUCT_INVENTORY_REPOSITORY_NAME: "productInventory",
  PRODUCT_INVENTORY_COLLECTION_NAME: "product_inventories",

  // PURCHASE - API
  // Dashboard
  DELIVERY_TYPE_REPOSITORY_NAME: "deliveryType",
  DELIVERY_TYPE_COLLECTION_NAME: "delivery_types",
  ORDER_DASHBOARD_REPOSITORY_NAME: "orderDashboard",
  ORDER_DASHBOARD_COLLECTION_NAME: "order_dashboards",
  DASHBOARD_PROCESS_ITEM_REPOSITORY_NAME: "dashboardProcessItem",
  DASHBOARD_PROCESS_ITEM_COLLECTION_NAME: "dashboard_process_items",

  // Purchase Order
  PURCHASE_ORDER_CONFIRM_REPOSITORY_NAME: "purchaseOrderConfirm",
  PURCHASE_ORDER_CONFIRM_COLLECTION_NAME: "purchase_order_confirms",
  PURCHASE_ORDER_PRODUCT_REPOSITORY_NAME: "purchaseOrderProduct",
  PURCHASE_ORDER_PRODUCT_COLLECTION_NAME: "purchase_order_products",
  PURCHASE_TYPE_REPOSITORY_NAME: "purchaseType",
  PURCHASE_TYPE_COLLECTION_NAME: "purchase_types",
  PURCHASE_ORDER_REPOSITORY_NAME: "purchaseOrder",
  PURCHASE_ORDER_COLLECTION_NAME: "purchase_orders",
  PURCHASE_ORDER_DETAIL_REPOSITORY_NAME: "purchaseOrderDetail",
  PURCHASE_ORDER_DETAIL_COLLECTION_NAME: "purchase_order_details",

  ORDER_PROMOTION_REPOSITORY_NAME: "orderPromotion",
  ORDER_PROMOTION_COLLECTION_NAME: "order_promotions",
  ORDER_MODIFY_HISTORY_REPOSITORY_NAME: "orderModifyHistory",
  ORDER_MODIFY_HISTORY_COLLECTION_NAME: "order_modify_histories",

  // Delivery
  DELIVERY_MODIFY_HISTORY_REPOSITORY_NAME: "deliveryModifyHistory",
  DELIVERY_MODIFY_HISTORY_COLLECTION_NAME: "delivery_modify_histories",

  // Invoice
  INVOICE_REPOSITORY_NAME: "invoice",
  INVOICE_COLLECTION_NAME: "invoices",
  INVOICE_DETAIL_REPOSITORY_NAME: "invoiceDetail",
  INVOICE_DETAIL_COLLECTION_NAME: "invoice_details",
  INVOICE_PAYMENT_TYPE_REPOSITORY_NAME: "invoicePaymentType",
  INVOICE_PAYMENT_TYPE_COLLECTION_NAME: "invoice_payment_types",

  // Detail Payment Invoices
  DEBT_ITEMS_REPOSITORY_NAME: "debtItems",
  DEBT_ITEMS_COLLECTION_NAME: "debt_items",

  // User
  USER_REPOSITORY_NAME: "user",
  USER_COLLECTION_NAME: "users",

  // User Account
  ACCOUNTS_REPOSITORY_NAME: "account",
  ACCOUNTS_COLLECTION_NAME: "accounts",

  // Role
  ROLE_REPOSITORY_NAME: "role",
  ROLE_COLLECTION_NAME: "roles",

  // Git Projects
  GIT_PROJECTS_REPOSITORY_NAME: "gitProject",
  GIT_PROJECTS_COLLECTION_NAME: "git_projects",

  // Email Template
  EMAIL_KEYWORD_REPOSITORY_NAME: "emailKeywords",
  EMAIL_KEYWORD_COLLECTION_NAME: "email_keywords",
  EMAIL_TEMPLATE_REPOSITORY_NAME: "emailTemplates",
  EMAIL_TEMPLATE_COLLECTION_NAME: "email_templates",

  // Email Marketing
  EMAIL_SEND_REPOSITORY_NAME: "emailSend",
  EMAIL_SEND_COLLECTION_NAME: "email_sends",
  EMAIL_LIBRARY_REPOSITORY_NAME: "emailLibrary",
  EMAIL_LIBRARY_COLLECTION_NAME: "email_libraries",
  EMAIL_CAMPAIGN_REPOSITORY_NAME: "emailCampaign",
  EMAIL_CAMPAIGN_COLLECTION_NAME: "email_campaigns",
  EMAIL_CUSTOMER_REPOSITORY_NAME: "emailCustomer",
  EMAIL_CUSTOMER_COLLECTION_NAME: "email_customers",
  EMAIL_REPOSITORY_NAME: "email",
  EMAIL_COLLECTION_NAME: "emails",

  // Tenant
  APPLICATION_REPOSITORY_NAME: "application",
  APPLICATION_COLLECTION_NAME: "applications",
  TENANT_SETTING_REPOSITORY_NAME: "tenantSetting",
  TENANT_SETTING_COLLECTION_NAME: "tenant_settings",
  TENANT_PAYMENT_REPOSITORY_NAME: "tenantPayment",
  TENANT_PAYMENT_COLLECTION_NAME: "tenant_payments",
  POTENTIAL_TENANT_REPOSITORY_NAME: "potentialTenant",
  POTENTIAL_TENANT_COLLECTION_NAME: "potential_tenants",
  BUSINESS_CATEGORY_REPOSITORY_NAME: "businessCategory",
  BUSINESS_CATEGORY_COLLECTION_NAME: "business_categories",
  TENANT_INFORMATION_REPOSITORY_NAME: "tenantInformation",
  TENANT_INFORMATION_COLLECTION_NAME: "tenant_informations",
  TENANT_ORGANIZATION_REPOSITORY_NAME: "tenantOrganization",
  TENANT_ORGANIZATION_COLLECTION_NAME: "tenant_organizations",

  // Tenant
  TENANT_ADMIN_SETTING_REPOSITORY_NAME: "tenantAdminSetting",
  TENANT_ADMIN_SETTING_COLLECTION_NAME: "tenant_admin_settings",

  // Server
  SERVER_REPOSITORY_NAME: "server",
  SERVER_COLLECTION_NAME: "servers",
  SERVICE_REPOSITORY_NAME: "service",
  SERVICE_COLLECTION_NAME: "services",
  RELEASE_REPOSITORY_NAME: "release",
  RELEASE_COLLECTION_NAME: "releases",
  WEB_APPLICATION_REPOSITORY_NAME: "webApplication",
  WEB_APPLICATION_COLLECTION_NAME: "web_applications",
  APIS_SERVICES_REPOSITORY_NAME: "apisServiceManagement",
  APIS_SERVICES_COLLECTION_NAME: "apis_services_managements",
  APIS_SERVICES_INFORMATION_REPOSITORY_NAME: "apisServicesInformation",
  APIS_SERVICES_INFORMATION_COLLECTION_NAME: "apis_services_informations",

  // Setting
  PURCHASE_SETTING_REPOSITORY_NAME: "purchaseSetting",
  PURCHASE_SETTING_COLLECTION_NAME: "purchase_settings",

  // Partner List
  PARTNER_LIST_REPOSITORY_NAME: "partnerList",
  PARTNER_LIST_COLLECTION_NAME: "partner_lists",

  // Partner Trader
  PARTNER_TRADER_REPOSITORY_NAME: "partnerTrader",
  PARTNER_TRADER_COLLECTION_NAME: "partner_traders",

  // Contract List
  CONTRACT_LIST_REPOSITORY_NAME: "contractList",
  CONTRACT_LIST_COLLECTION_NAME: "contract_lists",

  // Menu
  MENU_BIZCORE_REPOSITORY_NAME: "bizcoreMenu",
  MENU_BIZCORE_COLLECTION_NAME: "bizcore_menus",

  VALUE_CHAIN_TODO_LIST_REPOSITORY_NAME: "valueChainTodoList",
  VALUE_CHAIN_TODO_LIST_COLLECTION_NAME: "value_chain_todo_lists",
  VALUE_CHAIN_SEGMENT_LIST_REPOSITORY_NAME: "valueChainSegmentList",
  VALUE_CHAIN_SEGMENT_LIST_COLLECTION_NAME: "value_chain_segment_lists",
  VALUE_CHAIN_PROCESS_LIST_REPOSITORY_NAME: "valueChainProcessList",
  VALUE_CHAIN_PROCESS_LIST_COLLECTION_NAME: "value_chain_process_lists",

  // Contract Content
  CONTRACT_CONTENT_REPOSITORY_NAME: "contractContent",
  CONTRACT_CONTENT_COLLECTION_NAME: "contract_contents",

  // Contract History
  CONTRACT_HISTORY_REPOSITORY_NAME: "contractHistory",
  CONTRACT_HISTORY_COLLECTION_NAME: "contract_histories",

  // Contract Mission
  CONTRACT_MISSION_REPOSITORY_NAME: "contractMission",
  CONTRACT_MISSION_COLLECTION_NAME: "contract_missions",

  // FM02
  NET_REVENUE_CONFIGURATION_REPOSITORY_NAME: "netRevenueConfiguration",
  NET_REVENUE_CONFIGURATION_COLLECTION_NAME: "net_revenue_configurations",

  USER_LOGIN_REPOSITORY_NAME: "userLogin",
  USER_LOGIN_COLLECTION_NAME: "user_login",

  USER_NOTIFICATION_REPOSITORY_NAME: "userNotification",
  USER_NOTIFICATION_COLLECTION_NAME: "user_notifications",

  NOTIFICATION_REPOSITORY_NAME: "notification",
  NOTIFICATION_COLLECTION_NAME: "notifications",

  USER_MODULE_NOTIFICATION_REPOSITORY_NAME: "userModuleNotification",
  USER_MODULE_NOTIFICATION_COLLECTION_NAME: "user_module_notifications",

  REPORT_PRODUCT_REPOSITORY_NAME: "reportProduct",
  REPORT_PRODUCT_COLLECTION_NAME: "report_products",

  // Accounting Settings
  ACCOUNTING_SETTING_REPOSITORY_NAME: "accountingSetting",
  ACCOUNTING_SETTING_COLLECTION_NAME: "accounting_settings",

  // Accounting Category
  ACCOUNTING_CATEGORY_REPOSITORY_NAME: "accountingCategory",
  ACCOUNTING_CATEGORY_COLLECTION_NAME: "accounting_categories",

  // Setting accounting
  SETTING_ACCOUNTING_REPOSITORY_NAME: "settingAccounting",
  SETTING_ACCOUNTING_COLLECTION_NAME: "setting_accounting",

  // Setting chart accounts
  SETTING_CHART_ACCOUNT_REPOSITORY_NAME: "settingChartAccount",
  SETTING_CHART_ACCOUNT_COLLECTION_NAME: "setting_chart_accounts",

  // Setting bank accounts
  SETTING_BANK_ACCOUNT_REPOSITORY_NAME: "settingBankAccount",
  SETTING_BANK_ACCOUNT_COLLECTION_NAME: "setting_bank_accounts",

  // Setting banks
  SETTING_BANK_REPOSITORY_NAME: "settingBank",
  SETTING_BANK_COLLECTION_NAME: "setting_banks",

  VOUCHER_SALES_ORDER_REPOSITORY_NAME: "voucherSalesOrder",
  VOUCHER_SALES_ORDER_COLLECTION_NAME: "voucher_sales_orders",

  VOUCHER_SALES_ORDER_PRODUCT_REPOSITORY_NAME: "voucherSalesOrderProduct",
  VOUCHER_SALES_ORDER_PRODUCT_COLLECTION_NAME: "voucher_sales_order_products",

  //warehouse_zones
  WAREHOUSE_ZONE_REPOSITORY_NAME: "warehouseZone",
  WAREHOUSE_ZONE_COLLECTION_NAME: "warehouse_zones",

  //warehouse_racks
  WAREHOUSE_RACK_REPOSITORY_NAME: "warehouseRack",
  WAREHOUSE_RACK_COLLECTION_NAME: "warehouse_racks",

  //warehouse_levels
  WAREHOUSE_LEVEL_REPOSITORY_NAME: "warehouseLevel",
  WAREHOUSE_LEVEL_COLLECTION_NAME: "warehouse_levels",

  //warehouse_pallets
  WAREHOUSE_PALLET_REPOSITORY_NAME: "warehousePallet",
  WAREHOUSE_PALLET_COLLECTION_NAME: "warehouse_pallets",

  //warehouse_baskets
  WAREHOUSE_BASKET_REPOSITORY_NAME: "warehouseBasket",
  WAREHOUSE_BASKET_COLLECTION_NAME: "warehouse_baskets",

  WAREHOUSE_STOCKTAKING_REPOSITORY_NAME: "warehouseStocktaking",
  WAREHOUSE_STOCKTAKING_COLLECTION_NAME: "warehouse_stocktaking",

  WAREHOUSE_STOCKTAKING_PRODUCT_REPOSITORY_NAME: "warehouseStocktakingProduct",
  WAREHOUSE_STOCKTAKING_PRODUCT_COLLECTION_NAME:
    "warehouse_stocktaking_products",

  BONUS_EMPLOYEE_COLLECTION_NAME: "bonus_employees",
  BONUS_EMPLOYEE_REPOSITORY_NAME: "bonusEmployee",
  WORK_SHIFT_REGISTRATION_COLLECTION_NAME: "work_shift_registrations",
  WORK_SHIFT_REGISTRATION_REPOSITORY_NAME: "workShiftRegistration",
  WORK_SHIFT_REGISTRATION_DETAIL_COLLECTION_NAME:
    "work_shift_registration_details",
  WORK_SHIFT_REGISTRATION_DETAIL_REPOSITORY_NAME: "workShiftRegistrationDetail",

  REQUEST_MANAGEMENT_COLLECTION_NAME: "request_managements",
  REQUEST_MANAGEMENT_REPOSITORY_NAME: "requestManagement",

  SETTING_APPROVE_COLLECTION_NAME: "setting_approves",
  SETTING_APPROVE_REPOSITORY_NAME: "settingApprove",

  VOUCHER_PURCHASE_ORDER_REPOSITORY_NAME: "voucherPurchaseOrder",
  VOUCHER_PURCHASE_ORDER_COLLECTION_NAME: "voucher_purchase_orders",

  VOUCHER_PURCHASE_ORDER_PRODUCT_REPOSITORY_NAME: "voucherPurchaseOrderProduct",
  VOUCHER_PURCHASE_ORDER_PRODUCT_COLLECTION_NAME:
    "voucher_purchase_order_products",

  RESULT_TYPE_REPOSITORY_NAME: "resultType",
  RESULT_TYPE_COLLECTION_NAME: "result_types",

  CRITERIA_REPOSITORY_NAME: "criteria",
  CRITERIA_COLLECTION_NAME: "criterias",

  // Menu
  ACTIVITY_REPOSITORY_NAME: "activity",
  ACTIVITY_COLLECTION_NAME: "activities",
  //field
  FIELD_REPOSITORY_NAME: "field",
  FIELD_COLLECTION_NAME: "fields",
  //folder
  FOLDER_REPOSITORY_NAME: "folder",
  FOLDER_COLLECTION_NAME: "folders",
  //project
  PROJECT_REPOSITORY_NAME: "project",
  PROJECT_COLLECTION_NAME: "projects",
  // role project
  ROLE_PROJECT_REPOSITORY_NAME: "roleProjects",
  ROLE_PROJECT_COLLECTION_NAME: "role_projects",

  // setting
  SETTING_PROJECT_REPOSITORY_NAME: "settingProjects",
  SETTING_PROJECT_COLLECTION_NAME: "setting_projects",

  // Employee
  GROUP_MEMBER_PROJECT_REPOSITORY_NAME: "groupMemberProjects",
  GROUP_MEMBER_PROJECT_COLLECTION_NAME: "group_member_projects",
  //phases
  PHASE_REPOSITORY_NAME: "phase",
  PHASE_COLLECTION_NAME: "phases",
  //task
  TASK_REPOSITORY_NAME: "task",
  TASK_COLLECTION_NAME: "tasks",
  //task history
  TASK_HISTORIES_REPOSITORY_NAME: "taskHistory",
  TASK_HISTORIES_COLLECTION_NAME: "task_histories",
  //post task
  POST_TASK_REPOSITORY_NAME: "postTask",
  POST_TASK_COLLECTION_NAME: "post_tasks",
  //post comment
  COMMENT_POST_REPOSITORY_NAME: "commentPost",
  COMMENT_POST_COLLECTION_NAME: "comment_posts",

  //project comments
  COMMENT_PROJECT_REPOSITORY_NAME: "commentProject",
  COMMENT_PROJECT_COLLECTION_NAME: "comment_projects",

  //project history
  PROJECT_HISTORIES_REPOSITORY_NAME: "projectHistory",
  PROJECT_HISTORIES_COLLECTION_NAME: "project_histories",

  // Position Field
  POSITION_FIELD_REPOSITORY_NAME: "positionField",
  POSITION_FIELD_COLLECTION_NAME: "position_fields",

  // Templates
  TEMPLATE_REPOSITORY_NAME: "template",
  TEMPLATE_COLLECTION_NAME: "templates",

  FOLDER_TEMPLATE_REPOSITORY_NAME: "folderTemplate",
  FOLDER_TEMPLATE_COLLECTION_NAME: "folder_templates",

  PROJECT_TEMPLATE_REPOSITORY_NAME: "projectTemplate",
  PROJECT_TEMPLATE_COLLECTION_NAME: "project_templates",

  PHASE_TEMPLATE_REPOSITORY_NAME: "phaseTemplate",
  PHASE_TEMPLATE_COLLECTION_NAME: "phase_templates",

  TASK_TEMPLATE_REPOSITORY_NAME: "taskTemplate",
  TASK_TEMPLATE_COLLECTION_NAME: "task_templates",

  COMMENT_TEMPLATE_REPOSITORY_NAME: "commentTemplate",
  COMMENT_TEMPLATE_COLLECTION_NAME: "comment_templates",

  GROUP_PROJECT_TEMPLATE_REPOSITORY_NAME: "groupProjectTemplate",
  GROUP_PROJECT_TEMPLATE_COLLECTION_NAME: "group_project_templates",

  ROLE_PROJECT_TEMPLATE_REPOSITORY_NAME: "roleProjectTemplate",
  ROLE_PROJECT_TEMPLATE_COLLECTION_NAME: "role_project_templates",

  REQUEST_TYPE_REPOSITORY_NAME: "requestType",
  REQUEST_TYPE_COLLECTION_NAME: "request_types",

  FIELD_APPROVAL_REPOSITORY_NAME: "fieldApproval",
  FIELD_APPROVAL_COLLECTION_NAME: "field_approvals",

  APPROVAL_REPOSITORY_NAME: "approval",
  APPROVAL_COLLECTION_NAME: "approvals",

  APPROVER_REPOSITORY_NAME: "approver",
  APPROVER_COLLECTION_NAME: "approvers",

  EXECUTOR_REPOSITORY_NAME: "executor",
  EXECUTOR_COLLECTION_NAME: "executors",

  COMMENT_APPROVAL_REPOSITORY_NAME: "commentApproval",
  COMMENT_APPROVAL_COLLECTION_NAME: "comment_approvals",

  NOTIFICATION_APPROVAL_REPOSITORY_NAME: "notificationApproval",
  NOTIFICATION_APPROVAL_COLLECTION_NAME: "notification_approvals",

  AUTOMATION_TASK_REPOSITORY_NAME: "automationTask",
  AUTOMATION_TASK_COLLECTION_NAME: "automation_tasks",

  // Partner History
  PARTNER_HISTORY_REPOSITORY_NAME: "partnerHistory",
  PARTNER_HISTORY_COLLECTION_NAME: "partner_histories",

  // Partner Group
  PARTNER_GROUP_REPOSITORY_NAME: "partnerGroup",
  PARTNER_GROUP_COLLECTION_NAME: "partner_groups",
};

export default COLLECTIONS;
