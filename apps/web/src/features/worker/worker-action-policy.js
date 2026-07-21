import { canWorkerSubmitForAdminReview, canWorkerUpdateCard } from "../../cards/module-card-actions.mjs";
import { MODULE_STATUS } from "../../domain/module-card.model.mjs";

export function getAvailableWorkerActions(card, { userId } = {}) {
  const canEdit = canWorkerUpdateCard(card, userId);
  const canSubmit = canWorkerSubmitForAdminReview(card, userId);
  const guidance = {
    [MODULE_STATUS.ASSIGNED]: "배정된 작업입니다. 진행률, 시간, QC와 작업 노트를 저장해 시작하세요.",
    [MODULE_STATUS.IN_PROGRESS]: "작업 내용을 저장하고, 100% 진행과 QC 통과 후 검토를 요청할 수 있습니다.",
    [MODULE_STATUS.QC_READY]: "제출 조건이 충족된 작업입니다. Admin 검토로 전달할 수 있습니다.",
    [MODULE_STATUS.REVISION_REQUESTED]: "수정 요청 사유를 확인하고 작업 내용을 업데이트하세요.",
    [MODULE_STATUS.ADMIN_REVIEW]: "Admin 검토 중입니다. 현재 작업 정보는 읽기 전용입니다.",
    [MODULE_STATUS.CLIENT_REVIEW]: "클라이언트 검토 중입니다. 현재 작업 정보는 읽기 전용입니다.",
    [MODULE_STATUS.APPROVED]: "승인이 완료된 작업입니다. 최종 결과를 확인할 수 있습니다.",
  }[card?.status] ?? "현재 작업은 Worker가 편집할 수 없는 상태입니다.";
  const disabledReason = canSubmit
    ? null
    : card?.status === MODULE_STATUS.QC_READY
      ? "진행률 100%, QC 통과, 본인 배정 조건을 모두 확인하세요."
      : "저장된 진행률이 100%이고 QC가 통과된 QC ready 상태에서 제출할 수 있습니다.";

  return {
    canEditProgress: canEdit,
    canEditQc: canEdit,
    canEditNote: canEdit,
    canSubmitForAdminReview: canSubmit,
    primaryAction: canSubmit ? "submit" : canEdit ? "continue_work" : "open_detail",
    readonly: !canEdit && !canSubmit,
    guidance,
    disabledReason,
  };
}
