import { InlineNotice } from "@ordospace/ui-catalog";
import { ModuleCardDashboard } from "../../components/dashboard/index.js";
import { ClientDecisionQueue } from "./ClientDecisionQueue.jsx";
import { getClientApprovalMetrics } from "./client-approval-view.js";

export function ClientApprovalPage({ cards, users }) {
  const summary = getClientApprovalMetrics(cards);
  const metrics = [
    { id: "review", label: "검토 대기", value: summary.awaitingDecision, helper: "지금 결정할 결과" },
    { id: "approved", label: "승인 완료", value: summary.approved, helper: "결정이 완료된 결과" },
    { id: "revision", label: "수정 요청", value: summary.revisionRequested, helper: "변경을 요청한 결과" },
    { id: "total", label: "전체 결과", value: summary.total, helper: "현재 프로젝트 범위" },
  ];
  return (
    <div className="client-approval-page">
      <ModuleCardDashboard
        beforeList={<><ClientDecisionQueue cards={cards} /><InlineNotice title="승인 판단 안내" tone="pend">상세 화면에서 결과를 검토한 뒤 승인하거나, 수정이 필요한 이유를 구체적으로 작성할 수 있습니다.</InlineNotice></>}
        cards={cards}
        metricsOverride={metrics}
        role="client"
        users={users}
      />
    </div>
  );
}
