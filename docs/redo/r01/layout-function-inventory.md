# Layout and function inventory

## Runtime and deployment shape

The deployed product is the root static application: `vercel.json` has `framework: null`, an empty build command, and output directory `.`. `index.html` loads configuration, data, repositories, services, reusable UI factories, screen renderers, shell, router, QA, and `app/main.js`. The repository also contains an Express/TypeScript backend and serverless API modules, but the visible Vercel page is the root static shell.

Session behavior is owned by `app/services/session.service.js`. It keeps the current role/session in local storage, supports the real backend authentication path, and exposes normal UI role selection when the session has multiple roles. The Round 1 audit selected roles through the visible workspace cards; it did not bypass authorization code.

## Global application shell

| Area | Desktop/tablet ≥1024 | Mobile <1024 | Data and behavior | Migration status |
|---|---|---|---|---|
| Sidebar | fixed 240 px, role logo/profile/menu/theme | hidden | `MENU`, `ROLE_PROFILE`, theme storage | Pending R3 |
| Topbar | breadcrumb, role CTA, notification trigger, avatar | hidden | `CRUMBS`, `ROLE_CTA`, notification data | Pending R3 |
| Mobile header | hidden | fixed 56 px, drawer trigger/title/avatar | route title, profile | Pending R3 |
| Drawer | unavailable | overlay + role menu | `MENU`, Escape/backdrop close, focus behavior | Pending R3 |
| Bottom tabs | hidden | fixed 64 px, role-specific 4–5 items | `MTAB_MENU`, badges, profile tabs | Pending R3 |
| Main area | offset by sidebar/topbar | padded for header/tabs | active `.screen` only | Pending R3 |
| Theme | light/dark/system selector | same | local storage + system media query | Pending R3 |
| Notifications | anchored popover | same trigger context | role samples, unread/category states | Pending R4 |

Public pages set `body.auth-off` and remove the entire authenticated shell. Authenticated pages set `body.auth-on role-{role}`. At the required 1024 px tablet viewport the existing contract is the desktop shell; 390 px uses mobile header and tabs.

## Public layouts and functions

| Surface | Preserved layout contract | Interactive behavior and states |
|---|---|---|
| Landing | floating header, hero, risk/why/how sections, animated operational demos, adoption, FAQ, footer | inquiry links/modal, login link, responsive header, pointer/reduced-motion policies, FAQ disclosure |
| Authentication | split marketing/login composition | login validation/submitting/error, multi-role dev option, forgot email, sent/resend, reset rules/match/done |
| Terms/privacy | policy masthead and long-form content | anchor/back navigation, long content scrolling |
| Support | support masthead, channel cards, support form | validation, submit notification, inquiry linkage |
| Workspace selector | role cards in a centered selection surface | role selection through visible `[data-ws-role]` controls |
| 403 | centered explanation/action panel | attempted URL/current role text, home action, optional workspace switch |
| Inquiry | landing overlay dialog | open/close, return hash, form validation, status toast |

All public layouts are frozen for every later round.

## Client layouts and functions

| Route | Layout | Data source | Actions/states |
|---|---|---|---|
| Dashboard | heading/CTA, 4 KPI cards, step progress, chain tracks, approval-card grid | ModuleCard lifecycle + project meta | empty approval state, project/approval deep links |
| Project | progress header, view tabs, filter toolbar, grouped timeline/gates, asset panel, detail modal | client project cards, chain/step/status labels | status/chain filtering, card selection, comment, approve/revision controls |
| Approvals | master-detail queue with count/list/detail | `done` ModuleCards and lifecycle history | selection, empty state, approve, request revision, confirmation/error |
| Profile | notification/My tabs and account cards | role profile + notification samples + session | filter/unread, role switch, logout |

## Worker layouts and functions

| Route | Layout | Data source | Actions/states |
|---|---|---|---|
| Worker home | 4 KPIs plus revision/in-progress/pending sections | assigned ModuleCards, dates and work logs | empty/list states, priority entry links |
| My work | filter row, status counts, scrollable card list, persistent detail | assigned ModuleCards and lifecycle service | select/filter, QC checklist, log hours, submit to PM, disabled/error/empty states |
| Profile | shared tabbed account surface | worker profile/session/notifications | same shared actions, role-specific copy |

## Admin layouts and functions

| Route | Layout | Data source | Actions/states |
|---|---|---|---|
| Admin home | 4 KPI cards, immediate-action grid, project table, resource rows | ModuleCards, projects, people, dates/work logs | empty alert state, project/worker deep links |
| Projects | board/table toggle, five-stage board or table, persistent project detail/tabs | project summaries + ModuleCards | select project, switch view/detail tabs, URL project query |
| Module management | gate banner, filter toolbar, count/list/detail, bulk-create sheet | repository + lifecycle service | filter, select, create, assign, change state, PM/client handoff, gate confirmation |
| Team | partners/heatmap tabs, KPI sets, partner table, weekly allocation grid | partner/worker/heatmap samples + ModuleCards | invite sheet, select allocation, slider/warning, reassign modal |
| Audit | timeline/filter/detail and export action | append-only timeline events | target inspection, CSV export; no edit/delete UI |
| Profile | shared account surface | admin profile/session/notifications | shared profile actions |

## Reusable factories and lifecycle

`app/ui/components/` exposes 35 namespace entries covering badges/status, metrics/progress, ModuleCards, details, forms, sheets, empty and toolbar patterns. Static validation checks escaping across 19 factory outputs and marker classes. `app/services/module-card-lifecycle.service.js` owns worker QC → PM review → client queue → revision/approval transitions and local storage hydration. `api/module-cards.js` and `api/_lib/module-card-repository.cjs` are the server boundary.

## States that later rounds must preserve

- loading, populated, long-content, empty, validation-error, API-error, and disabled states;
- hover, focus-visible, active, selected, expanded, and modal/sheet open/closed states;
- status tones for pending, in-progress, review, revision, done, approved, warning, and critical states;
- desktop, 1024 tablet desktop-shell, and 390 mobile-shell behavior;
- local storage session, theme, lifecycle hydration, and normal backend request semantics;
- all current Korean titles, menus, badges, counts, fixture data, route aliases, and guards.
