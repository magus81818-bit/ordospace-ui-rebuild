# Round 2 verification results

## Result

`PASS` — all required non-destructive checks completed, the 73-row mapping validator reports no missing/duplicate/additional/unresolved items, and the 191-file product baseline remains unchanged.

| Check | Command / context | Exit | Result |
|---|---|---:|---|
| Root dependencies | `npm ci` | 0 | PASS; 94 packages, 0 vulnerabilities |
| Root build | `npm run build` | 0 | PASS; generated CSS/Lucide outputs restored to frozen blobs after verification |
| JS syntax | `npm run check:js` | 0 | PASS |
| Component validation | `npm run static:validate-components` | 0 | PASS; 35 entries, 19 factory escaping checks |
| Lifecycle validation | `npm run static:validate-lifecycle` | 0 | PASS; 6 transition contracts |
| Built-in smoke | `npm run smoke` | 0 | PASS; 12 routes and runtime QA 20/20 |
| Round 1 audit | `npm ci && npm run audit` in detached temporary `f10779e` worktree | 0 | PASS; 4/4. Temporary worktree removed after run; Round 1 images in this branch were not overwritten |
| Round 2 test dependencies | `npm install` in `tests/redo/r02` | 0 | PASS; 4 packages, 0 vulnerabilities |
| ZIP/matrix generation | `npm run generate` | 0 | PASS; ZIP 96, catalog 55, matrix 73, product parity true |
| SalesOps live audit | `npm run audit:salesops` | 0 | PASS; 24 section/viewports, 8 states, official v0, 33 screenshots |
| ORDOSPACE fresh parity capture | `npm run audit:ordospace` | 0 | PASS; 9 screenshots, 0 page errors |
| Round 2 validator | `npm run validate` | 0 | PASS; 73/73 unique, JSON/CSV/Markdown aligned, unresolved 0 |
| Backend dependencies | `npm ci` in `backend` | 0 | PASS with 3 moderate dependency vulnerabilities |
| Prisma generation | `npx prisma generate` | 0 | PASS; ignored generated client |
| Backend unit tests | `npm test -- --runInBand` | 0 | PASS; 8 suites / 36 tests (source and previously built ignored output both discovered) |
| Backend type check | `npm run type` | 0 | PASS |
| Backend build | `npm run build` | 0 | PASS |

## Browser evidence

- SalesOps: eight menu items in exact order, eight sections at `1440×1000`, `1024×1366`, and `390×844`; 24 default captures.
- State evidence: 260→72 px sidebar collapse, search focus, metric hover, selected settings tab, loading+disabled save action, selected deal filter, empty deal result, open select overlay.
- Official v0: public template title/URL and full-page evidence captured.
- SalesOps runtime: console errors 0, page errors 0, failed requests 0, HTTP 4xx/5xx 0.
- Measured geometry: expanded sidebar 260 px, collapsed 72 px, header 64 px, metric padding 20 px, radius 12 px.
- Responsive risk: SalesOps keeps its fixed 260 px sidebar at 390 px and produces horizontal overflow; ORDOSPACE mobile navigation must remain authoritative.

## ORDOSPACE visual parity

Nine Round 2 captures were compared with their Round 1 equivalents. Auth D/T/M and client dashboard/project/approvals are byte-identical (6/9). Landing D/T/M differ because the page's autoplay/reduced-motion-sensitive demo frames were sampled at different states; side-by-side review confirms the same structure/styles and Git object parity is exact. This instability remains a tolerance-controlled regression area, not a hidden pass.

## Warnings and skipped writes

- Root build prints an outdated Browserslist/caniuse-lite advisory; no dependency update was made.
- Backend dependencies report three moderate vulnerabilities; no lock-changing audit fix was run.
- Production database/API mutation, seed, server-persistence lifecycle writes, Vercel deployment/alias changes, and authentication bypass were skipped by the safety/scope contract.
- ZIP source has `typescript.ignoreBuildErrors: true` and header title typing gaps; neither was copied or used to suppress errors.
