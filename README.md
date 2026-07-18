# ORDOSPACE UI Rebuild

An isolated UI migration workspace for the ORDOSPACE React MVP. The functional baseline is copied from the read-only `ORDOSPACE_rebuild/react-mvp` source and is intentionally kept separate from the original repository and its Vercel project.

## Workspace

- `apps/web`: preserved React MVP behavior and validation scripts
- `apps/ui-lab`: independent Design Foundation catalog with 12 Round 2 sections
- `packages/design-tokens`: shared primitive, semantic, component, typography, and motion tokens
- `packages/ui-catalog`: future reusable component catalog
- `references/manifests`: machine-readable source inventories
- `docs/ui-migration`: migration decisions, audits, and QA evidence

## Commands

```powershell
npm install
npm run dev
npm run build
npm run typecheck
npm run validate
npm run validate:tokens
npm run validate:status-map
npm run smoke
npm run smoke:preview
npm run ui-lab:dev
npm run ui-lab:build
npm run visual:ui-lab
```

## Current migration state

- Round 1 functional baseline: `ui/r01-baseline`
- Round 2 design foundation: `ui/r02-design-foundation`
- Existing routes, role guards, store, persistence, and ModuleCard lifecycle remain unchanged.
- Round 2 applies only the shared token import, font fallback, canvas, base text, focus-visible, and reduced-motion foundation to `apps/web`.

This repository has no Vercel link. Do not copy `.vercel` metadata from any source project.
