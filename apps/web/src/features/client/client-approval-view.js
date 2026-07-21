import { MODULE_STATUS } from "../../domain/module-card.model.mjs";
import { createModuleCardViewModel } from "../module-cards/module-card-view-model.js";
import { getAvailableClientActions } from "./client-action-policy.js";

const CATEGORY_BY_STATUS = Object.freeze({
  [MODULE_STATUS.CLIENT_REVIEW]: ["awaiting_decision", "검토 필요", 0],
  [MODULE_STATUS.REVISION_REQUESTED]: ["revision_requested", "수정 요청됨", 1],
  [MODULE_STATUS.APPROVED]: ["approved", "승인 완료", 2],
});

export function getClientApprovalCategory(card) {
  const [id, label, rank] = CATEGORY_BY_STATUS[card?.status] ?? ["in_delivery", "진행 중", 3];
  return { id, label, rank };
}

export function getClientDecisionPriority(card) {
  return getClientApprovalCategory(card).rank;
}

export function getClientReviewQueue(cards) {
  return cards
    .filter((card) => card.status === MODULE_STATUS.CLIENT_REVIEW)
    .map((card) => ({ card, category: getClientApprovalCategory(card) }))
    .sort((first, second) => first.category.rank - second.category.rank || first.card.id.localeCompare(second.card.id));
}

export function getClientApprovalMetrics(cards) {
  const count = (status) => cards.filter((card) => card.status === status).length;
  return {
    total: cards.length,
    awaitingDecision: count(MODULE_STATUS.CLIENT_REVIEW),
    approved: count(MODULE_STATUS.APPROVED),
    revisionRequested: count(MODULE_STATUS.REVISION_REQUESTED),
  };
}

export function getClientCardView(card, context) {
  return {
    ...createModuleCardViewModel(card, { ...context, role: "client" }),
    approvalCategory: getClientApprovalCategory(card),
    availableActions: getAvailableClientActions(card, context),
  };
}
