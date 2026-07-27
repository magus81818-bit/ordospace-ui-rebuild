# Verification results

## Source

- Command ledger: `artifacts/redo/r09/test-results.json`.
- Independent gate: `artifacts/redo/r09/verification-summary.json`.
- Browser outputs: `artifacts/redo/r09/`.

## Methodology

- Round 9 browser suites regenerate measured artifacts and screenshots.
- The generator consolidates inventory, state, parity, health, and diff results.
- The validator independently traverses item and state internals.
- Round 1 through Round 8 validators are rerun in a disposable worktree.
- Root build, syntax, static, smoke, and MVP checks are rerun.
- Backend tests, type checking, and build are rerun after Prisma client generation.

## Pass criteria

- Every commanded test must exit successfully.
- Full inventory must pass 73 of 73 item checks.
- Full state must have zero real-assertion gaps.
- Public and authenticated browser cases must pass.
- Root and backend quality gates must pass.
- Skipped Production deployment must be disclosed.

## Measured result

- Round 9 browser suites: 6 of 6 passed.
- Full inventory: 73 of 73 passed.
- Implemented state rows: 528.
- Source-state rows: 488; new exact assertions: 40.
- Missing real assertions: 0.
- Public baseline: 18 of 18 passed.
- Authenticated responsive and isolation cases: 60 of 60 each.
- UI-072: 4 of 4; UI Lab: 3 of 3.
- Production deployment: SKIPPED by contract.

## Risks and limitations

- Round 1 through Round 8 outputs were generated in a disposable verification branch and were not merged into the result branch.
- Existing external-font availability is separated from new failures.
- No production claim is made before Round 10.

## Decision

- The evidence set is suitable for the independent correction gate.
