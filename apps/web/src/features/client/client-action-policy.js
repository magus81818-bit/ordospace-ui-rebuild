import { MODULE_STATUS } from "../../domain/module-card.model.mjs";
import { canClientDecideModuleCard } from "../../cards/module-card-actions.mjs";

export function getAvailableClientActions(card, { userId } = {}) {
  const canDecide = canClientDecideModuleCard(card, userId);
  const guidance = {
    [MODULE_STATUS.CLIENT_REVIEW]: "전달된 결과를 확인한 뒤 승인하거나 구체적인 수정 사유를 남겨주세요.",
    [MODULE_STATUS.APPROVED]: "승인이 완료된 결과입니다. 현재 상태에서는 추가 결정이 필요하지 않습니다.",
    [MODULE_STATUS.REVISION_REQUESTED]: "수정 요청이 전달되었습니다. 요청 사유와 현재 진행 상태를 확인할 수 있습니다.",
  }[card?.status] ?? "현재 결과는 읽기 전용입니다. 진행 상태를 확인할 수 있습니다.";

  return {
    canApprove: canDecide,
    canRequestRevision: canDecide,
    primaryAction: canDecide ? "approve" : "open_detail",
    readonly: !canDecide,
    guidance,
  };
}
