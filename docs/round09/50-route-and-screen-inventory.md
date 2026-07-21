# Round 9 Route and Screen Inventory

| Route | Role | Screen | Interactive surface | Form / overlay | State coverage | Mobile |
|---|---|---|---|---|---|---|
| `/` | Public | `OverviewScreen` | workspace/auth links | none | summary | stacked |
| `/auth` | Public | `AuthScreen` | seed account radios, sign-in | auth form | signed-in/out | one-column |
| `/workspace` | Session | `WorkspaceRedirectScreen` | redirect | none | auth/role guard | same |
| `/workspace/admin` | Admin | `AdminOperationsPage` | filters, queue links, create | create form | full/filter/queue empty | cards replace table |
| `/workspace/admin/cards/:cardId` | Admin | `AdminCardReviewPage` | back, review/send | sticky action aside | review/readonly/missing | aside stacks |
| `/workspace/client` | Client | `ClientApprovalPage` | filters, decision links | none | full/filter/queue empty | cards replace table |
| `/workspace/client/cards/:cardId` | Client | `ClientApprovalDetailPage` | approve/revision | decision form, sticky aside | actionable/readonly/error | aside stacks |
| `/workspace/worker` | Worker | `WorkerWorkspacePage` | filters, queue links | none | active/revision/empty | cards replace table |
| `/workspace/worker/cards/:cardId` | Worker | `WorkerTaskDetailPage` | progress/QC/note/save/submit | update and submit forms | editable/revision/readonly/empty activity | aside stacks |
| `*` | Public | `NotFoundScreen` | overview link | none | fallback | stacked |

The shell owns one `main`, desktop sidebar, tablet rail, mobile sheet, route metadata, user menu and skip link. Dynamic detail routes remain filtered by the existing role selector before rendering.
