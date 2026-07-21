# Round 7 Correction Report

The review found six guessed SalesOps IDs, a non-machine-readable state artifact, four screenshots standing in for many states, an always-true progress assertion, hardcoded accessibility summaries, incomplete Dialog focus testing, and shallow UI-032 testing.

Corrections:

1. UI-022/025/028/030/031/032 now map to SO-PROGRESS-001, SO-HEADER-001, SO-CARD-001, SO-CARD-001, SO-CARD-001, and SO-INPUT-001. All 12 rows are copied from and independently checked against Round 2.
2. State coverage contains only `implemented` and `not_applicable`; 75 implemented and 249 N/A entries, with zero deferred, missing, invalid, directory evidence, or missing evidence.
3. Fifteen required state screenshots were added across Dashboard, Project, Dialog, and Approvals.
4. UI-029 now has real accessible-name, focus entry/containment, Escape, close, return, backdrop, scroll-lock, and mobile assertions.
5. UI-032 now has real disabled/invalid association tests and exact-once approve/revision lifecycle spies with unchanged localStorage and zero API calls.
6. QA-only state fixtures are page-local, navigation-restored, and recorded in `qa-fixture-isolation.json`.
7. Prior-round and public/non-Client regression tests are rerun after the correction; results are recorded in the test matrix.

Remaining risk: confirm UI does not exist in the current renderer and is therefore explicitly N/A. No confirm workflow was added. There is still no deployment before Round 10 by project rule.
