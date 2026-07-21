# Worker current flow audit

- Routes remain `/workspace/worker` and `/workspace/worker/cards/:cardId` behind `RequireRole role="worker"`.
- `getCardsForRole` exposes only cards whose `assigneeId` equals the signed-in Worker ID.
- `updateWorkerModuleCard` calls `buildWorkerModuleCardUpdate`; editable statuses are `assigned`, `in_progress`, `qc_ready`, and `revision_requested` for the assigned Worker.
- Existing update fields are progress 0 to 100, nonnegative logged hours, an actual QC enum value, and an optional team note up to 240 characters. A no-change submit is rejected.
- `submitWorkerModuleCard` calls `buildWorkerAdminReviewSubmission`. Submission requires assigned ownership, `qc_ready`, progress at least 100, and QC `passed`; the result is `admin_review` with activity and optional team comment.
- Revision rework uses the same update handler. The first meaningful update can move `revision_requested` to `in_progress`; no new rework state is added.
- Before Round 8, Root and Detail were generic surfaces with update and submission panels separated from task context.

Deferred: file upload, evidence, versions, timer/time tracking, dependencies, backend APIs, analytics, and Vercel.
