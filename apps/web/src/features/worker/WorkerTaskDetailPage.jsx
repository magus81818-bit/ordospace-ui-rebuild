import { Card, CardContent, InlineNotice, PanelHeader, Progress, StatusBadge } from "@ordospace/ui-catalog";
import { Link } from "react-router-dom";
import { getStatusView } from "../../design-system/status-map.ts";
import { getAvailableWorkerActions } from "./worker-action-policy.js";

export function WorkerTaskDetailPage({ activities, card, comments, currentUser, submissionPanel, updatePanel }) {
  const status = getStatusView(card.status);
  const policy = getAvailableWorkerActions(card, { userId: currentUser.id });
  const revisionReason = [...comments].reverse().find((comment) => comment.visibility === "client")?.body;
  return <section className="worker-task-detail-page">
    <Link className="dashboard-detail-link worker-back-link" to="/workspace/worker">작업 현황으로 돌아가기</Link>
    <header className="worker-task-detail__identity"><div><span>{card.id} · {card.projectName}</span><h1>{card.title}</h1><p>{card.summary}</p></div><StatusBadge label={status.label} tone={status.tone} /></header>
    <div className="worker-task-detail__layout">
      <div className="worker-task-detail__main">
        <Card className="worker-context-summary"><CardContent><PanelHeader eyebrow="Task context" title="작업 정보" description="저장된 진행 상태와 작업 범위를 확인하세요." />
          <dl className="worker-summary-grid"><div><dt>프로젝트</dt><dd>{card.projectName}</dd></div><div><dt>단계</dt><dd>{card.phase}</dd></div><div><dt>상태</dt><dd>{status.label}</dd></div><div><dt>QC</dt><dd>{card.qcStatus}</dd></div></dl>
          <div className="worker-summary-progress"><span>진행률</span><Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={card.progress} value={card.progress} /><strong>{card.progress}%</strong></div>
          <div><strong>결과 범위</strong><ul>{card.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </CardContent></Card>
        {card.status === "revision_requested" ? <InlineNotice className="worker-revision-notice" title="수정 요청" tone="crit">{revisionReason ?? "수정 요청 상태입니다. 상세 사유가 기록되지 않았습니다."}</InlineNotice> : null}
        <section className="worker-update-area" aria-label="작업 업데이트">{updatePanel}</section>
        <Card className="worker-activity-panel"><CardContent><PanelHeader eyebrow="Work history" title="작업 기록" description="이 작업에 연결된 상태 변경 기록입니다." /><div className="worker-activity-list">{activities.map((activity) => <article key={activity.id}><strong>{activity.message}</strong><span>{activity.createdAt}</span></article>)}</div></CardContent></Card>
      </div>
      <aside className="worker-submission-area" aria-label="Admin 검토 제출"><InlineNotice title={policy.readonly ? "읽기 전용 작업" : policy.canSubmitForAdminReview ? "제출 준비 완료" : "작업 진행 중"} tone={policy.canSubmitForAdminReview ? "ok" : "pend"}>{policy.guidance}</InlineNotice>{submissionPanel}{!policy.canSubmitForAdminReview && !policy.readonly ? <p className="worker-disabled-reason">{policy.disabledReason}</p> : null}</aside>
    </div>
  </section>;
}
