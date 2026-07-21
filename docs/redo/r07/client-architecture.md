# Client Architecture

`app/screens/client-workspace.screen.js` remains the sole renderer and existing services/data remain authoritative. `dashboard-salesops.client.css` is a Client-only visual layer. `client.ui.js` adds semantics and focus behavior without rendering, storage, API, route, data, or lifecycle mutation.
