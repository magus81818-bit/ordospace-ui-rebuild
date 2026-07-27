# Round 8 correction report

## Existing verification defect

The initial audit mixed real browser steps with several declared `true` fields. The correction removes the permissive boolean-only validator, requires every UI-040/041/042 schema key, enforces exact numeric call counts, rejects generic state assertion paths, counts hardcoded interaction PASS rows, and fails on declared-only fixture restoration.

## UI-040 QC

- Initial DOM: 3 items, original Korean labels, `workerQc` names, value/index `0..2`, values `[true,false,false]`, named/described fieldset, disabled review button, zero lifecycle calls.
- Keyboard: the second input receives Space and produces exactly one `updateQc(mc-005, 1, true)` call.
- Label: an independent initial state clicks the third associated label and produces exactly one index-2 call while the other inputs remain unchanged.
- Blocked: a native disabled fixture rejects click and Space and produces zero lifecycle calls with text status.
- Blocker: initial and partial QC keep review disabled; complete QC enables it; unchecking disables it again. Status, API calls, and normalized localStorage stay unchanged.
- Restore: original QC/service/fetch state is restored and measured by deep equality.

## UI-041 Work Log

Empty hours, zero hours, and empty text are independent scenarios. Each measures focus, error association, feedback, and zero calls. The valid scenario uses a pending Promise spy, records one call with `mc-005`, `worker-001`, and the composed payload, and measures disabled, `aria-busy`, `추가 중`, click/Enter/Space duplicate blocking, success feedback, busy clearing, API zero, and deep-equality restoration.

The product handler remains compatible with the existing synchronous service and now also awaits Promise-like results. Service name, arguments, storage, API, and lifecycle meaning are unchanged.

## UI-042 Submit

The spy is installed before disabled interactions. Native click, Enter, and Space each leave lifecycle calls at zero. QC is completed through the real checkbox handler and renderer calculation; the review button then exposes the original accessible name and complete reason. Keyboard activation makes exactly one pending call with the correct card, worker, and review target. The pending UI is disabled, busy, and labeled `제출 중`; duplicate click/Enter/Space leave the call count at one. Resolution clears busy. API calls, normalized localStorage, and card status are unchanged, and restoration is deep-equal.

## Fixture isolation and product diff

Worker Home, QC, Work Log, and Submit fixtures contain before and after snapshots. `restore` is computed from deep equality; service and fetch references are measured after restoration. `worker-product-diff-audit.json` verifies unchanged data arrays, Korean product data, routes, lifecycle service, service arguments, storage key, API path, filter values, QC items, work-log fields, CTA label, and zero direct status assignment. Added class, ARIA, and semantic-attribute counts are recorded.

## Regression and evidence

The correction suite regenerates Worker state evidence plus 16 Admin/Client/Profile cases and 18 public cases. It measures console errors, page errors, failed requests, HTTP failures, Shell geometry, 360px overflow, and 12 independent accessibility scenarios.

The complete Round 1–8 regression exposed two stale legacy-harness assumptions rather than product defects. Round 3/4 now disable the Round 8 Worker stylesheet during their token/primitive isolation comparisons, and Round 6 permits Worker product changes only on approved Round 8+ descendants. All legacy gates then passed in a clean regression worktree.

## Remaining risk

Dependency audit findings remain report-only. No force fix or dependency downgrade is performed.

## Decision

READY FOR ROUND 8 REVIEW
