import { Badge, Card, CardContent, PanelHeader, Progress, StatusBadge } from "@ordospace/ui-catalog";
import { Link } from "react-router-dom";
import { getStatusView } from "../../design-system/status-map.ts";
import { getAvailableWorkerActions } from "./worker-action-policy.js";
import { getWorkerActiveQueue, getWorkerRevisionQueue } from "./worker-work-view.js";

function Queue({ items, title, description, className }) {
  if (!items.length) return null;
  return <section className={`worker-work-queue ${className}`} aria-label={title}>
    <PanelHeader eyebrow="Work queue" title={title} description={description} />
    <div className="worker-work-queue__list">{items.map(({ card, category, policy }) => {
      const status = getStatusView(card.status);
      return <Card className="worker-work-queue__item" key={card.id} variant="interactive"><CardContent>
        <div className="worker-work-queue__identity"><span>{card.id}</span><strong>{card.title}</strong><small>{card.projectName}</small></div>
        <div className="worker-work-queue__status"><StatusBadge label={status.label} tone={status.tone} /><Badge variant="outline">{category.label}</Badge></div>
        <div className="worker-work-queue__progress"><Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={card.progress} value={card.progress} /><span>{card.progress}%</span></div>
        <span className="worker-work-queue__qc">QC · {card.qcStatus}</span>
        <Link className="dashboard-detail-link" to={`/workspace/worker/cards/${card.id}`}>{policy?.canSubmitForAdminReview ? "검토 요청" : category.id === "revision_required" ? "수정 대응" : "작업 계속"}</Link>
      </CardContent></Card>;
    })}</div>
  </section>;
}

export function WorkerWorkQueues({ cards, currentUser }) {
  const context = { userId: currentUser.id };
  return <div className="worker-queue-stack">
    <Queue className="worker-active-queue" description="저장하거나 검토를 요청할 수 있는 작업" items={getWorkerActiveQueue(cards, context)} title="지금 진행할 작업" />
    <Queue className="worker-revision-queue" description="클라이언트 요청을 확인하고 다시 작업하세요." items={getWorkerRevisionQueue(cards).map((item) => ({ ...item, policy: getAvailableWorkerActions(item.card, context) }))} title="수정 요청 작업" />
  </div>;
}
