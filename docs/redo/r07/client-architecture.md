# Client Architecture

`app/screens/client-workspace.screen.js` remains the only operating Client renderer. Existing workspace data, ModuleCard data, lifecycle service, session, role guard, routes, localStorage keys, API endpoints, and backend are authoritative and unchanged.

`dashboard-salesops.client.css` is a visual descendant layer restricted to `body.auth-on` and the three Client screen IDs. It consumes Round 3 tokens and Round 4 primitives without selecting Shell, Admin, Worker, or public surfaces.

`client.ui.js` is a semantic decorator. It synchronizes tabs, pressed filters/queue items, dialog metadata, visible focus, focus entry/containment/return, and overflow names. The correction adds one modal focus trap and focus-return path because the original decorator did not contain focus or reliably restore it after Escape/backdrop close. It does not bind business actions or mutate data, lifecycle, storage, or API state.

QA state evidence uses navigation-reset page-local DOM overrides and lifecycle spies. The fixture audit proves operating fixture mutation false, localStorage mutation false, API calls zero, and restore true.
