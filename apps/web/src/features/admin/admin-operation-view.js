import { MODULE_STATUS } from "../../domain/module-card.model.mjs";
import { canAdminSendToClientReview } from "../../cards/module-card-actions.mjs";

const CATEGORY = Object.freeze({
  [MODULE_STATUS.DRAFT]: ["needs_assignment", "할당 필요", 5],
  [MODULE_STATUS.ASSIGNED]: ["in_delivery", "작업 대기", 6],
  [MODULE_STATUS.IN_PROGRESS]: ["in_delivery", "작업 진행", 4],
  [MODULE_STATUS.QC_READY]: ["quality_ready", "QC 완료", 3],
  [MODULE_STATUS.ADMIN_REVIEW]: ["awaiting_admin_review", "검토 필요", 0],
  [MODULE_STATUS.CLIENT_REVIEW]: ["awaiting_client_review", "클라이언트 검토 중", 5],
  [MODULE_STATUS.REVISION_REQUESTED]: ["revision_requested", "수정 대응", 1],
  [MODULE_STATUS.APPROVED]: ["completed", "완료", 7],
});

export function getAdminOperationView(card) {
  const [category, attentionLabel, priorityRank] = CATEGORY[card.status] ?? ["unknown", "상태 확인", 99];
  return {
    category,
    attentionLabel,
    priorityRank,
    reviewable: canAdminSendToClientReview(card),
  };
}
export function getAdminReviewQueue(cards) {
  const queueStatuses = new Set([
    MODULE_STATUS.ADMIN_REVIEW,
    MODULE_STATUS.REVISION_REQUESTED,
    MODULE_STATUS.QC_READY,
  ]);
  return cards
    .filter((card) => queueStatuses.has(card.status))
    .map((card) => ({ card, operation: getAdminOperationView(card) }))
    .sort((left, right) => left.operation.priorityRank - right.operation.priorityRank || left.card.id.localeCompare(right.card.id));
}

export function getAdminOverviewMetrics(cards) {
  const count = (status) => cards.filter((card) => card.status === status).length;
  return {
    total: cards.length,
    adminReview: count(MODULE_STATUS.ADMIN_REVIEW),
    clientReview: count(MODULE_STATUS.CLIENT_REVIEW),
    revision: count(MODULE_STATUS.REVISION_REQUESTED),
    approved: count(MODULE_STATUS.APPROVED),
  };
}
