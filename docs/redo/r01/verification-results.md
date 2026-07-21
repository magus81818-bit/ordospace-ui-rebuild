# Verification results

## Summary

Round 1 is ready for planner review. Product source parity is exact, application validations pass, browser coverage passes, and no deployment or protected-repository write occurred. The two known environmental findings are reported below rather than hidden.

| Check | Command / method | Result |
|---|---|---|
| Root install | `npm ci` | PASS; 94 packages audited, 0 vulnerabilities |
| Root build | `npm run build` | PASS; Tailwind and vendored Lucide regenerated successfully; generated product files restored to frozen blobs afterward |
| JavaScript syntax | `npm run check:js` | PASS |
| Component static validation | `npm run static:validate-components` | PASS; 35 namespace entries, 19 escaped factories, markers and no direct workspace mutation |
| Lifecycle static validation | `npm run static:validate-lifecycle` | PASS; 6 lifecycle contracts |
| Built-in smoke | `npm run smoke` | PASS; 12 routes, runtime QA 20/20, 0 exceptions/log errors |
| Playwright baseline audit | `npm --prefix tests/redo/r01 run audit` | PASS; 4/4 tests, including keyboard/accessibility semantics |
| Backend install | `npm ci` in `backend` | PASS; install reports 3 moderate dependency vulnerabilities |
| Backend unit tests | `npm test -- --runInBand` | PASS; 4 suites, 18 tests |
| Prisma client generation | `npx prisma generate` | PASS; generated ignored client |
| Backend type check | `npm run type` | PASS after required client generation |
| Backend build | `npm run build` | PASS after required client generation |
| Source parity | `node tests/redo/r01/source-parity.cjs …` | PASS; 191/191, zero differences |
| Protected source state | Git status/remote/HEAD | PASS; clean `main` at exact expected commit |
| Live reference | logged-in Chrome DOM/title inspection | PASS; current and Sprint5 19-screen apps, SalesOps live and official v0 reachable |

An initial backend type/build attempt before Prisma generation failed because `backend/src/generated/prisma/client.js` was absent; this is an ignored generated prerequisite. After the documented non-database `prisma generate`, both checks passed. An initial Playwright expectation incorrectly treated 1024 px as mobile; source CSS defines the mobile shell below 1024, so the test was corrected to assert the existing contract and then passed.

## Browser coverage

- public: 6 routes × desktop/tablet/mobile = 18 captures;
- public interaction: inquiry modal, forgot-password form, forgot-sent state = 3 captures;
- dashboard desktop: client 4, worker 3, admin 6 route captures = 13;
- responsive role homes: 3 roles × tablet/mobile = 6 captures;
- shared guards: forbidden 403 and explicitly enabled QA gallery = 2 captures;
- total committed screenshots: 42;
- exact menu-order comparisons: 3;
- cross-role denied-route checks: 6;
- page exceptions: 0; browser request failures: 0.
- accessibility: no duplicate IDs, unnamed visible buttons/links, or images missing `alt` on the landing baseline; keyboard focus advanced; authenticated main/nav semantics and visible button names passed.

At `1024×1366`, the existing app intentionally keeps sidebar/topbar and hides mobile header/tabs. At `390×844`, it hides sidebar/topbar and shows mobile header/tabs. All assertions passed.

## Honest runtime findings

The local generic static test server has no Vercel serverless `/api/module-cards` handler. Five GET responses returned 404 and Chrome emitted six related `Failed to load resource` console errors across the audit. The application correctly fell back to its local baseline data, all screens rendered, no page exception occurred, and the built-in file-based smoke passed. These 404s are preserved in `browser-audit.json`; they are not reported as clean console output.

The backend dependency install reports three moderate vulnerabilities. `npm audit fix` was not run because it would modify locked dependency versions outside Round 1 scope.

## Skipped by scope or safety

- database/server-persistence/lifecycle smoke commands that require credentials or write seed/lifecycle data;
- production deployment, Vercel alias, preview deployment, or deletion;
- authentication bypass, hidden credential extraction, or secret-dependent testing;
- visual changes or detailed SalesOps mapping, which belong to later planner rounds.

## Invariance

The immutable product commit is object-identical to the protected source. Therefore landing/public and every dashboard layout/function begin later rounds from a proven unchanged state. Public screenshot baselines are committed for pixel/visual comparison in every styling round.
