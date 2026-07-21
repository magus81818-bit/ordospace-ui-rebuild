# Route and screen inventory

Source of truth: `app/config/app.config.js`, `app/router/hash-router.js`, matching `<section class="screen">` elements in `index.html`, and Round 1 Playwright navigation. The live rebuild and local baseline both expose the same 19 screen sections.

## Public and shared routes

| Hash | Screen | Title / visible heading | Access and shell | Important states | Evidence |
|---|---|---|---|---|---|
| `#landing` / empty hash | `screen-landing` | ORDOSPACE | public, `auth-off` | desktop nav, mobile nav, inquiry entry, animated demos, FAQ | 3 viewports |
| `#auth` | `screen-auth` | 로그인 | public, `auth-off` | login, forgot, forgot-sent, reset, reset-done, error, submitting | 3 viewports + forgot states |
| `#terms` | `screen-terms` | 이용약관 | public, `auth-off` | long policy content | 3 viewports |
| `#privacy` | `screen-privacy` | 개인정보처리방침 | public, `auth-off` | long policy content | 3 viewports |
| `#support` | `screen-support` | 고객지원 | public, `auth-off` | channel cards, support form state | 3 viewports |
| `#select-workspace` | `screen-select-workspace` | 역할 전환 / 접속할 워크스페이스를 선택하세요 | public transition screen, `auth-off` | client/worker/admin selection, single-role and multi-role sessions | 3 viewports |
| `#forbidden-403` | `screen-forbidden-403` | 접근 불가 | shared guarded screen | attempted URL, current role, role-switch hint, return home | desktop guard evidence |
| `#components-gallery` | `screen-components-gallery` | 컴포넌트 갤러리 | QA only; requires explicit `dev_mode=on` | component state catalogue | denied + enabled evidence |
| `#inquiry` | `inquiryModal` over landing | 도입 문의 | public modal, not a screen in `SCREENS` | closed/open, form, success/error notification | desktop modal evidence |

Public routes deliberately hide sidebar, topbar, mobile header, and dashboard tab bar. `#forbidden-403` and `#components-gallery` are shared but are not included in `AUTH_OFF`.

## Client routes

| Hash | Screen | Major sections | Primary functions | Guard evidence |
|---|---|---|---|---|
| `#dashboard` | `screen-dashboard` | KPI row, step progress, chain progress, approval cards | project summary, approval entry, project navigation | worker/admin denied |
| `#project` | `screen-project` | project header, status/chain filters, timeline, assets, card detail modal | filter, inspect ModuleCard, comments, client action | role-owned |
| `#approvals` | `screen-approvals` | queue count/list/detail | select deliverable, inspect, approve/revision lifecycle | role-owned |
| `#profile` | `screen-profile` | notification and My tabs | notification filtering, account/role information, logout/role switch | shared authenticated route |

Desktop sidebar order is exactly `홈 → 프로젝트 → 승인함(3) → 알림(2)`. Mobile order is `홈 → 프로젝트 → 승인함 → 알림 → 더보기`.

## Worker routes

| Hash | Screen | Major sections | Primary functions | Guard evidence |
|---|---|---|---|---|
| `#worker-home` | `screen-worker-home` | KPIs, revision queue, in-progress work, pending work | priority triage and work-card entry | client/admin denied |
| `#worker-cards` | `screen-worker-cards` | filter controls, card list, detail, QC/work log/submission controls | assignable work inspection, QC gate, logs, submit to PM review | role-owned |
| `#profile` | `screen-profile` | notification and My tabs | same shared profile behavior with worker content | shared authenticated route |

Desktop sidebar order is exactly `홈 → 내 작업(2) → 알림`. Mobile order is `홈 → 내 작업 → 알림 → 더보기`.

## Admin routes

| Hash | Screen | Major sections | Primary functions | Guard evidence |
|---|---|---|---|---|
| `#admin-home` | `screen-admin-home` | date/KPIs, immediate actions, project summary, resource summary | operational triage and deep links | client/worker denied |
| `#admin-projects` | `screen-admin-projects` | board/table switch, project board/table, project detail tabs | project selection, timeline/finance/staffing inspection | role-owned |
| `#admin-cards` | `screen-admin-cards` | gate banner, filters, list/detail, bulk-create sheet | filter/edit ModuleCards, worker assignment, PM/client handoff, gate pass | role-owned |
| `#admin-team` | `screen-admin-team` | partners/heatmap tabs, KPI rows, tables, invite/reassign sheets | inspect capacity, invite partners, change allocation | role-owned |
| `#admin-audit` | `screen-admin-audit` | immutable timeline, target detail, CSV export | inspect history and export | role-owned |
| `#profile` | `screen-profile` | notification and My tabs | same shared profile behavior with admin content | shared authenticated route |

Desktop sidebar order is exactly `홈 → 프로젝트 → Module 관리(5) → 인력 → 감사 로그`. Mobile order is `홈 → Module → 프로젝트 → 알림 → 더보기`.

## Router aliases and fallback behavior

- Legacy room/workspace hashes are normalized by `app/router/hash-router.js` to the current role route before access is evaluated.
- Unknown or empty authenticated hashes return to `ROLE_HOME`: admin `admin-home`, client `dashboard`, worker `worker-home`.
- Public hashes remain accessible without a dashboard session.
- Cross-role direct navigation is rewritten to `forbidden-403`, not silently granted.
- `components-gallery` requires the explicit local QA flag; the Round 1 test proves both denied and allowed states.

## Browser coverage

Automated coverage contains 31 successful route/viewport observations, 3 exact menu comparisons, 6 role-shell responsive checks, 6 cross-role access denials, and one QA-gallery guard check. The authoritative record is `artifacts/redo/r01/browser-audit.json`.
