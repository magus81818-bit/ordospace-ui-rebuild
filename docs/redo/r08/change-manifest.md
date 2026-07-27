# Change manifest

## Product additions

- `app/styles/dashboard-salesops.worker.css`
- `app/ui/components/worker.ui.js`

## Product modifications

- `app/screens/worker-workspace.screen.js`: consumes Worker factories; inline log form; Promise-compatible lifecycle busy/success/failure handling; lifecycle-guarded submit busy state
- `index.html`: registers Worker stylesheet and script
- `package.json`: restored to the protected pre-Round-8 validation contract

## Verification and evidence

- `tests/redo/r08/`
- `artifacts/redo/r08/`
- `evidence/redo/r08/`
- `docs/redo/r08/`
- `references/prompts/round-8.md` (committed separately at Round 8 start)
- `references/prompts/round-8-correction-01.md`
- `artifacts/redo/r08/worker-product-diff-audit.json`
- `docs/redo/r08/correction-report.md`
- `tests/redo/r03/dashboard-token-audit.spec.cjs`: isolates the Round 8 Worker stylesheet in the legacy token-only comparison
- `tests/redo/r04/dashboard-token-audit.spec.cjs`: isolates the Round 8 Worker stylesheet in the primitive comparison
- `tests/redo/r06/validate.cjs`: recognizes Round 8+ as an approved Worker descendant while retaining backend/API/Shell prohibitions

The correction replaces declared interaction booleans with measured values, strengthens required-key validation, records deep-equality fixture restoration, and regenerates Worker/non-Worker/public screenshots from the correction HEAD.

No product deletion, shared Shell change, Admin/Client/Profile/public implementation, backend change, main change, or deployment is included.
