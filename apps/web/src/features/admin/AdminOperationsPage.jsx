import { ModuleCardDashboard } from "../../components/dashboard/index.js";
import { AdminReviewQueue } from "./AdminReviewQueue.jsx";
import { getAdminOverviewMetrics } from "./admin-operation-view.js";

export function AdminOperationsPage({ cards, createPanel, users }) {
  const summary = getAdminOverviewMetrics(cards);
  const metrics = [
    { id: "adminReview", label: "관리자 검토", value: summary.adminReview, helper: "지금 검토할 항목" },
    { id: "clientReview", label: "클라이언트 검토", value: summary.clientReview, helper: "전달 후 응답 대기" },
    { id: "revision", label: "수정 요청", value: summary.revision, helper: "재작업 대응 필요" },
    { id: "approved", label: "승인 완료", value: summary.approved, helper: `전체 ${summary.total}건 중 완료` },
  ];
  return (
    <div className="admin-operations-page">
      <ModuleCardDashboard beforeList={<AdminReviewQueue cards={cards} />} cards={cards} metricsOverride={metrics} role="admin" users={users} />
      <section className="admin-create-area" aria-label="모듈카드 생성">{createPanel}</section>
    </div>
  );
}
