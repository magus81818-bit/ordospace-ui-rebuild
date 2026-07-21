import { Badge, Card, CardContent, InlineNotice, PanelHeader, Progress, StatusBadge } from "@ordospace/ui-catalog";
import { Link } from "react-router-dom";
import { getStatusView } from "../../design-system/status-map.ts";
import { getAdminOperationView } from "./admin-operation-view.js";
import { getAdminStateGuidance } from "./admin-action-policy.js";

export function AdminCardReviewPage({ assigneeName, card, children, clientName, detailPanel }) {
  const status = getStatusView(card.status);
  const operation = getAdminOperationView(card);
  const guidance = getAdminStateGuidance(card);
  return (
    <section className="admin-card-review-page">
      <header className="admin-card-review-page__identity">
        <div><span>{card.id} · {card.projectName}</span><h1>{card.title}</h1><p>{card.summary}</p></div>
        <div className="admin-card-review-page__badges"><StatusBadge label={status.label} tone={status.tone} /><Badge variant="outline">{operation.attentionLabel}</Badge></div>
      </header>
      <Link className="dashboard-detail-link admin-back-link" to="/workspace/admin">운영 현황으로 돌아가기</Link>
      <InlineNotice title={guidance.title} tone={guidance.tone}>{guidance.description}</InlineNotice>
      <div className="admin-review-layout">
        <div className="admin-review-layout__main">
          <Card className="admin-review-summary" variant="muted">
            <CardContent>
              <PanelHeader eyebrow="Review summary" title="검토 요약" description="실제 작업·배정·QC 정보를 읽기 전용으로 확인합니다." />
              <dl className="admin-review-summary__grid">
                <div><dt>담당자</dt><dd>{assigneeName}</dd></div><div><dt>클라이언트</dt><dd>{clientName}</dd></div>
                <div><dt>QC 상태</dt><dd>{card.qcStatus}</dd></div><div><dt>우선순위</dt><dd>{card.priority}</dd></div>
                <div><dt>작업 시간</dt><dd>{card.loggedHours}/{card.estimateHours}h</dd></div><div><dt>마감일</dt><dd>{card.dueDate}</dd></div>
              </dl>
              <div className="admin-review-summary__progress"><span>진행률</span><Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={card.progress} value={card.progress} /><strong>{card.progress}%</strong></div>
            </CardContent>
          </Card>
          {detailPanel}
        </div>
        <aside className="admin-action-panel" aria-label="관리자 작업"><PanelHeader eyebrow="Admin action" title="검토 및 전달" description="현재 상태에서 허용된 관리자 작업만 표시합니다." />{children}</aside>
      </div>
    </section>
  );
}
