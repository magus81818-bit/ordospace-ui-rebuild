import { MODULE_STATUS } from "../../domain/module-card.model.mjs";
import { createModuleCardViewModel } from "../module-cards/module-card-view-model.js";
import { getAvailableWorkerActions } from "./worker-action-policy.js";

const CATEGORY_BY_STATUS = Object.freeze({
  [MODULE_STATUS.REVISION_REQUESTED]: ["revision_required", "수정 대응", 0],
  [MODULE_STATUS.QC_READY]: ["ready_for_review", "제출 준비", 1],
  [MODULE_STATUS.IN_PROGRESS]: ["in_progress", "작업 진행", 2],
  [MODULE_STATUS.ASSIGNED]: ["not_started", "작업 시작", 3],
  [MODULE_STATUS.ADMIN_REVIEW]: ["under_review", "Admin 검토 중", 4],
  [MODULE_STATUS.CLIENT_REVIEW]: ["client_review", "Client 검토 중", 5],
  [MODULE_STATUS.APPROVED]: ["completed", "승인 완료", 6],
});

export function getWorkerWorkCategory(card) {
  const [id, label, rank] = CATEGORY_BY_STATUS[card?.status] ?? ["readonly", "읽기 전용", 7];
  return { id, label, rank };
}

export function getWorkerWorkPriority(card) { return getWorkerWorkCategory(card).rank; }

export function getWorkerActiveQueue(cards, context) {
  return cards.map((card) => ({ card, policy: getAvailableWorkerActions(card, context), category: getWorkerWorkCategory(card) }))
    .filter(({ policy }) => policy.canEditProgress || policy.canSubmitForAdminReview)
    .sort((first, second) => first.category.rank - second.category.rank || first.card.id.localeCompare(second.card.id));
}

export function getWorkerRevisionQueue(cards) {
  return cards.filter((card) => card.status === MODULE_STATUS.REVISION_REQUESTED).map((card) => ({ card, category: getWorkerWorkCategory(card) }));
}

export function getWorkerMetrics(cards) {
  const count = (statuses) => cards.filter((card) => statuses.includes(card.status)).length;
  return {
    total: cards.length,
    active: count([MODULE_STATUS.ASSIGNED, MODULE_STATUS.IN_PROGRESS, MODULE_STATUS.QC_READY]),
    revision: count([MODULE_STATUS.REVISION_REQUESTED]),
    review: count([MODULE_STATUS.ADMIN_REVIEW, MODULE_STATUS.CLIENT_REVIEW]),
    completed: count([MODULE_STATUS.APPROVED]),
  };
}

export function getWorkerCardView(card, context) {
  return { ...createModuleCardViewModel(card, { ...context, role: "worker" }), workCategory: getWorkerWorkCategory(card), availableActions: getAvailableWorkerActions(card, context) };
}
