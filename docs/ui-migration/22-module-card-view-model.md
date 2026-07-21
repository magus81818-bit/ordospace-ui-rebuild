# ModuleCard view model

Input is one immutable domain card plus the current role and seed-user lookup. Output fields are ID, title, summary, project label, role-safe assignee/client labels, central status view, clamped progress, phase, update label, and the existing role-scoped detail path.

- Status: `Domain status → status-map.ts → StatusBadge` with explicit unknown fallback.
- Progress: numeric values clamp to 0–100; missing values remain `null` rather than becoming zero.
- Admin: assignee and client labels may be available.
- Worker: client label is suppressed.
- Client: internal assignee label is suppressed.
- Detail paths remain `/workspace/{role}/cards/{id}`.
- The transformer performs no mutation, action dispatch, transition, or store access.

