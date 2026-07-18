# ORDOSPACE UI Rebuild

An isolated UI migration workspace for the ORDOSPACE React MVP. The functional baseline is copied from the read-only `ORDOSPACE_rebuild/react-mvp` source and is intentionally kept separate from the original repository and its Vercel project.

## Workspace

- `apps/web`: preserved React MVP behavior and validation scripts
- `apps/ui-lab`: independent visual catalog used by later migration rounds
- `packages/design-tokens`: shared design-token package
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
npm run smoke
npm run smoke:preview
npm run ui-lab:dev
npm run ui-lab:build
```

This repository has no Vercel link. Do not copy `.vercel` metadata from any source project.
