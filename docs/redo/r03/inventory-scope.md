# Inventory scope

## In scope

| ID | ORDOSPACE component | Round 3 treatment | Classification |
|---|---|---|---|
| UI-010 | Status badge | Semantic status foreground, background and border tokens connected to existing badge selectors | Adapted |
| UI-011 | Metric card | Dashboard/surface/text/border/radius/shadow tokens connected without changing card structure | Adapted |
| UI-012 | Progress track | Track and fill color tokens connected while keeping existing geometry and values | Adapted |

The three components are adapted because SalesOps visual grammar is applied to existing ORDOSPACE markup and behavior; no SalesOps page structure or sales content is copied.

## Explicitly deferred

All Round 4+ primitive and component polishing remains reserved. The stylesheet contains semantic contracts for later work, but Round 3 does not migrate navigation, tables, forms, overlays, charts, dialogs, drawers, or full component states.

## Product invariants

- Existing Admin, Client and Worker routes and menu order remain unchanged.
- Existing text, data, DOM IDs, role guards and interactions remain unchanged.
- Landing, auth, terms, privacy, support and workspace-selection surfaces receive no token scope.
- Authenticated 403 and development-only component gallery remain inside the authenticated token boundary without becoming new public routes.
