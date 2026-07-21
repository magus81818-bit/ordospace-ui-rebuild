import { mvpSeed } from "../apps/web/src/data/mvp-seed.mjs";
import { MODULE_STATUS } from "../apps/web/src/domain/module-card.model.mjs";
import { getAvailableAdminActions, getAdminStateGuidance } from "../apps/web/src/features/admin/admin-action-policy.js";
const failures = [];
for (const status of Object.values(MODULE_STATUS)) {
  const card = { ...mvpSeed.moduleCards[0], status };
  const actions = getAvailableAdminActions(card);
  const send = actions.some((action) => action.id === "send_to_client");
  if (send !== (status === MODULE_STATUS.ADMIN_REVIEW)) failures.push(`send policy mismatch: ${status}`);
  if (!actions.some((action) => action.id === "open_detail")) failures.push(`detail action missing: ${status}`);
  if (!getAdminStateGuidance(card).title) failures.push(`guidance missing: ${status}`);
}
const unknown = getAvailableAdminActions({ ...mvpSeed.moduleCards[0], status: "unknown" });
if (unknown.some((action) => action.id === "send_to_client")) failures.push("unknown status exposes send action");
if (failures.length) throw new Error(`Admin action policy validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Admin action policy validation passed: ${Object.values(MODULE_STATUS).length} statuses and fallback.`);
