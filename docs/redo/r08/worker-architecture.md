# Worker architecture

`app/screens/worker-workspace.screen.js` remains the only Worker renderer and calculation source. Round 8 does not create a second application, replace fixtures, or bypass lifecycle persistence.

`app/ui/components/worker.ui.js` supplies four Worker-only presentation factories:

- `Progress(card)`
- `QcGroup(card)`
- `LogForm(card)`
- `ActionToolbar(card, canSubmit)`

Its semantic decorator adds Worker screen namespace, filter/card pressed state, accessible names, and live-region attributes after the existing renderer runs. It does not own routing, data, storage, API, or status transitions.

`app/styles/dashboard-salesops.worker.css` is limited to authenticated Worker Home/Cards selectors. It consumes Round 3 tokens and Round 4 primitive classes. Admin, Client, Profile, public, Sidebar, Header, drawer, and bottom-tab selectors are absent.

