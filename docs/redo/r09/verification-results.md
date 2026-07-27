# Verification results

Final command results are recorded in `artifacts/redo/r09/test-results.json`; the independent integration gate is `verification-summary.json`.

- Round 1~8 regression: PASS (4, Matrix validator, 4, 9, 4, 5, 3, 3 tests)
- Round 9 browser: 5/5 PASS
- Full inventory: 73/73 unique and every item internally PASS
- Full state: 73 merged items; 549 implemented, 675 N/A, zero invalid/fabricated/missing
- Public Round 1 baseline: 18/18 measured cases, zero differences
- Authenticated responsive/role isolation: 60/60
- UI-072: 4/4; UI Lab: 3/3
- Root build, syntax, static component/lifecycle, Smoke 12 routes with runtime QA 20/20, and MVP: PASS
- Backend: 4/4 suites, 18/18 tests, type, and build PASS after Prisma client generation
- Production deployment: SKIPPED by Round 9 contract

The initial backend type failure caused by the absent generated Prisma client and the final transient external-font classification failure are disclosed as resolved harness/environment issues. No product defect or product correction was found.
