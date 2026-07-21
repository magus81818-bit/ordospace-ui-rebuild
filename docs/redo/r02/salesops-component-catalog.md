# SalesOps component catalog

Total: 55. Live: 43; code-only: 12; not-present: 0.

| ID | Name | Category | ZIP source | Symbol | Evidence | Migration |
|---|---|---|---|---|---|---|
| SO-SHELL-001 | Dashboard Shell | Layout | `app/page.tsx` | Dashboard | Live | Adapt |
| SO-NAV-001 | Sidebar | Layout | `components/dashboard/sidebar.tsx` | Sidebar | Live | Adapt |
| SO-NAV-002 | Sidebar item | Primitive | `components/dashboard/sidebar.tsx` | navItems map | Live | Adapt |
| SO-STATE-001 | Sidebar active state | State | `components/dashboard/sidebar.tsx` | isActive | Live | Adapt |
| SO-STATE-002 | Sidebar collapsed state | State | `components/dashboard/sidebar.tsx` | collapsed | Live | Adapt |
| SO-HEADER-001 | Header | Layout | `components/dashboard/header.tsx` | Header | Live | Adapt |
| SO-BREADCRUMB-001 | Breadcrumb | Primitive | `components/ui/breadcrumb.tsx` | Breadcrumb | Code only | Recreate |
| SO-TITLE-001 | Page title | Primitive | `components/dashboard/header.tsx` | sectionTitles | Live | Adapt |
| SO-TITLE-002 | Section title | Primitive | `components/dashboard/sections/overview.tsx` | h2 | Live | Adapt |
| SO-CARD-001 | Card | Primitive | `components/ui/card.tsx` | Card | Live | Adapt |
| SO-CARD-002 | Metric card | Composite | `components/dashboard/metric-card.tsx` | MetricCard | Live | Adapt |
| SO-BUTTON-001 | Button | Primitive | `components/ui/button.tsx` | Button | Live | Adapt |
| SO-BUTTON-002 | Icon button | Primitive | `components/dashboard/header.tsx` | notification/avatar button | Live | Adapt |
| SO-INPUT-001 | Input | Primitive | `components/ui/input.tsx` | Input | Live | Adapt |
| SO-INPUT-002 | Textarea | Primitive | `components/ui/textarea.tsx` | Textarea | Code only | Adapt |
| SO-SELECT-001 | Select | Primitive | `components/ui/select.tsx` | Select | Live | Adapt |
| SO-CHECK-001 | Checkbox | Primitive | `components/ui/checkbox.tsx` | Checkbox | Code only | Adapt |
| SO-RADIO-001 | Radio | Primitive | `components/ui/radio-group.tsx` | RadioGroup | Code only | Adapt |
| SO-SWITCH-001 | Switch | Primitive | `components/ui/switch.tsx` | Switch | Live | Adapt |
| SO-TAB-001 | Tab | Primitive | `components/ui/tabs.tsx` | Tabs | Live | Adapt |
| SO-FILTER-001 | Filter controls | Composite | `components/dashboard/sections/deals.tsx` | selectedFilter | Live | Adapt |
| SO-SEARCH-001 | Search input | Composite | `components/dashboard/header.tsx` | searchFocused | Live | Adapt |
| SO-PAGE-001 | Pagination | Composite | `components/dashboard/sections/deals.tsx` | Pagination block | Live | Adapt |
| SO-BADGE-001 | Badge | Primitive | `components/ui/badge.tsx` | Badge | Live | Adapt |
| SO-STATUS-001 | Status chip | Composite | `components/dashboard/sections/deals.tsx` | statusConfig | Live | Adapt |
| SO-TABLE-001 | Table | Primitive | `components/ui/table.tsx` | Table | Live | Adapt |
| SO-TABLE-002 | Table header | Composite | `components/dashboard/sections/deals.tsx` | thead | Live | Adapt |
| SO-TABLE-003 | Table row | Composite | `components/dashboard/sections/deals.tsx` | deals.map | Live | Adapt |
| SO-LIST-001 | List | Composite | `components/dashboard/recent-deals.tsx` | RecentDeals | Live | Adapt |
| SO-LIST-002 | List row | Composite | `components/dashboard/recent-deals.tsx` | deals.map | Live | Adapt |
| SO-CHART-001 | Chart container | Chart | `components/ui/chart.tsx` | ChartContainer | Live | Adapt |
| SO-CHART-002 | Chart axis | Chart | `components/dashboard/charts/revenue-chart.tsx` | XAxis/YAxis | Live | Adapt |
| SO-CHART-003 | Chart legend | Chart | `components/ui/chart.tsx` | ChartLegend | Live | Adapt |
| SO-CHART-004 | Chart tooltip | Chart | `components/ui/chart.tsx` | ChartTooltip | Live | Adapt |
| SO-PROGRESS-001 | Progress | Primitive | `components/ui/progress.tsx` | Progress | Live | Adapt |
| SO-AVATAR-001 | Avatar | Primitive | `components/ui/avatar.tsx` | Avatar | Live | Adapt |
| SO-DROPDOWN-001 | Dropdown | Primitive | `components/ui/dropdown-menu.tsx` | DropdownMenu | Code only | Adapt |
| SO-POPOVER-001 | Popover | Primitive | `components/ui/popover.tsx` | Popover | Code only | Adapt |
| SO-DIALOG-001 | Modal/Dialog | Primitive | `components/ui/dialog.tsx` | Dialog | Code only | Adapt |
| SO-SHEET-001 | Drawer/Sheet | Primitive | `components/ui/sheet.tsx` | Sheet | Code only | Adapt |
| SO-TOAST-001 | Toast/feedback | State | `components/ui/sonner.tsx` | Toaster | Code only | Adapt |
| SO-STATE-003 | Loading | State | `components/dashboard/sections/settings.tsx` | isSaving | Live | Adapt |
| SO-STATE-004 | Skeleton | State | `components/ui/skeleton.tsx` | Skeleton | Code only | Adapt |
| SO-STATE-005 | Empty | State | `components/ui/empty.tsx` | Empty | Code only | Adapt |
| SO-STATE-006 | Error | State | `components/ui/alert.tsx` | Alert destructive | Code only | Adapt |
| SO-STATE-007 | Success | State | `components/dashboard/sections/settings.tsx` | connected/success badges | Live | Adapt |
| SO-STATE-008 | Disabled | State | `components/ui/button.tsx` | disabled selectors | Live | Adapt |
| SO-STATE-009 | Hover | State | `components/dashboard/metric-card.tsx` | group-hover | Live | Adapt |
| SO-STATE-010 | Focus | State | `components/dashboard/header.tsx` | focus ring | Live | Adapt |
| SO-STATE-011 | Active/Pressed | State | `components/dashboard/sidebar.tsx` | isActive | Live | Adapt |
| SO-STATE-012 | Selected | State | `components/ui/tabs.tsx` | data-state=active | Live | Adapt |
| SO-CHART-005 | Pipeline chart | Chart | `components/dashboard/charts/pipeline-overview.tsx` | PipelineOverview | Live | Adapt |
| SO-CHART-006 | Revenue chart | Chart | `components/dashboard/charts/revenue-chart.tsx` | RevenueChart | Live | Adapt |
| SO-COMPOSITE-001 | Recent deals | Composite | `components/dashboard/recent-deals.tsx` | RecentDeals | Live | Adapt |
| SO-COMPOSITE-002 | Top performers | Composite | `components/dashboard/top-performers.tsx` | TopPerformers | Live | Adapt |

Every row's variants, state, responsive, data coupling, framework coupling, reuse potential, migration method and evidence are in `artifacts/redo/r02/salesops-component-catalog.json`. Code-only is not presented as live evidence.
