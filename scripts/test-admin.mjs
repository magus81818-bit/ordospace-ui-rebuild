import { mvpSeed } from "../apps/web/src/data/mvp-seed.mjs";
import { MODULE_STATUS } from "../apps/web/src/domain/module-card.model.mjs";
import { getAdminOverviewMetrics, getAdminOperationView, getAdminReviewQueue } from "../apps/web/src/features/admin/admin-operation-view.js";
import { getAvailableAdminActions } from "../apps/web/src/features/admin/admin-action-policy.js";
const cards = mvpSeed.moduleCards;
const before = JSON.stringify(cards);
const queue = getAdminReviewQueue(cards);
const metrics = getAdminOverviewMetrics(cards);
const checks = [];
function check(name, condition) { if (!condition) throw new Error(`Admin test failed: ${name}`); checks.push(name); }
check("review queue contains admin review first", queue[0]?.card.status === MODULE_STATUS.ADMIN_REVIEW);
check("review queue excludes client review", !queue.some(({ card }) => card.status === MODULE_STATUS.CLIENT_REVIEW));
check("metrics preserve total", metrics.total === cards.length);
check("metrics count admin review", metrics.adminReview === cards.filter((card) => card.status === MODULE_STATUS.ADMIN_REVIEW).length);
check("admin review is reviewable", getAdminOperationView(cards.find((card) => card.status === MODULE_STATUS.ADMIN_REVIEW)).reviewable);
check("approved only has detail action", getAvailableAdminActions(cards.find((card) => card.status === MODULE_STATUS.APPROVED)).length === 1);
check("source cards are not mutated", JSON.stringify(cards) === before);
console.log(`Admin tests passed: ${checks.length} assertions.`);
