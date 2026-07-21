import { MODULE_STATUS } from "../../domain/module-card.model.mjs";
import { canAdminSendToClientReview } from "../../cards/module-card-actions.mjs";

export function getAvailableAdminActions(card) {
  const actions = [{ id: "open_detail", label: "상세 보기", primary: !canAdminSendToClientReview(card) }];
  if (canAdminSendToClientReview(card)) {
    actions.push({ id: "send_to_client", label: "클라이언트 검토로 전달", primary: true });
  }
  return actions;
}

export function getAdminStateGuidance(card) {
  switch (card.status) {
    case MODULE_STATUS.ADMIN_REVIEW:
      return { tone: "pend", title: "관리자 검토가 필요합니다", description: "작업 내용과 QC 상태를 확인한 뒤 클라이언트 검토로 전달할 수 있습니다." };
    case MODULE_STATUS.CLIENT_REVIEW:
      return { tone: "pend", title: "클라이언트 검토 중입니다", description: "이미 전달된 항목으로, 현재 관리자 전달 작업은 제한됩니다." };
    case MODULE_STATUS.REVISION_REQUESTED:
      return { tone: "crit", title: "수정 요청 대응 상태입니다", description: "기존 코멘트와 활동 기록에서 실제 수정 요청 내용을 확인하세요." };
    case MODULE_STATUS.APPROVED:
      return { tone: "ok", title: "승인 완료된 항목입니다", description: "현재 상태에서는 관리자 검토 작업 없이 읽기 전용으로 확인합니다." };
    default:
      return { tone: "rej", title: "작업 진행 상태입니다", description: "현재 상태에서 허용되는 관리자 업무만 표시됩니다." };
  }
}
