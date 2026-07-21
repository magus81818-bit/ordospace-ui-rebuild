import { Card, CardContent, InlineNotice, PanelHeader, Progress, StatusBadge } from "@ordospace/ui-catalog";
import { Link } from "react-router-dom";
import { getStatusView } from "../../design-system/status-map.ts";
import { getAvailableClientActions } from "./client-action-policy.js";

export function ClientApprovalDetailPage({ activities, card, children, comments, currentUser }) {
  const status = getStatusView(card.status);
  const policy = getAvailableClientActions(card, { userId: currentUser.id });
  const revisionReason = [...comments].reverse().find((comment) => comment.visibility === "client")?.body;
  return (
    <section className="client-approval-detail-page">
      <Link className="dashboard-detail-link client-back-link" to="/workspace/client">승인 현황으로 돌아가기</Link>
      <header className="client-approval-detail__identity">
        <div><span>{card.id} · {card.projectName}</span><h1>{card.title}</h1><p>{card.summary}</p></div>
        <StatusBadge label={status.label} tone={status.tone} />
      </header>
      <div className="client-approval-detail__layout">
        <div className="client-approval-detail__main">
          <Card className="client-delivery-summary"><CardContent>
            <PanelHeader eyebrow="Approval summary" title="전달 결과 요약" description="현재 상태와 검토 가능한 실제 결과를 확인하세요." />
            <dl className="client-summary-grid">
              <div><dt>프로젝트</dt><dd>{card.projectName}</dd></div>
              <div><dt>상태</dt><dd>{status.label}</dd></div>
              <div><dt>단계</dt><dd>{card.phase}</dd></div>
              <div><dt>진행률</dt><dd>{card.progress}%</dd></div>
            </dl>
            <div className="client-summary-progress"><span>진행률</span><Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={card.progress} value={card.progress} /><strong>{card.progress}%</strong></div>
          </CardContent></Card>
          <Card className="client-delivered-work"><CardContent>
            <PanelHeader eyebrow="Delivered work" title="검토할 결과" description="클라이언트에게 전달된 작업 범위입니다." />
            <p>{card.summary}</p>
            <ul>{card.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
          </CardContent></Card>
          {revisionReason ? <InlineNotice title="수정 요청 사유" tone="crit">{revisionReason}</InlineNotice> : null}
          <Card className="client-review-history"><CardContent>
            <PanelHeader eyebrow="Review history" title="결정 기록" description="이 결과에 연결된 상태 변경 기록입니다." />
            <div className="client-review-history__list">{activities.length ? activities.map((activity) => <article key={activity.id}><strong>{activity.message}</strong><span>{activity.createdAt}</span></article>) : <p>표시할 기록이 없습니다.</p>}</div>
          </CardContent></Card>
        </div>
        <aside className="client-decision-area" aria-label="클라이언트 결정">
          <InlineNotice title={policy.readonly ? "읽기 전용 결과" : "결정이 필요합니다"} tone={policy.readonly ? "pend" : "ok"}>{policy.guidance}</InlineNotice>
          {children}
        </aside>
      </div>
    </section>
  );
}
