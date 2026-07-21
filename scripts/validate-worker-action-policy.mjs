import { mvpSeed } from "../apps/web/src/data/mvp-seed.mjs";
import { MODULE_STATUS, QC_STATUS } from "../apps/web/src/domain/module-card.model.mjs";
import { getAvailableWorkerActions } from "../apps/web/src/features/worker/worker-action-policy.js";
const failures = [];
const workerId = "user-worker-dev";
for (const status of Object.values(MODULE_STATUS)) {
  const card = { ...mvpSeed.moduleCards[4], assigneeId: workerId, status };
  const policy = getAvailableWorkerActions(card, { userId: workerId });
  const shouldEdit = [MODULE_STATUS.ASSIGNED, MODULE_STATUS.IN_PROGRESS, MODULE_STATUS.QC_READY, MODULE_STATUS.REVISION_REQUESTED].includes(status);
  if (policy.canEditProgress !== shouldEdit) failures.push(`edit policy mismatch: ${status}`);
  if (!policy.guidance) failures.push(`guidance missing: ${status}`);
}
const ready = { ...mvpSeed.moduleCards[4], assigneeId: workerId, status: MODULE_STATUS.QC_READY, progress: 100, qcStatus: QC_STATUS.PASSED };
if (!getAvailableWorkerActions(ready, { userId: workerId }).canSubmitForAdminReview) failures.push("submit-ready card cannot submit");
const unknown = getAvailableWorkerActions({ ...ready, status: "unknown" }, { userId: workerId });
if (!unknown.readonly || unknown.canSubmitForAdminReview) failures.push("unknown status exposes Worker action");
if (failures.length) throw new Error(`Worker action policy validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Worker action policy validation passed: ${Object.values(MODULE_STATUS).length} statuses and fallback.`);
