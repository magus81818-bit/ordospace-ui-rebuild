import { mvpSeed } from "../apps/web/src/data/mvp-seed.mjs";
import { getCardsForRole } from "../apps/web/src/domain/module-card.model.mjs";
import { FILTER_GROUPS, getFiltersForRole, getModuleCardMetrics } from "../apps/web/src/features/module-cards/module-card-metrics.js";
import { createModuleCardViewModels } from "../apps/web/src/features/module-cards/module-card-view-model.js";

const checks = [];
function check(name, condition) { if (!condition) throw new Error(`Dashboard test failed: ${name}`); checks.push(name); }
for (const [role, userId] of [["admin", "user-admin-01"], ["worker", "user-worker-ux"], ["client", "user-client-01"]]) {
  const cards = getCardsForRole(mvpSeed.moduleCards, role, userId);
  const metrics = getModuleCardMetrics(cards, role);
  const filters = getFiltersForRole(cards, role);
  const models = createModuleCardViewModels(cards, { role, users: mvpSeed.users });
  check(`${role} metrics preserve visible total`, metrics[0].value === cards.length);
  check(`${role} filters include all count`, filters[0].count === cards.length);
  check(`${role} view models preserve count`, models.length === cards.length);
  check(`${role} detail paths stay scoped`, models.every((model) => model.detailPath.startsWith(`/workspace/${role}/cards/`)));
  check(`${role} filter counts are exact`, filters.every((filter) => filter.count === cards.filter(FILTER_GROUPS[filter.value]).length));
}
console.log(`Dashboard tests passed: ${checks.length} assertions.`);
