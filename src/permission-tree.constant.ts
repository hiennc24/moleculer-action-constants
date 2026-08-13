/**
 * The permission catalog: every module, group, feature and the actions each
 * feature supports.
 *
 * This is the tree the role editor renders — svc-auth expands it into ACTION
 * nodes and filters it per user. It carries display metadata (name,
 * description, type, hierarchy), which is why the flat id list in
 * `permission-catalog.constant.ts` cannot stand in for it; that file is
 * derived from this one.
 *
 * Nodes: 768 grantable ids across 9 modules.
 * Imported from svc-auth origin/testing — see
 * scripts/import-permission-tree.ts. Edit here once the per-service JSON
 * copies are retired.
 */

export interface PermissionTreeNode {
	application?: string
	name: string
	description?: string
	type: 'MODULE' | 'GROUP' | 'FEATURE' | 'ACTION' | 'SYSTEM'
	permKey: string
	action?: string
	/** Compact form: expanded into ACTION child nodes by consumers. */
	actions?: string[]
	children?: PermissionTreeNode[]
}

/** Vietnamese labels for action nodes, keyed by action name. */
export const PERMISSION_ACTION_NAMES: Record<string, string> = {
	"list": "Xem danh sách",
	"read": "Xem chi tiết",
	"create": "Tạo mới",
	"update": "Cập nhật",
	"delete": "Xóa",
	"download": "Tải xuống",
	"upload": "Tải lên",
	"print": "In",
	"approve": "Phê duyệt",
	"cancel_approve": "Hủy phê duyệt",
	"bulk_update": "Cập nhật hàng loạt",
	"bulk_delete": "Xóa hàng loạt",
	"update_status": "Cập nhật trạng thái",
	"setting": "Thiết lập",
	"configure": "Cấu hình",
	"copy": "Sao chép",
	"send": "Gửi",
	"sync": "Đồng bộ",
	"export": "Xuất",
	"generate": "Tạo báo cáo",
	"version_control": "Kiểm soát phiên bản"
}

/** Modules in render order. */
const PERMISSION_TREE: PermissionTreeNode[] = [
	{
		"application": "CORE",
		"name": "Module Bizcore",
		"description": "Setup hệ thống quản trị vận hành công ty và dữ liệu lõi",
		"type": "MODULE",
		"permKey": "core",
		"children": [
			{
				"name": "Bảng điều khiển",
				"description": "Quản lý bảng điều khiển và báo cáo",
				"type": "GROUP",
				"permKey": "core:dashboard_management",
				"children": [
					{
						"name": "Dashboard",
						"description": "Bảng điều khiển tổng quan",
						"type": "FEATURE",
						"permKey": "core:dashboard_management:dashboard",
						"actions": [
							"read",
							"download",
							"upload"
						]
					},
					{
						"name": "Báo cáo so sánh",
						"description": "Quản lý báo cáo so sánh",
						"type": "FEATURE",
						"permKey": "core:dashboard_management:comparative_report",
						"actions": [
							"read",
							"configure"
						]
					},
					{
						"name": "Vận hành kế hoạch",
						"description": "Quản lý vận hành kế hoạch",
						"type": "FEATURE",
						"permKey": "core:dashboard_management:operate_plan",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"update_status",
							"bulk_update",
							"configure"
						]
					}
				]
			},
			{
				"name": "Setup Doanh Nghiệp",
				"description": "Thiết lập cấu trúc doanh nghiệp",
				"type": "GROUP",
				"permKey": "core:setup_business",
				"children": [
					{
						"name": "Tổ chức vận hành",
						"description": "Quản lý tổ chức vận hành",
						"type": "GROUP",
						"permKey": "core:setup_business:operational_organization",
						"children": [
							{
								"name": "Chuỗi giá trị",
								"description": "Quản lý chuỗi giá trị",
								"type": "FEATURE",
								"permKey": "core:setup_business:operational_organization:value_chains",
								"actions": [
									"read",
									"create",
									"update",
									"delete",
									"print",
									"update_status",
									"download",
									"upload",
									"configure"
								]
							},
							{
								"name": "Chức năng nhiệm vụ",
								"description": "Quản lý chức năng nhiệm vụ",
								"type": "FEATURE",
								"permKey": "core:setup_business:operational_organization:mission",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"copy",
									"delete",
									"bulk_update",
									"print",
									"update_status",
									"download"
								]
							}
						]
					},
					{
						"name": "Hoạch định mục tiêu",
						"description": "Quản lý hoạch định mục tiêu",
						"type": "GROUP",
						"permKey": "core:setup_business:goal_planning",
						"children": [
							{
								"name": "BSC",
								"description": "Quản lý Balanced Scorecard",
								"type": "FEATURE",
								"permKey": "core:setup_business:goal_planning:bsc",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"copy",
									"update_status",
									"setting",
									"configure",
									"version_control"
								]
							}
						]
					}
				]
			},
			{
				"name": "Kế hoạch kinh doanh",
				"description": "Xây dựng kế hoạch tài chính kinh doanh",
				"type": "GROUP",
				"permKey": "core:planning_business",
				"children": [
					{
						"name": "Kế hoạch tài chính kinh doanh",
						"description": "Quản lý kế hoạch tài chính kinh doanh",
						"type": "GROUP",
						"permKey": "core:planning_business:business_financial_planning",
						"children": [
							{
								"name": "Kế hoạch bán",
								"description": "Quản lý kế hoạch bán hàng",
								"type": "FEATURE",
								"permKey": "core:planning_business:business_financial_planning:sales_plan",
								"actions": [
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"setting",
									"configure",
									"version_control"
								]
							}
						]
					},
					{
						"name": "Dự báo tài chính",
						"description": "Quản lý dự báo tài chính",
						"type": "GROUP",
						"permKey": "core:planning_business:financial_forecasting",
						"children": [
							{
								"name": "FM01",
								"description": "Quản lý dự báo tài chính FM01",
								"type": "FEATURE",
								"permKey": "core:planning_business:financial_forecasting:fm01",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"configure",
									"version_control"
								]
							},
							{
								"name": "FM02",
								"description": "Quản lý dự báo tài chính FM02",
								"type": "FEATURE",
								"permKey": "core:planning_business:financial_forecasting:fm02",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"configure",
									"version_control"
								]
							}
						]
					},
					{
						"name": "Trao quyền (Giao khoán)",
						"description": "Quản lý trao quyền và giao khoán",
						"type": "GROUP",
						"permKey": "core:planning_business:delegation_contracts",
						"children": [
							{
								"name": "Danh sách giao khoán",
								"description": "Quản lý danh sách giao khoán",
								"type": "FEATURE",
								"permKey": "core:planning_business:delegation_contracts:tm_contract",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print",
									"sync"
								]
							},
							{
								"name": "Kết quả giao khoán",
								"description": "Quản lý kết quả giao khoán",
								"type": "FEATURE",
								"permKey": "core:planning_business:delegation_contracts:tm_result_contract",
								"actions": [
									"list",
									"read",
									"download",
									"update_status",
									"print",
									"sync"
								]
							}
						]
					}
				]
			},
			{
				"name": "Cài đặt",
				"description": "Thiết lập hệ thống Bizcore",
				"type": "FEATURE",
				"permKey": "core:settings",
				"actions": [
					"list",
					"read",
					"create",
					"update",
					"delete"
				]
			}
		]
	},
	{
		"application": "HR",
		"name": "Module HR",
		"description": "Setup hệ thống quản trị nhân sự bài bản",
		"type": "MODULE",
		"permKey": "hcm",
		"children": [
			{
				"name": "Bảng điều khiển",
				"description": "Bảng điều khiển tổng quan",
				"type": "FEATURE",
				"permKey": "hcm:dashboard_management",
				"actions": [
					"read",
					"download",
					"upload"
				]
			},
			{
				"name": "Quản trị nhân sự (HCM)",
				"description": "Quản lý cơ chế thu nhập và lương, thưởng",
				"type": "GROUP",
				"permKey": "hcm:hcm",
				"children": [
					{
						"name": "Cơ chế thu nhập",
						"description": "Quản lý cơ chế thu nhập và ngạch bậc lương",
						"type": "GROUP",
						"permKey": "hcm:hcm:salary_management",
						"children": [
							{
								"name": "Ngạch bậc lương",
								"description": "Quản lý ngạch bậc lương",
								"type": "FEATURE",
								"permKey": "hcm:hcm:salary_management:salary_range",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"update_status",
									"setting",
									"configure",
									"version_control"
								]
							},
							{
								"name": "Bảng lương mẫu",
								"description": "Quản lý bảng lương mẫu",
								"type": "FEATURE",
								"permKey": "hcm:hcm:salary_management:payroll_template",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"configure",
									"setting",
									"bulk_update",
									"update_status",
									"version_control"
								]
							}
						]
					},
					{
						"name": "Bảng tính lương",
						"description": "Quản lý bảng tính lương",
						"type": "GROUP",
						"permKey": "hcm:hcm:payrolls",
						"children": [
							{
								"name": "Bảng tính lương",
								"description": "Quản lý bảng tính lương",
								"type": "FEATURE",
								"permKey": "hcm:hcm:payrolls:payroll",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"configure",
									"setting",
									"bulk_update",
									"update_status",
									"version_control"
								]
							},
							{
								"name": "Phiếu Lương",
								"description": "Quản lý phiếu lương",
								"type": "FEATURE",
								"permKey": "hcm:hcm:payrolls:paycheck",
								"actions": [
									"list",
									"read",
									"setting",
									"send"
								]
							}
						]
					},
					{
						"name": "Bảng tính thưởng",
						"description": "Quản lý bảng tính thưởng",
						"type": "GROUP",
						"permKey": "hcm:hcm:bonus_payrolls",
						"children": [
							{
								"name": "Bảng tính thưởng",
								"description": "Quản lý bảng tính thưởng",
								"type": "FEATURE",
								"permKey": "hcm:hcm:bonus_payrolls:bonus_payroll",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"configure",
									"setting",
									"bulk_update",
									"update_status",
									"version_control"
								]
							}
						]
					},
					{
						"name": "Phiếu OLE",
						"description": "Quản lý phiếu OLE",
						"type": "FEATURE",
						"permKey": "hcm:hcm:ole_sheets",
						"actions": [
							"list",
							"read",
							"create",
							"configure",
							"update",
							"send",
							"setting",
							"bulk_update",
							"update_status"
						]
					}
				]
			},
			{
				"name": "Quản lý nhân sự (HRM)",
				"description": "Quản lý nhân sự",
				"type": "GROUP",
				"permKey": "hcm:hrm",
				"children": [
					{
						"name": "Quản lý chấm công",
						"description": "Quản lý chấm công và thời gian làm việc",
						"type": "GROUP",
						"permKey": "hcm:hrm:timekeeping_management",
						"children": [
							{
								"name": "Bảng tổng hợp",
								"description": "Quản lý bảng tổng hợp chấm công",
								"type": "FEATURE",
								"permKey": "hcm:hrm:timekeeping_management:timekeeping_summary",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"bulk_update",
									"update_status",
									"send"
								]
							},
							{
								"name": "Bảng chi tiết",
								"description": "Quản lý bảng chi tiết chấm công",
								"type": "FEATURE",
								"permKey": "hcm:hrm:timekeeping_management:timekeeping_detail",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"setting"
								]
							},
							{
								"name": "Công tăng ca",
								"description": "Quản lý công tăng ca",
								"type": "FEATURE",
								"permKey": "hcm:hrm:timekeeping_management:overtime",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"setting"
								]
							},
							{
								"name": "Dữ liệu chấm công",
								"description": "Quản lý dữ liệu chấm công nhân viên",
								"type": "FEATURE",
								"permKey": "hcm:hrm:timekeeping_management:timekeeping_employee",
								"actions": [
									"list",
									"read",
									"setting"
								]
							},
							{
								"name": "Cập nhật ngày công",
								"description": "Quản lý yêu cầu cập nhật ngày công",
								"type": "FEATURE",
								"permKey": "hcm:hrm:timekeeping_management:timekeeping_request",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"setting"
								]
							}
						]
					},
					{
						"name": "Quản lý phép",
						"description": "Quản lý nghỉ phép và ngày nghỉ",
						"type": "GROUP",
						"permKey": "hcm:hrm:leave_management",
						"children": [
							{
								"name": "Danh sách ngày nghỉ",
								"description": "Quản lý danh sách ngày nghỉ",
								"type": "FEATURE",
								"permKey": "hcm:hrm:leave_management:leave_list",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"setting"
								]
							},
							{
								"name": "Tổng hợp nghỉ phép",
								"description": "Quản lý tổng hợp nghỉ phép nhân viên",
								"type": "FEATURE",
								"permKey": "hcm:hrm:leave_management:leave_employee",
								"actions": [
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"setting"
								]
							}
						]
					},
					{
						"name": "Quản lý ca",
						"description": "Quản lý ca làm việc và phân ca",
						"type": "GROUP",
						"permKey": "hcm:hrm:work_shift_management",
						"children": [
							{
								"name": "Thống kê ca",
								"description": "Xem thống kê ca làm việc",
								"type": "FEATURE",
								"permKey": "hcm:hrm:work_shift_management:work_shift_summary",
								"actions": [
									"read"
								]
							},
							{
								"name": "Phân ca chi tiết",
								"description": "Quản lý phân ca chi tiết",
								"type": "FEATURE",
								"permKey": "hcm:hrm:work_shift_management:work_shift",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"setting"
								]
							},
							{
								"name": "Lịch phân ca",
								"description": "Quản lý lịch phân ca nhân viên",
								"type": "FEATURE",
								"permKey": "hcm:hrm:work_shift_management:work_shift_employee",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"download",
									"setting"
								]
							},
							{
								"name": "Đăng ký ca",
								"description": "Quản lý đăng ký ca làm việc",
								"type": "FEATURE",
								"permKey": "hcm:hrm:work_shift_management:work_shift_registration",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"bulk_update",
									"update_status",
									"setting",
									"configure",
									"print",
									"copy"
								]
							}
						]
					},
					{
						"name": "Quản lý công tác",
						"description": "Quản lý đăng ký và lịch công tác",
						"type": "GROUP",
						"permKey": "hcm:hrm:business_trip_management",
						"children": [
							{
								"name": "Đăng ký công tác",
								"description": "Quản lý đăng ký công tác",
								"type": "FEATURE",
								"permKey": "hcm:hrm:business_trip_management:business_trip",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"bulk_update",
									"update_status",
									"setting"
								]
							},
							{
								"name": "Lịch công tác",
								"description": "Xem lịch công tác",
								"type": "FEATURE",
								"permKey": "hcm:hrm:business_trip_management:business_trip_calendar",
								"actions": [
									"read"
								]
							},
							{
								"name": "Tổng quan lịch công tác",
								"description": "Xem tổng quan lịch công tác",
								"type": "FEATURE",
								"permKey": "hcm:hrm:business_trip_management:business_trip_summary",
								"actions": [
									"read"
								]
							}
						]
					},
					{
						"name": "Quản lý đơn",
						"description": "Quản lý tất cả các đơn",
						"type": "GROUP",
						"permKey": "hcm:hrm:request_management",
						"children": [
							{
								"name": "Thống kê",
								"description": "Quản lý thống kê các loại đơn",
								"type": "FEATURE",
								"permKey": "hcm:hrm:request_management:request_summary",
								"actions": [
									"list"
								]
							},
							{
								"name": "Quản lý đơn",
								"description": "Quản lý tất cả các loại đơn",
								"type": "FEATURE",
								"permKey": "hcm:hrm:request_management:request_list",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"bulk_update",
									"update_status",
									"setting"
								]
							}
						]
					}
				]
			},
			{
				"name": "Cài đặt",
				"description": "Thiết lập hệ thống",
				"type": "FEATURE",
				"permKey": "hcm:settings",
				"actions": [
					"list",
					"read",
					"create",
					"update",
					"delete"
				]
			}
		]
	},
	{
		"application": "SALES",
		"name": "Module Sales & CRM",
		"description": "Truyền thông, bán hàng và CRM",
		"type": "MODULE",
		"permKey": "sales",
		"children": [
			{
				"name": "Dashboard",
				"description": "Bảng điều khiển tổng quan",
				"type": "FEATURE",
				"permKey": "sales:dashboard_management",
				"actions": [
					"read",
					"download",
					"upload"
				]
			},
			{
				"name": "Quản trị bán",
				"description": "Quản trị bán",
				"type": "GROUP",
				"permKey": "sales:sales_management",
				"children": [
					{
						"name": "Kế hoạch - Báo cáo",
						"description": "Quản lý kế hoạch bán hàng và báo cáo",
						"type": "GROUP",
						"permKey": "sales:sales_management:planning_reporting",
						"children": [
							{
								"name": "Kế hoạch bán",
								"description": "Quản lý kế hoạch bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:planning_reporting:sales_plan",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print",
									"configure",
									"setting"
								]
							},
							{
								"name": "Chi phí bán",
								"description": "Quản lý chi phí bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:planning_reporting:sales_cost",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print"
								]
							}
						]
					},
					{
						"name": "Nghiệp vụ bán",
						"description": "Quản lý các nghiệp vụ bán hàng",
						"type": "GROUP",
						"permKey": "sales:sales_management:sales_operations",
						"children": [
							{
								"name": "Lead",
								"description": "Quản lý khách hàng tiềm năng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:lead",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"copy",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print"
								]
							},
							{
								"name": "Hợp đồng",
								"description": "Quản lý hợp đồng bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:contract",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"print"
								]
							},
							{
								"name": "Đơn hàng SO",
								"description": "Quản lý đơn hàng bán",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:sales_order",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"copy",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print"
								]
							},
							{
								"name": "Tổng hợp dữ liệu",
								"description": "Tổng hợp dữ liệu bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:sales_report",
								"actions": [
									"read",
									"generate",
									"export",
									"download",
									"print"
								]
							},
							{
								"name": "Báo cáo nhanh",
								"description": "Báo cáo nhanh bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:quick_report",
								"actions": [
									"read",
									"generate",
									"print",
									"download"
								]
							},
							{
								"name": "Ưu đãi/Khuyến mãi",
								"description": "Quản lý ưu đãi và khuyến mãi",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:promotion",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"copy",
									"download",
									"upload",
									"bulk_update",
									"update_status"
								]
							},
							{
								"name": "Phiếu giao vận",
								"description": "Quản lý phiếu giao vận",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:transfer_receipt",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print"
								]
							},
							{
								"name": "Phiếu giao hàng",
								"description": "Quản lý phiếu giao hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:delivery_receipt",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print"
								]
							},
							{
								"name": "Hậu mãi khiếu nại",
								"description": "Quản lý hậu mãi và khiếu nại",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:after_sales_and_complaints",
								"actions": [
									"read",
									"create",
									"update",
									"delete"
								]
							},
							{
								"name": "SO công nợ",
								"description": "Quản lý công nợ đơn hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:so_debts",
								"actions": [
									"list",
									"read",
									"download",
									"print"
								]
							},
							{
								"name": "Chứng từ thanh toán",
								"description": "Quản lý chứng từ thanh toán",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:payment_document",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"print",
									"download",
									"upload",
									"bulk_update",
									"update_status"
								]
							},
							{
								"name": "Quản lý công nợ",
								"description": "Quản lý tổng quan công nợ",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:debts_management",
								"actions": [
									"list",
									"read"
								]
							},
							{
								"name": "Dữ liệu trước bán",
								"description": "Quản lý dữ liệu trước bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_operations:pre_sales_data",
								"actions": [
									"read",
									"create",
									"update",
									"delete"
								]
							}
						]
					},
					{
						"name": "Báo cáo bán hàng",
						"description": "Báo cáo và thống kê bán hàng",
						"type": "GROUP",
						"permKey": "sales:sales_management:sales_reporting",
						"children": [
							{
								"name": "Tổng quan",
								"description": "Báo cáo tổng quan bán hàng",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_reporting:sales_report",
								"actions": [
									"read"
								]
							},
							{
								"name": "Nhập xuất tồn",
								"description": "Quản lý nhập xuất tồn kho",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_reporting:order_inventory",
								"actions": [
									"list",
									"read",
									"print"
								]
							},
							{
								"name": "Phiếu nhập xuất",
								"description": "Quản lý phiếu nhập xuất",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_reporting:order_vouchers",
								"actions": [
									"list",
									"read",
									"print",
									"download"
								]
							},
							{
								"name": "Danh sách tồn kho",
								"description": "Quản lý tồn kho",
								"type": "FEATURE",
								"permKey": "sales:sales_management:sales_reporting:order_stock_inventory",
								"actions": [
									"list",
									"download"
								]
							}
						]
					},
					{
						"name": "Chính sách giá",
						"description": "Quản lý chính sách giá",
						"type": "FEATURE",
						"permKey": "sales:sales_management:pricing_policy",
						"actions": [
							"read",
							"create",
							"update",
							"update_status",
							"delete"
						]
					},
					{
						"name": "Hóa đơn điện tử",
						"description": "Quản lý hóa đơn điện tử",
						"type": "FEATURE",
						"permKey": "sales:sales_management:e_invoice",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"export",
							"download",
							"upload",
							"bulk_update",
							"update_status",
							"print"
						]
					}
				]
			},
			{
				"name": "Thương mại điện tử",
				"description": "Quản lý bán hàng trên sàn TMĐT (Shopee, TikTok Shop, Lazada)",
				"type": "GROUP",
				"permKey": "sales:ecommerce_management",
				"children": [
					{
						"name": "Gian hàng",
						"description": "Quản lý toàn bộ hoạt động sàn TMĐT theo từng gian hàng: tổng quan, đơn hàng, đối soát, nhà sáng tạo, ánh xạ SKU, đồng bộ và thiết lập",
						"type": "FEATURE",
						"permKey": "sales:ecommerce_management:shop",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"update_status",
							"configure",
							"setting",
							"sync",
							"approve",
							"export",
							"download",
							"print"
						]
					}
				]
			},
			{
				"name": "Sales setting",
				"description": "Thiết lập hệ thống bán hàng",
				"type": "FEATURE",
				"permKey": "sales:settings",
				"actions": [
					"list",
					"read",
					"create",
					"update",
					"delete"
				]
			}
		]
	},
	{
		"application": "PURCHASING",
		"name": "Module Purchasing & SRM",
		"description": "Mua hàng và quản trị quan hệ nhà cung cấp",
		"type": "MODULE",
		"permKey": "purchase",
		"children": [
			{
				"name": "Dashboard",
				"description": "Bảng điều khiển",
				"type": "FEATURE",
				"permKey": "purchase:dashboard_management",
				"actions": [
					"read"
				]
			},
			{
				"name": "Quản trị mua",
				"description": "Quản lý mua hàng",
				"type": "GROUP",
				"permKey": "purchase:purchase_management",
				"children": [
					{
						"name": "Kế hoạch mua hàng",
						"description": "Quản lý kế hoạch mua",
						"type": "FEATURE",
						"permKey": "purchase:purchase_management:planning",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"download",
							"upload"
						]
					},
					{
						"name": "Nghiệp vụ mua hàng",
						"description": "Quản lý nghiệp vụ mua hàng",
						"type": "GROUP",
						"permKey": "purchase:purchase_management:business_operations",
						"children": [
							{
								"name": "Tìm kiếm, lựa chọn nhà cung cấp",
								"description": "Tìm kiếm, lựa chọn nhà cung cấp",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:business_operations:provider_management",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload"
								]
							},
							{
								"name": "Hợp đồng mua hàng",
								"description": "Quản lý hợp đồng mua hàng",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:business_operations:contract_management",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload"
								]
							},
							{
								"name": "Đơn hàng mua",
								"description": "Quản lý đơn hàng mua",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:business_operations:order_management",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"update_status",
									"print"
								]
							},
							{
								"name": "Vận chuyển giao nhận",
								"description": "Quản lý vận chuyển giao nhận",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:business_operations:transport_management",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"update_status",
									"print"
								]
							},
							{
								"name": "Hoá đơn thanh toán",
								"description": "Quản lý hoá đơn thanh toán",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:business_operations:payment_management",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"bulk_update",
									"update_status",
									"print"
								]
							},
							{
								"name": "Giảm giá đổi trả",
								"description": "Quản lý giảm giá đổi trả",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:business_operations:return_management",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"download",
									"upload",
									"update_status",
									"print"
								]
							}
						]
					},
					{
						"name": "Báo cáo mua hàng",
						"description": "Quản lý báo cáo mua hàng",
						"type": "GROUP",
						"permKey": "purchase:purchase_management:reporting",
						"children": [
							{
								"name": "Tổng quan",
								"description": "Báo cáo tổng quan mua hàng",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:reporting:sales_report_overview",
								"actions": [
									"read"
								]
							},
							{
								"name": "Nhập xuất tồn",
								"description": "Báo cáo nhập xuất tồn mua hàng",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:reporting:order_inventory",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"print"
								]
							},
							{
								"name": "Phiếu nhập xuất",
								"description": "Báo cáo phiếu nhập xuất mua hàng",
								"type": "FEATURE",
								"permKey": "purchase:purchase_management:reporting:order_vouchers",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"print",
									"download",
									"upload",
									"update_status"
								]
							}
						]
					}
				]
			}
		]
	},
	{
		"application": "WAREHOUSE",
		"name": "Module Warehouse",
		"description": "Quản lý kho và nhập xuất tồn",
		"type": "MODULE",
		"permKey": "warehouse",
		"children": [
			{
				"name": "Dashboard",
				"description": "Bảng điều khiển tổng quan",
				"type": "FEATURE",
				"permKey": "warehouse:dashboard_management",
				"actions": [
					"read"
				]
			},
			{
				"name": "Quản lý kho",
				"description": "Quản lý kho",
				"type": "GROUP",
				"permKey": "warehouse:warehouse_management",
				"children": [
					{
						"name": "Phiếu nhập - xuất",
						"description": "Quản lý phiếu nhập - xuất",
						"type": "GROUP",
						"permKey": "warehouse:warehouse_management:vouchers_management",
						"children": [
							{
								"name": "Phiếu nhập - xuất",
								"description": "Quản lý phiếu nhập - xuất",
								"type": "FEATURE",
								"permKey": "warehouse:warehouse_management:vouchers_management:order_vouchers",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"print",
									"download",
									"upload",
									"update_status"
								]
							},
							{
								"name": "Phiếu luân chuyển",
								"description": "Quản lý phiếu luân chuyển",
								"type": "FEATURE",
								"permKey": "warehouse:warehouse_management:vouchers_management:transfer",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"print",
									"download",
									"upload",
									"update_status"
								]
							}
						]
					},
					{
						"name": "Kiểm kho - Báo cáo",
						"description": "Quản lý kiểm kho - Báo cáo",
						"type": "GROUP",
						"permKey": "warehouse:warehouse_management:inventory_management",
						"children": [
							{
								"name": "Kiểm kê",
								"description": "Quản lý kiểm kê",
								"type": "FEATURE",
								"permKey": "warehouse:warehouse_management:inventory_management:inventory_check",
								"actions": [
									"list",
									"read",
									"create",
									"update",
									"delete",
									"print",
									"download",
									"upload",
									"update_status"
								]
							},
							{
								"name": "Nhập xuất tồn",
								"description": "Quản lý nhập xuất tồn",
								"type": "FEATURE",
								"permKey": "warehouse:warehouse_management:inventory_management:inventory_balance",
								"actions": [
									"read",
									"print",
									"download"
								]
							}
						]
					},
					{
						"name": "Danh sách tồn kho",
						"description": "Quản lý thực tế sản phẩm tồn kho",
						"type": "FEATURE",
						"permKey": "warehouse:warehouse_management:inventories",
						"actions": [
							"list",
							"download"
						]
					}
				]
			}
		]
	},
	{
		"application": "WORKFLOW",
		"name": "Module Workflow",
		"description": "Quản lý luồng làm việc",
		"type": "MODULE",
		"permKey": "workflows",
		"children": [
			{
				"name": "Quản lý thư mục",
				"description": "Quản lý thư mục và cấu trúc dự án",
				"type": "GROUP",
				"permKey": "workflows:folder_management",
				"children": [
					{
						"name": "Thư mục",
						"description": "Quản lý thư mục dự án",
						"type": "FEATURE",
						"permKey": "workflows:folder_management:folder",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete"
						]
					},
					{
						"name": "Dự án",
						"description": "Quản lý dự án",
						"type": "FEATURE",
						"permKey": "workflows:folder_management:project",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete"
						]
					}
				]
			},
			{
				"name": "Yêu cầu - Xét duyệt",
				"description": "Quản lý yêu cầu và quy trình xét duyệt",
				"type": "GROUP",
				"permKey": "workflows:approval_management",
				"children": [
					{
						"name": "Loại yêu cầu",
						"description": "Quản lý loại yêu cầu",
						"type": "FEATURE",
						"permKey": "workflows:approval_management:request_type",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete"
						]
					}
				]
			}
		]
	},
	{
		"application": "ORGANIZATION",
		"name": "Quản lý tổ chức và phòng ban",
		"description": "Quản lý tổ chức và phòng ban",
		"type": "SYSTEM",
		"permKey": "organization_service",
		"children": [
			{
				"name": "Tổ chức vận hành",
				"description": "Quản lý tổ chức vận hành",
				"type": "GROUP",
				"permKey": "organization_service:operational_organization",
				"children": [
					{
						"name": "Sơ đồ tổ chức / Danh mục vị trí",
						"description": "Quản lý sơ đồ tổ chức và danh mục vị trí",
						"type": "FEATURE",
						"permKey": "organization_service:operational_organization:organizational",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"download",
							"upload",
							"approve",
							"cancel_approve",
							"update_status"
						]
					},
					{
						"name": "Chuỗi giá trị",
						"description": "Quản lý chuỗi giá trị",
						"type": "FEATURE",
						"permKey": "organization_service:operational_organization:value_chains",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"download",
							"upload",
							"approve"
						]
					},
					{
						"name": "Chức năng nhiệm vụ",
						"description": "Quản lý chức năng nhiệm vụ",
						"type": "FEATURE",
						"permKey": "organization_service:operational_organization:mission",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"copy",
							"delete",
							"download",
							"upload",
							"approve",
							"setting"
						]
					},
					{
						"name": "Danh mục nhân viên",
						"description": "Quản lý danh mục nhân viên",
						"type": "FEATURE",
						"permKey": "organization_service:operational_organization:employees",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"download",
							"upload",
							"cancel_approve"
						]
					}
				]
			}
		]
	},
	{
		"application": "ADMINISTRATION",
		"name": "Danh mục hệ thống",
		"description": "Quản lý danh mục hệ thống",
		"type": "SYSTEM",
		"permKey": "administration",
		"children": [
			{
				"name": "Danh mục VT-HH-SP-DV",
				"description": "Quản lý danh mục vật tư, hàng hóa, sản phẩm, dịch vụ",
				"type": "GROUP",
				"permKey": "administration:products_services",
				"children": [
					{
						"name": "Nhãn nhóm",
						"description": "Quản lý nhãn nhóm sản phẩm",
						"type": "FEATURE",
						"permKey": "administration:products_services:group_labels",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"download",
							"upload",
							"bulk_update",
							"setting",
							"copy"
						]
					},
					{
						"name": "Sản phẩm/hàng hoá/Dịch vụ",
						"description": "Quản lý sản phẩm, hàng hóa, dịch vụ",
						"type": "FEATURE",
						"permKey": "administration:products_services:products",
						"actions": [
							"list",
							"read",
							"create",
							"update",
							"delete",
							"download",
							"upload",
							"bulk_update",
							"setting",
							"copy"
						]
					}
				]
			},
			{
				"name": "Danh mục đối tượng",
				"description": "Quản lý danh mục đối tượng",
				"type": "FEATURE",
				"permKey": "administration:partners",
				"actions": [
					"create",
					"read",
					"update",
					"delete",
					"list",
					"download",
					"bulk_update",
					"upload"
				]
			},
			{
				"name": "Danh mục quản trị",
				"description": "Quản lý danh mục quản trị",
				"type": "GROUP",
				"permKey": "administration:administrations_list",
				"children": [
					{
						"name": "Danh mục quản trị",
						"description": "Quản lý danh mục quản trị",
						"type": "FEATURE",
						"permKey": "administration:administrations_list:categories",
						"actions": [
							"list",
							"create",
							"read",
							"update",
							"delete",
							"bulk_update"
						]
					},
					{
						"name": "Chi tiết Danh mục quản trị",
						"description": "Quản lý chi tiết danh mục quản trị",
						"type": "FEATURE",
						"permKey": "administration:administrations_list:categories:items",
						"actions": [
							"list",
							"create",
							"read",
							"update",
							"delete",
							"bulk_update"
						]
					}
				]
			}
		]
	},
	{
		"application": "SYSTEM MANAGEMENT",
		"name": "Quản trị hệ thống",
		"description": "Quản trị hệ thống - các thiết lập chung",
		"type": "SYSTEM",
		"permKey": "system_management",
		"children": [
			{
				"name": "Danh sách tài khoản",
				"description": "Quản lý tài khoản",
				"type": "FEATURE",
				"permKey": "system_management:accounts",
				"actions": [
					"list",
					"read",
					"create",
					"update",
					"update_status",
					"bulk_delete",
					"download",
					"upload"
				]
			},
			{
				"name": "Vai trò và quyền hạn",
				"description": "Quản lý vai trò và quyền hạn",
				"type": "FEATURE",
				"permKey": "system_management:roles",
				"actions": [
					"list",
					"create",
					"update",
					"delete"
				]
			},
			{
				"name": "Cài đặt hệ thống",
				"description": "Quản lý cài đặt hệ thống",
				"type": "FEATURE",
				"permKey": "system_management:settings",
				"actions": [
					"list",
					"read",
					"create",
					"update",
					"delete"
				]
			}
		]
	}
]

export default PERMISSION_TREE
