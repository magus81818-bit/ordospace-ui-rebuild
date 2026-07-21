# SalesOps ZIP source audit

## Integrity

- Absolute path: `C:\Users\Admin\OneDrive\Desktop\모든 자료 날짜별 아카이브\260718\sales-ops-dashboard.zip`
- Exists/readable: yes
- Size: 137,273 bytes
- SHA-256: `460EAEBAE2E41C4FAA67C45391425C6047E44AAA07E8FBBD5FFB51238916D24C`
- Files: 96; corrupt: 0; duplicate-content groups: 2
- Top level: .gitignore, app, components, components.json, hooks, lib, next.config.mjs, package.json, pnpm-lock.yaml, postcss.config.mjs, public, styles, tsconfig.json
- Extracted/read successfully with the system archive reader into an isolated temporary directory; that temporary directory was removed and the ZIP is not committed.

## Technical structure

Next 16 / React 19 client-rendered single-page dashboard using local React state rather than URL routing. Tailwind 4, CSS variables/OKLCH, shadcn-style wrappers, Radix primitives, Lucide React, Recharts, next-themes, Sonner and Vaul are declared in `package.json`. `app/page.tsx` owns eight section states and fixed 260/72 px sidebar offsets. `app/globals.css` is the authoritative dark token source; `styles/globals.css` is a duplicate template stylesheet not imported by `app/layout.tsx`.

Direct static reuse is prohibited: TSX/React state, Next aliases/layout, Radix portals, CVA wrappers, React hooks, Recharts, Sonner/Vaul and the mocked sales datasets must be recreated or adapted in the existing static ORDOSPACE architecture. `next.config.mjs` contains `typescript.ignoreBuildErrors: true`; this is a source-quality risk and will not be copied.

## File classification

- Asset: 9
- Chart source: 3
- Composite component source: 3
- Design token source: 1
- Duplicate/generated: 1
- Framework/build-only: 11
- Irrelevant to migration: 1
- Layout source: 3
- Page-only source: 8
- Primitive source: 44
- State/interaction source: 12

Machine evidence: `salesops-zip-manifest.json`, `salesops-file-hashes.json`, and `salesops-file-classification.json` in `artifacts/redo/r02/`.

## Supplied screenshots

All eight supplied PNGs were present and visually inspected. Their filenames, sizes and SHA-256 hashes are recorded in `artifacts/redo/r02/salesops-reference-screenshots.json`; the source screenshots themselves are not duplicated into the repository. They correspond to Overview, Pipeline, Deals, Customers, Team, Forecasting, Reports and Settings and agree with the live navigation set.
