# Round 7 Correction Report

## A. Work identity

- Repository: `ordospace-ui-rebuild`
- Branch: `redo/r07-client-dashboard`
- Round 6 base: `6c4413e68c5239672bc01a1fe18dd926f663506b`
- Initial Round 7 report head: `8835c0fa1cce01ffb80627b7f45ebfe9d99156d7`
- Correction implementation/evidence head: `4da69acc4eddc8298a83da4700e9fa9f20c16fd7`
- Remote push: successful; local and remote branch heads match

## B. Matrix mapping correction

Round 2 is now the only source of truth. The audit builds the Round 7 inventory directly from rows whose `implementationRound` is `Round 7`, and the independent validator compares all mapping fields. Corrected IDs are UI-022 `SO-PROGRESS-001`, UI-025 `SO-HEADER-001`, UI-028 `SO-CARD-001`, UI-030 `SO-CARD-001`, UI-031 `SO-CARD-001`, and UI-032 `SO-INPUT-001`. All 12 rows pass.

## C. State artifact correction

`client-state-coverage.json` contains 75 `implemented` and 249 `not_applicable` entries. Invalid, deferred, missing, missing-evidence, directory-evidence, and missing-browser-assertion counts are all zero. Implemented entries point to files and browser assertions; N/A entries include reasons.

## D. Additional state evidence

Fifteen required screenshots cover Dashboard zero/warning, empty, and long-mobile; Project asset empty/long, gate pass/fail, long timeline, and Dialog mobile/error/focus return; and Approvals empty/no-selection/long-mobile/disabled/validation. Each state is created in page-local QA context and verified by a browser assertion.

## E. UI-029 Dialog

The browser audit verifies the accessible name, initial focus, Tab and Shift+Tab containment, Escape close, hidden/`aria-hidden` state, focus return, backdrop close, body scroll lock/restore, error state, and mobile bounds/overflow. A minimal additive decorator supplies focus containment and return without changing Client data or lifecycle behavior.

## F. UI-032 decision controls

Disabled click and keyboard activation are blocked. Invalid input exposes an associated error. Approve and revision actions each call the lifecycle path exactly once. Spies record zero API calls and unchanged localStorage for QA fixture-only checks.

## G. Invalid-test correction

The always-true `count() >= 0` check and hardcoded accessibility booleans were removed. The validator scans the test source and reports `invalidAssertionsFound: 0` and `hardcodedAccessibilityPassCount: 0`. Thirteen accessibility checks now come from measured DOM assertions.

## H. QA fixture isolation

Fixtures are page-local, do not edit operational data, do not call APIs, leave localStorage unchanged, and restore normal navigation. `qa-fixture-isolation.json` records all checks as passing.

## I. Data and function parity

Routes, menus, Korean product text, KPI values, progress, project structure, ModuleCards, assets, approvals, lifecycle, role guards, session behavior, localStorage keys, and API boundaries are unchanged. No SalesOps sales vocabulary or sample sales data was copied.

## J. Regression

Admin and Worker non-Client routes, all 18 public comparisons, console errors, page errors, failed requests, and 360px overflow checks pass. Representative Admin and Worker tablet/mobile screenshots were added.

## K. Test results

- Root clean install, build, MVP check, JavaScript syntax, static component/lifecycle checks, and smoke: pass.
- Round 1: 4/4; Round 2: 73/73; Round 3: 4/4 and 219 tokens; Round 4: 9/9; Round 5: 4/4; Round 6: 5/5; Round 7: 3/3 plus independent validator: pass.
- Backend: 4 suites/18 tests, type, and build pass after generating Prisma Client.
- Root dependency audit: zero findings. Backend dependency audit: three moderate findings remain documented.

## L. Changed files

- Product: `app/ui/components/client.ui.js`
- Tests: `tests/redo/r07/client-audit.spec.cjs`, `tests/redo/r07/validate.cjs`
- Artifacts: Round 7 inventory, catalog, state coverage, interaction, accessibility, fixture isolation, regression, report, and verification JSON files
- Evidence: fifteen state screenshots plus Admin/Worker tablet/mobile and refreshed frozen-public screenshots
- Docs: Round 7 implementation documents, verification results, and this correction report

## M. Scope guard

Client operational data, Client product wording, lifecycle semantics, API/backend, Admin product behavior, Worker implementation, Round 8 implementation, Shell, public screens, `main`, Production, and deployment were not changed. The only product-code correction is additive Dialog focus behavior.

## N. Remaining risks

The current renderer has no confirm dialog, so confirm is explicitly N/A rather than fabricated. A clean backend install requires `prisma generate` before type/build. Three moderate backend dependency audit findings remain. No production database or production API mutation test was executed.

## O. Completion

READY FOR ROUND 7 REVIEW
