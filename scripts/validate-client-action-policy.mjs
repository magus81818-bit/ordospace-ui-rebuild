import { mvpSeed } from "../apps/web/src/data/mvp-seed.mjs";
import { MODULE_STATUS } from "../apps/web/src/domain/module-card.model.mjs";
import { getAvailableClientActions } from "../apps/web/src/features/client/client-action-policy.js";
const failures = [];
const clientId = "user-client-01";
for (const status of Object.values(MODULE_STATUS)) {
  const card = { ...mvpSeed.moduleCards[0], clientId, status };
  const policy = getAvailableClientActions(card, { userId: clientId });
  const shouldDecide = status === MODULE_STATUS.CLIENT_REVIEW;
  if (policy.canApprove !== shouldDecide || policy.canRequestRevision !== shouldDecide) failures.push(`decision policy mismatch: ${status}`);
  if (!policy.guidance) failures.push(`guidance missing: ${status}`);
}
const unknown = getAvailableClientActions({ ...mvpSeed.moduleCards[0], status: "unknown" }, { userId: clientId });
if (unknown.canApprove || unknown.canRequestRevision || !unknown.readonly) failures.push("unknown status exposes decision action");
if (failures.length) throw new Error(`Client action policy validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Client action policy validation passed: ${Object.values(MODULE_STATUS).length} statuses and fallback.`);
