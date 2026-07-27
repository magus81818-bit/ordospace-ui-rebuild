# Round 10 verification results

## Source

- `artifacts/redo/r10/test-results.json`
- `artifacts/redo/r10/verification-summary.json`
- Browser artifacts and screenshots under the Round 10 roots.

## Methodology

- Dependencies were freshly installed in a disposable worktree.
- Round 1 through Round 9, root, MVP, and backend commands were executed.
- Predeploy browser results came from the fresh Round 9 full suite.
- Independent premerge validation recomputed every release gate.

## Pass criteria

- All final commands exit zero.
- Public 18, authenticated 60, isolation 60, UI-072 4, and UI Lab 3 pass.
- New browser failures and overflows are zero.
- Inventory and state counts exactly match approval.
- Product and source repository diffs are zero.

## Measured result

- Round 1~9: PASS.
- Root build/static/smoke/MVP: PASS.
- Backend 4/4 suites, 18/18 tests, type, and build: PASS.
- Predeploy browser and health: PASS.
- Premerge independent gate: PASS.

## Risks and limitations

- Dependency advisories are recorded without mutation.
- Main, postmerge, and Production results are appended in their gated phases.
- No Production success is claimed from local verification.

## Evidence

- `evidence/redo/r10/predeploy/`
