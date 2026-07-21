# Component and state migration ledger

Classification is intentionally unset in Round 1. `Pending` means no SalesOps visual code has been applied. R2 supplies the detailed SalesOps evidence and proposed Exact/Adapted/Derived classification; implementation begins only in the planner-assigned later round.

| ID | Role / routes | Existing component and location | Data/action contract | Required states | Responsive contract | SalesOps class | Expected round | Status |
|---|---|---|---|---|---|---|---|---|
| UI-001 | authenticated/all | sidebar `#sidebar` | exact role menu/profile/theme | default, hover, active, badge | 240 px ≥1024; hidden mobile | Pending | R3 | Pending |
| UI-002 | authenticated/all | topbar `#topbar` | crumbs, CTA, notifications, avatar | default, dropdown open, focus | ≥1024 only | Pending | R3 | Pending |
| UI-003 | authenticated/all | mobile header `#mheader` | title, drawer, avatar | default, focus | <1024 only | Pending | R3 | Pending |
| UI-004 | authenticated/all | drawer `#drawerOverlay/#drawerMenu` | role menu | closed/open, backdrop, Escape | <1024 only | Pending | R3 | Pending |
| UI-005 | authenticated/all | mobile tabs `#mtab` | role mobile menu/badges | default, active, badge | <1024 only | Pending | R3 | Pending |
| UI-006 | authenticated/all | notification panel | role notification samples | closed/open, unread/read, empty | anchored/viewport safe | Pending | R4 | Pending |
| UI-007 | authenticated/all | theme control | light/dark/system storage | default, hover, selected | desktop sidebar | Pending | R3 | Pending |
| UI-008 | all dashboard | breadcrumb/page title | exact `CRUMBS`/`TITLES` | default, long title | shell-specific | Pending | R3 | Pending |
| UI-009 | all dashboard | primary role CTA | exact role deep link | default, hover, focus, disabled | topbar/mobile content | Pending | R3 | Pending |
| UI-010 | shared | status badge factory | exact label/tone | default, pending, warning, critical, ok | inline/wrap | Pending | R4 | Pending |
| UI-011 | shared | metric card factory | title/value/subtext | normal, positive, warning, critical | 1–4 column reflow | Pending | R4 | Pending |
| UI-012 | shared | progress track | current/total | 0, partial, complete, overflow-safe | fluid | Pending | R4 | Pending |
| UI-013 | shared | ModuleCard factory | lifecycle record and click target | pending, progress, review, revision, done, approved | grid/list/mobile | Pending | R4 | Pending |
| UI-014 | shared | empty-state panel | contextual text/action | empty, no-filter-results | fluid | Pending | R4 | Pending |
| UI-015 | shared | toolbar/filter group | filter state | default, hover, focus, selected, disabled | wrap/scroll | Pending | R4 | Pending |
| UI-016 | shared | tab group | selected panel | default, hover, active, focus | scroll on narrow | Pending | R4 | Pending |
| UI-017 | shared | modal/dialog shell | title/body/actions | closed/open, error, destructive confirm | max-width/mobile inset | Pending | R4 | Pending |
| UI-018 | shared | side/bottom sheet shell | form/detail content | closed/open, validation, submitting | full mobile width | Pending | R4 | Pending |
| UI-019 | shared | table shell | exact columns/rows | populated, empty, hover, long cell | horizontal scroll | Pending | R4 | Pending |
| UI-020 | shared | form controls | exact labels/values | default, focus, error, disabled, submitting | stacked narrow | Pending | R4 | Pending |
| UI-021 | client/dashboard | dashboard KPI row | ModuleCard counts | populated/zero/warn | 4→2→1 | Pending | R5 | Pending |
| UI-022 | client/dashboard | project step progress | project progress | completed/current/pending | horizontal/compact | Pending | R5 | Pending |
| UI-023 | client/dashboard | chain progress group | design/dev/ops approved totals | zero/partial/complete | stacked | Pending | R5 | Pending |
| UI-024 | client/dashboard | approval-card grid | latest done cards | populated/empty | multi→single | Pending | R5 | Pending |
| UI-025 | client/project | project progress header | project metadata/rate | normal/long meta | wrap | Pending | R5 | Pending |
| UI-026 | client/project | chain/status filters | filter state | all/selected/no-result | wrap | Pending | R5 | Pending |
| UI-027 | client/project | step timeline and gate rows | grouped ModuleCards | gate pass/fail, empty | 2→1 columns | Pending | R5 | Pending |
| UI-028 | client/project | artifacts/assets panel | deliverable list | populated/empty/long filename | list | Pending | R5 | Pending |
| UI-029 | client/project | card detail modal | selected ModuleCard | open/closed, comment, approval error | dialog/mobile inset | Pending | R5 | Pending |
| UI-030 | client/approvals | approval queue list | done cards | selected/unselected/empty | master-detail stack | Pending | R5 | Pending |
| UI-031 | client/approvals | approval detail | selected deliverable | normal, no selection, long content | fluid | Pending | R5 | Pending |
| UI-032 | client/approvals | decision controls | approve/revision transition | enabled, disabled, confirm, error | action wrap | Pending | R5 | Pending |
| UI-033 | worker/home | worker KPI row | assigned-card summaries | populated/zero/warn | 4→2→1 | Pending | R6 | Pending |
| UI-034 | worker/home | revision queue | revision cards | populated/empty | list/grid | Pending | R6 | Pending |
| UI-035 | worker/home | in-progress section | active assigned cards | populated/empty | list/grid | Pending | R6 | Pending |
| UI-036 | worker/home | pending section | queued assigned cards | populated/empty | list/grid | Pending | R6 | Pending |
| UI-037 | worker/cards | work filter/count bar | role-owned filters/count | all/selected/no-result | wrap | Pending | R6 | Pending |
| UI-038 | worker/cards | work-card list | assigned cards | selected, revision, overdue | list | Pending | R6 | Pending |
| UI-039 | worker/cards | work-card detail | selected card | no selection, long content | persistent/stacked | Pending | R6 | Pending |
| UI-040 | worker/cards | QC checklist | card QC values | unchecked/checked/blocked | stacked | Pending | R6 | Pending |
| UI-041 | worker/cards | work log controls | hours/text append | default, validation, success/error | wrap | Pending | R6 | Pending |
| UI-042 | worker/cards | submit-to-review action | lifecycle transition | disabled by QC, enabled, submitting, error | full-width mobile | Pending | R6 | Pending |
| UI-043 | admin/home | operations KPI row | overdue/review/MH/projects | normal/zero/warn/critical | 4→2→1 | Pending | R7 | Pending |
| UI-044 | admin/home | immediate-action cards | derived priority actions | populated/none | 3→1 | Pending | R7 | Pending |
| UI-045 | admin/home | project summary table | project progress/deadline/status | hover, overdue, long client | scroll | Pending | R7 | Pending |
| UI-046 | admin/home | resource rows | worker load and MH | active/idle/long name | row/grid compact | Pending | R7 | Pending |
| UI-047 | admin/projects | board/table view toggle | `_adminProjectView` | default/active/focus | compact | Pending | R7 | Pending |
| UI-048 | admin/projects | five-stage project board | project stage | populated/empty column/selected | horizontal/stack | Pending | R7 | Pending |
| UI-049 | admin/projects | project table | project summaries | hover/selected/overdue | horizontal scroll | Pending | R7 | Pending |
| UI-050 | admin/projects | project detail tabs/body | selected project | timeline/finance/staffing, long | fluid | Pending | R7 | Pending |
| UI-051 | admin/cards | gate-ready banner | approved/total group | hidden/ready/confirm/success | row→stack | Pending | R8 | Pending |
| UI-052 | admin/cards | Module filter toolbar | project/worker/chain/status | all/selected/no-result | wrap | Pending | R8 | Pending |
| UI-053 | admin/cards | Module list/detail | repository records | selected/empty/loading/API error | split→stack | Pending | R8 | Pending |
| UI-054 | admin/cards | lifecycle action set | PM/client transitions | role/state enabled, disabled, confirm, error | wrap | Pending | R8 | Pending |
| UI-055 | admin/cards | bulk-create sheet | project/modules/worker/due | open, partial/all, invalid, submitting | side/full mobile | Pending | R8 | Pending |
| UI-056 | admin/team | partners/heatmap tabs | `_adminTeamTab` | active/inactive | scroll | Pending | R8 | Pending |
| UI-057 | admin/team | partner KPI/table | partner data | populated/empty/long | table scroll | Pending | R8 | Pending |
| UI-058 | admin/team | weekly heatmap | hours/project cells | idle/normal/warn/critical/hover | horizontal scroll | Pending | R8 | Pending |
| UI-059 | admin/team | partner invite sheet | invite form | closed/open/error/submitting | side/full mobile | Pending | R8 | Pending |
| UI-060 | admin/team | reassign modal | worker/day/hours | closed/open/warning/disabled | dialog | Pending | R8 | Pending |
| UI-061 | admin/audit | audit timeline | immutable events | populated/filtered/long | timeline/list | Pending | R8 | Pending |
| UI-062 | admin/audit | audit target detail | selected event | selected/no selection | fluid | Pending | R8 | Pending |
| UI-063 | admin/audit | CSV export action | read-only export | default/focus/error | header action | Pending | R8 | Pending |
| UI-064 | shared/profile | notification/My tabs | session/profile/notifications | active/unread/empty | stacked | Pending | R4 | Pending |
| UI-065 | public/landing | public floating header | section links/inquiry/login | desktop/mobile, open nav | frozen | None | Frozen |
| UI-066 | public/landing | hero and narrative sections | static copy/demos | motion/reduced-motion/long | frozen | None | Frozen |
| UI-067 | public/landing | FAQ accordion | disclosure content | collapsed/expanded/focus | frozen | None | Frozen |
| UI-068 | public | inquiry modal/form | lead form | closed/open/error/success | frozen | None | Frozen |
| UI-069 | public/auth | authentication composition | backend/mock selection | login/forgot/reset/error/loading | frozen | None | Frozen |
| UI-070 | public/policies | terms/privacy/support content | static/form links | long content/form states | frozen | None | Frozen |
| UI-071 | shared | workspace selector | visible role controls | single/multi role, hover/focus | frozen structure | None | Frozen |
| UI-072 | shared | 403 screen | attempted route/current role | default/multi-role hint | frozen function | R9 | Pending visual only |
| UI-073 | QA | component gallery | explicit `dev_mode` | denied/enabled | desktop evidence | None | QA baseline |

## Classification rule

- **Exact**: a SalesOps source component can be transplanted without changing ORDOSPACE placement, semantics, data, or behavior.
- **Adapted**: the same SalesOps component grammar is retained while props/content/interaction are adapted to the existing ORDOSPACE contract.
- **Derived**: no direct counterpart exists; a new visual treatment is derived from verified SalesOps tokens and patterns while preserving ORDOSPACE behavior.

No row may move out of `Pending` without a file-level SalesOps source or screenshot/live-reference citation and state-by-state evidence.
