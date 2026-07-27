# Verification results

Final command results are recorded in `artifacts/redo/r09/test-results.json`; integrated gate results are recorded in `verification-summary.json`.

- Round 1~8 regression: PASS
- Round 9 browser: 4/4 PASS
- Full inventory: 73/73 unique, PASS
- Public: 18 cases, PASS
- Authenticated responsive and role isolation: 60 cases, PASS
- UI-072: 3 cases, PASS
- Root build, syntax, static, Smoke, and MVP: PASS
- Backend: 8/8 suites, 36/36 tests, type, and build PASS
- Production deployment: SKIPPED by Round 9 contract

Intermediate harness/branch-name/adapter failures are preserved in the command ledger and marked resolved. Dependency audit and frozen external-font warnings remain disclosed.
