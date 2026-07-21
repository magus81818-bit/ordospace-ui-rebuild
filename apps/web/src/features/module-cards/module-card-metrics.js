import { MODULE_STATUS } from "../../domain/module-card.model.mjs";

const ACTIVE = new Set([
  MODULE_STATUS.DRAFT,
  MODULE_STATUS.ASSIGNED,
  MODULE_STATUS.IN_PROGRESS,
  MODULE_STATUS.QC_READY,
]);
const REVIEW = new Set([MODULE_STATUS.ADMIN_REVIEW, MODULE_STATUS.CLIENT_REVIEW]);

export function getModuleCardMetrics(cards, role) {
  const count = (predicate) => cards.filter(predicate).length;
  const shared = {
    total: cards.length,
    active: count((card) => ACTIVE.has(card.status)),
    review: count((card) => REVIEW.has(card.status)),
    approved: count((card) => card.status === MODULE_STATUS.APPROVED),
    revision: count((card) => card.status === MODULE_STATUS.REVISION_REQUESTED),
  };

  if (role === "worker") {
    return [
      { id: "total", label: "내 모듈카드", value: shared.total, helper: "현재 계정에 배정된 작업" },
      { id: "active", label: "진행 중", value: shared.active, helper: "작업 또는 QC 단계" },
      { id: "review", label: "검토 대기", value: shared.review, helper: "제출 이후 검토 단계" },
      { id: "revision", label: "수정 요청", value: shared.revision, helper: "재작업이 필요한 항목" },
    ];
  }

  if (role === "client") {
    return [
      { id: "total", label: "전체 검토 범위", value: shared.total, helper: "현재 프로젝트 모듈카드" },
      { id: "review", label: "검토 가능", value: count((card) => card.status === MODULE_STATUS.CLIENT_REVIEW), helper: "결정 가능한 항목" },
      { id: "approved", label: "승인 완료", value: shared.approved, helper: "최종 승인된 결과물" },
      { id: "revision", label: "수정 요청", value: shared.revision, helper: "변경을 요청한 항목" },
    ];
  }

  return [
    { id: "total", label: "전체 모듈카드", value: shared.total, helper: "운영 범위 전체" },
    { id: "active", label: "진행 중", value: shared.active, helper: "배정부터 QC 단계" },
    { id: "review", label: "검토 대기", value: shared.review, helper: "관리자 또는 클라이언트 검토" },
    { id: "approved", label: "승인 완료", value: shared.approved, helper: "완료된 항목" },
  ];
}

export const FILTER_GROUPS = Object.freeze({
  all: () => true,
  active: (card) => ACTIVE.has(card.status),
  review: (card) => REVIEW.has(card.status),
  approved: (card) => card.status === MODULE_STATUS.APPROVED,
  revision: (card) => card.status === MODULE_STATUS.REVISION_REQUESTED,
});

export function getFiltersForRole(cards, role) {
  const ids = role === "worker"
    ? ["all", "active", "review", "revision"]
    : role === "client"
      ? ["all", "review", "approved", "revision"]
      : ["all", "active", "review", "approved", "revision"];
  const labels = { all: "전체", active: "진행 중", review: "검토 대기", approved: "승인 완료", revision: "수정 요청" };
  return ids.map((value) => ({ value, label: labels[value], count: cards.filter(FILTER_GROUPS[value]).length }));
}

