# Round 6 Inventory Scope

| ID | 화면 | 컴포넌트 | 분류 | 소비 Primitive | 상태 | Evidence |
|---|---|---|---|---|---|---|
| UI-043 | 운영 홈 | operations KPI row | Adapted | MetricCard | default/zero/warn/critical | `evidence/redo/r06/admin/` |
| UI-044 | 운영 홈 | immediate-action cards | Derived | Card + StatusBadge | populated/empty/long | `evidence/redo/r06/admin/` |
| UI-045 | 운영 홈 | project summary table | Adapted | TableShell + Progress | hover/overdue/long | `evidence/redo/r06/admin/` |
| UI-046 | 운영 홈 | resource rows | Adapted | Card | active/idle/long | `evidence/redo/r06/admin/` |
| UI-047 | 프로젝트 감독 | board/table view toggle | Adapted | TabGroup | default/active/focus | `evidence/redo/r06/admin/` |
| UI-048 | 프로젝트 감독 | five-stage project board | Derived | Dashboard Surface | populated/empty/selected | `evidence/redo/r06/admin/` |
| UI-049 | 프로젝트 감독 | project table | Adapted | TableShell | hover/selected/overdue | `evidence/redo/r06/admin/` |
| UI-050 | 프로젝트 감독 | project detail tabs/body | Derived | TabGroup + ModuleCard | timeline/finance/resource/contract | `evidence/redo/r06/admin/` |
| UI-051 | Module 작업 관리 | gate-ready banner | Derived | StatusBanner | hidden/ready/confirm/success | `evidence/redo/r06/admin/` |
| UI-052 | Module 작업 관리 | Module filter toolbar | Adapted | FilterGroup | all/selected/no-result | `evidence/redo/r06/admin/` |
| UI-053 | Module 작업 관리 | Module list/detail | Adapted | ModuleCard + EmptyState | selected/empty/loading/error | `evidence/redo/r06/admin/` |
| UI-054 | Module 작업 관리 | lifecycle action set | Adapted | ActionToolbar | enabled/disabled/confirm/error | `evidence/redo/r06/admin/` |
| UI-055 | Module 작업 관리 | bulk-create sheet | Adapted | Sheet + FormControls | open/partial/all/invalid/submitting | `evidence/redo/r06/admin/` |
| UI-056 | 파트너 · 배정 | partners/heatmap tabs | Adapted | TabGroup | active/inactive | `evidence/redo/r06/admin/` |
| UI-057 | 파트너 · 배정 | partner KPI/table | Adapted | MetricCard + TableShell | populated/empty/long | `evidence/redo/r06/admin/` |
| UI-058 | 파트너 · 배정 | weekly heatmap | Derived | Chart surface | idle/normal/warn/critical/hover | `evidence/redo/r06/admin/` |
| UI-059 | 파트너 · 배정 | partner invite sheet | Adapted | Sheet + FormControls | closed/open/error/submitting | `evidence/redo/r06/admin/` |
| UI-060 | 파트너 · 배정 | reassign modal | Derived | Dialog + FormControls | closed/open/warning/disabled | `evidence/redo/r06/admin/` |
| UI-061 | 감사 로그 | audit timeline | Derived | Table/List grammar | populated/filtered/long | `evidence/redo/r06/admin/` |
| UI-062 | 감사 로그 | audit target detail | Derived | Card | selected/no selection/long | `evidence/redo/r06/admin/` |
| UI-063 | 감사 로그 | CSV export action | Adapted | Button | default/focus/error | `evidence/redo/r06/admin/` |

각 항목의 기존 기능·SalesOps ID·ZIP/Live 근거·token·Primitive·D/T/M·상태 판정은 `artifacts/redo/r06/inventory-scope.json`과 `admin-component-catalog.json`에 기계 판독 형태로 기록했습니다. 완료 대상은 위 21개뿐입니다.

