# Round 8 Worker dashboard transplant

Round 8 migrates only `#worker-home` and `#worker-cards` to the approved SalesOps visual grammar. The existing Worker renderer, routes, Korean product content, ModuleCard data, session/role guard, storage key, API path, and lifecycle service remain authoritative.

## Result

- Inventory: UI-033 through UI-042, exactly 10 rows
- Classification: Adapted 9, Derived 1, Exact 0
- Product additions: Worker-only stylesheet and Worker-only UI factories/decorator
- Product modifications: Worker renderer integration, stylesheet/script registration, JavaScript syntax gate
- Frozen surfaces: Admin, Client, Profile, landing, auth, terms, privacy, support, workspace selection
- Deployment: none

The machine-readable source of truth is under `artifacts/redo/r08/`; browser screenshots are under `evidence/redo/r08/`.

