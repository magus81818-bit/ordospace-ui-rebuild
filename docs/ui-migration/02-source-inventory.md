# Source inventory

## ORDO React MVP

The complete `react-mvp/index.html`, `react-mvp/src`, and `react-mvp/scripts` trees were copied into `apps/web`. No production static app, backend, API, database tooling, deployment metadata, or original repository Git data was copied.

The source contains:

- 1 hash-router definition
- 2 React contexts: session and ModuleCard store
- 8 ModuleCard statuses and 3 roles
- 10 reusable MVP UI modules
- 7 ModuleCard card/action panels
- 11 Node validators and 1 real-browser smoke script

## SalesOps reference

The supplied ZIP was inspected without changing it. It is a Next.js 16 dashboard with 57 `components/ui` files, 15 dashboard TSX files, and 8 section screens. The machine-readable inventory is in `references/manifests/sales-ops.json`.

Observed pre-existing reference defects are recorded for later rounds:

- TypeScript build errors are ignored in `next.config.mjs`.
- Header title mapping omits some section identifiers.
- Recharts can emit negative width/height warnings.
- The fixed 260px sidebar compresses 393px content.
- Many included shadcn primitives are unused by dashboard code.
- The reference includes Next.js-only files and APIs.
- Google/remote font loading creates a build-time network dependency.

These findings are documentation only in Round 1.
