# Existing Static Surface Inventory

| Surface | Source | Hash | Role | Migration |
|---|---|---|---|---|
| Landing | `index.html` | `#landing` | Public | Copied and restyled |
| Inquiry | `index.html` and product scripts | `#inquiry` | Public | Copied and restyled |
| Authentication | `index.html`, `app/screens/auth.screen.js` | `#auth` | Public | Copied and restyled |
| Workspace selection | `index.html`, session/router services | `#select-workspace` | Signed in | Copied and restyled |
| Client | client screen and shared UI modules | `#dashboard`, `#project`, `#approvals`, `#profile` | Client | Copied and restyled |
| Worker | worker screen and shared UI modules | `#worker-home`, `#worker-cards` | Worker | Copied and restyled |
| Admin | admin screen and shared UI modules | `#admin-home`, `#admin-projects`, `#admin-cards`, `#admin-team`, `#admin-audit` | Admin | Copied and restyled |
| Shared routing/session | `app/router`, `app/services` | Hash contract | All | Copied unchanged |
| Backend origin | `index.html`, `app/config/api.config.js` | Render origin meta | All | Preserved |
