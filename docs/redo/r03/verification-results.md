# Verification results

## Round 3 gates

| Gate | Result |
|---|---|
| Token/static validator | Pass — 219 tokens, 40 used, 179 reserved |
| Playwright | Pass — 4/4 |
| Public regression | Pass — 18/18 |
| Desktop layout parity | Pass — 12/12, maximum box delta 0px |
| Responsive role homes | Pass — 6/6 |
| Browser functions | Pass — 7/7 |
| Console / page / request / HTTP errors | Pass — 0 / 0 / 0 / 0 |
| Accessibility evidence | Pass |
| Screenshot set | 38 files |

## Repository regression

- Root install: pass, 0 vulnerabilities.
- Root build, JavaScript check, static component validation, lifecycle validation and smoke: pass.
- Smoke covered 12 routes and 20/20 runtime QA checks.
- Round 1 regression: 4/4 in a clean isolated worktree at the Round 3 product commit.
- Round 2 regression: inventory 73/73, migration 73/73, states 55, unresolved 0 and product parity true in a fresh clean isolated worktree.
- Backend: Prisma generation, 8 suites/36 tests, type check and build pass.

## Disclosed warnings

- Root build retains the existing Browserslist data-age notice.
- Backend dependency audit retains three pre-existing moderate vulnerabilities.
- No check was failed, skipped or blocked.

Command-level details are in `artifacts/redo/r03/test-results.json`; consolidated machine checks are in `artifacts/redo/r03/verification-summary.json`.
