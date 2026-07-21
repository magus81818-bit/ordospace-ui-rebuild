# ORDOSPACE to SalesOps component migration matrix

Rows: 73; Exact 10; Adapted 42; Derived 21. Missing/duplicate/additional/unresolved: 0.

| ORDOSPACE ID | Role/routes | Component | SalesOps ID | Class | Implementation | Status |
|---|---|---|---|---|---|---|
| UI-001 | authenticated/all | sidebar `#sidebar` | SO-NAV-001 | Adapted | Round 5 | Mapped for implementation |
| UI-002 | authenticated/all | topbar `#topbar` | SO-HEADER-001 | Adapted | Round 5 | Mapped for implementation |
| UI-003 | authenticated/all | mobile header `#mheader` | SO-HEADER-001 | Adapted | Round 5 | Mapped for implementation |
| UI-004 | authenticated/all | drawer `#drawerOverlay/#drawerMenu` | SO-SHEET-001 | Derived | Round 5 | Mapped for implementation |
| UI-005 | authenticated/all | mobile tabs `#mtab` | SO-TAB-001 | Adapted | Round 5 | Mapped for implementation |
| UI-006 | authenticated/all | notification panel | SO-POPOVER-001 | Adapted | Round 5 | Mapped for implementation |
| UI-007 | authenticated/all | theme control | SO-SWITCH-001 | Adapted | Round 5 | Mapped for implementation |
| UI-008 | all dashboard | breadcrumb/page title | SO-TITLE-001 | Adapted | Round 5 | Mapped for implementation |
| UI-009 | all dashboard | primary role CTA | SO-SHELL-001 | Adapted | Round 5 | Mapped for implementation |
| UI-010 | shared | status badge factory | SO-STATUS-001 | Exact | Round 3 | Mapped for implementation |
| UI-011 | shared | metric card factory | SO-CARD-002 | Exact | Round 3 | Mapped for implementation |
| UI-012 | shared | progress track | SO-PROGRESS-001 | Exact | Round 3 | Mapped for implementation |
| UI-013 | shared | ModuleCard factory | SO-SHELL-001 | Adapted | Round 4 | Mapped for implementation |
| UI-014 | shared | empty-state panel | SO-STATE-005 | Exact | Round 4 | Mapped for implementation |
| UI-015 | shared | toolbar/filter group | SO-FILTER-001 | Exact | Round 4 | Mapped for implementation |
| UI-016 | shared | tab group | SO-TAB-001 | Exact | Round 4 | Mapped for implementation |
| UI-017 | shared | modal/dialog shell | SO-DIALOG-001 | Exact | Round 4 | Mapped for implementation |
| UI-018 | shared | side/bottom sheet shell | SO-SHEET-001 | Exact | Round 4 | Mapped for implementation |
| UI-019 | shared | table shell | SO-TABLE-001 | Exact | Round 4 | Mapped for implementation |
| UI-020 | shared | form controls | SO-INPUT-001 | Exact | Round 4 | Mapped for implementation |
| UI-021 | client/dashboard | dashboard KPI row | SO-CARD-002 | Adapted | Round 7 | Mapped for implementation |
| UI-022 | client/dashboard | project step progress | SO-PROGRESS-001 | Derived | Round 7 | Mapped for implementation |
| UI-023 | client/dashboard | chain progress group | SO-PROGRESS-001 | Adapted | Round 7 | Mapped for implementation |
| UI-024 | client/dashboard | approval-card grid | SO-CARD-001 | Adapted | Round 7 | Mapped for implementation |
| UI-025 | client/project | project progress header | SO-HEADER-001 | Adapted | Round 7 | Mapped for implementation |
| UI-026 | client/project | chain/status filters | SO-FILTER-001 | Adapted | Round 7 | Mapped for implementation |
| UI-027 | client/project | step timeline and gate rows | SO-CHART-001 | Derived | Round 7 | Mapped for implementation |
| UI-028 | client/project | artifacts/assets panel | SO-CARD-001 | Adapted | Round 7 | Mapped for implementation |
| UI-029 | client/project | card detail modal | SO-DIALOG-001 | Adapted | Round 7 | Mapped for implementation |
| UI-030 | client/approvals | approval queue list | SO-CARD-001 | Adapted | Round 7 | Mapped for implementation |
| UI-031 | client/approvals | approval detail | SO-CARD-001 | Adapted | Round 7 | Mapped for implementation |
| UI-032 | client/approvals | decision controls | SO-INPUT-001 | Adapted | Round 7 | Mapped for implementation |
| UI-033 | worker/home | worker KPI row | SO-CARD-002 | Adapted | Round 8 | Mapped for implementation |
| UI-034 | worker/home | revision queue | SO-CARD-001 | Adapted | Round 8 | Mapped for implementation |
| UI-035 | worker/home | in-progress section | SO-PROGRESS-001 | Adapted | Round 8 | Mapped for implementation |
| UI-036 | worker/home | pending section | SO-CARD-001 | Adapted | Round 8 | Mapped for implementation |
| UI-037 | worker/cards | work filter/count bar | SO-FILTER-001 | Adapted | Round 8 | Mapped for implementation |
| UI-038 | worker/cards | work-card list | SO-CARD-001 | Adapted | Round 8 | Mapped for implementation |
| UI-039 | worker/cards | work-card detail | SO-CARD-001 | Adapted | Round 8 | Mapped for implementation |
| UI-040 | worker/cards | QC checklist | SO-INPUT-001 | Derived | Round 8 | Mapped for implementation |
| UI-041 | worker/cards | work log controls | SO-INPUT-001 | Adapted | Round 8 | Mapped for implementation |
| UI-042 | worker/cards | submit-to-review action | SO-SHELL-001 | Adapted | Round 8 | Mapped for implementation |
| UI-043 | admin/home | operations KPI row | SO-CARD-002 | Adapted | Round 6 | Mapped for implementation |
| UI-044 | admin/home | immediate-action cards | SO-CARD-001 | Derived | Round 6 | Mapped for implementation |
| UI-045 | admin/home | project summary table | SO-PROGRESS-001 | Adapted | Round 6 | Mapped for implementation |
| UI-046 | admin/home | resource rows | SO-CARD-001 | Adapted | Round 6 | Mapped for implementation |
| UI-047 | admin/projects | board/table view toggle | SO-TABLE-001 | Adapted | Round 6 | Mapped for implementation |
| UI-048 | admin/projects | five-stage project board | SO-SHELL-001 | Derived | Round 6 | Mapped for implementation |
| UI-049 | admin/projects | project table | SO-TABLE-001 | Adapted | Round 6 | Mapped for implementation |
| UI-050 | admin/projects | project detail tabs/body | SO-TAB-001 | Derived | Round 6 | Mapped for implementation |
| UI-051 | admin/cards | gate-ready banner | SO-CHART-001 | Derived | Round 6 | Mapped for implementation |
| UI-052 | admin/cards | Module filter toolbar | SO-FILTER-001 | Adapted | Round 6 | Mapped for implementation |
| UI-053 | admin/cards | Module list/detail | SO-CARD-001 | Adapted | Round 6 | Mapped for implementation |
| UI-054 | admin/cards | lifecycle action set | SO-SHELL-001 | Adapted | Round 6 | Mapped for implementation |
| UI-055 | admin/cards | bulk-create sheet | SO-SHEET-001 | Adapted | Round 6 | Mapped for implementation |
| UI-056 | admin/team | partners/heatmap tabs | SO-TAB-001 | Adapted | Round 6 | Mapped for implementation |
| UI-057 | admin/team | partner KPI/table | SO-CARD-002 | Adapted | Round 6 | Mapped for implementation |
| UI-058 | admin/team | weekly heatmap | SO-CHART-001 | Derived | Round 6 | Mapped for implementation |
| UI-059 | admin/team | partner invite sheet | SO-SHEET-001 | Adapted | Round 6 | Mapped for implementation |
| UI-060 | admin/team | reassign modal | SO-DIALOG-001 | Derived | Round 6 | Mapped for implementation |
| UI-061 | admin/audit | audit timeline | SO-TABLE-001 | Derived | Round 6 | Mapped for implementation |
| UI-062 | admin/audit | audit target detail | SO-CARD-001 | Derived | Round 6 | Mapped for implementation |
| UI-063 | admin/audit | CSV export action | SO-SHELL-001 | Adapted | Round 6 | Mapped for implementation |
| UI-064 | shared/profile | notification/My tabs | SO-TAB-001 | Adapted | Round 4 | Mapped for implementation |
| UI-065 | public/landing | public floating header | SO-HEADER-001 | Derived | Round 9 | Frozen regression only |
| UI-066 | public/landing | hero and narrative sections | SO-CARD-001 | Derived | Round 9 | Frozen regression only |
| UI-067 | public/landing | FAQ accordion | SO-CARD-001 | Derived | Round 9 | Frozen regression only |
| UI-068 | public | inquiry modal/form | SO-DIALOG-001 | Derived | Round 9 | Frozen regression only |
| UI-069 | public/auth | authentication composition | SO-SHELL-001 | Derived | Round 9 | Frozen regression only |
| UI-070 | public/policies | terms/privacy/support content | SO-INPUT-001 | Derived | Round 9 | Frozen regression only |
| UI-071 | shared | workspace selector | SO-INPUT-001 | Derived | Round 9 | Frozen regression only |
| UI-072 | shared | 403 screen | SO-CARD-001 | Derived | Round 9 | Mapped for implementation |
| UI-073 | QA | component gallery | SO-CARD-001 | Derived | Round 4 | Mapped for implementation |

The complete required 26-field record is machine-readable in JSON and CSV. Frozen public rows are classified for evidence completeness but have `implementationTarget=false`; they are regression-only. No row authorizes SalesOps IA, sales terminology, mock data, routes, or React/Next/Radix runtime copying.
