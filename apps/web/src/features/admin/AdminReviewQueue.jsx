import { Badge, Card, CardContent, PanelHeader, Progress, StatusBadge } from "@ordospace/ui-catalog";
import { Link } from "react-router-dom";
import { getStatusView } from "../../design-system/status-map.ts";
import { getAdminReviewQueue } from "./admin-operation-view.js";

export function AdminReviewQueue({ cards }) {
  const queue = getAdminReviewQueue(cards);
  return (
    <section className="admin-review-queue" aria-labelledby="admin-review-queue-title">
      <PanelHeader eyebrow="Priority queue" title="지금 확인할 항목" description={`검토 또는 대응이 필요한 ${queue.length}건`} />
      {queue.length ? (
        <div className="admin-review-queue__list">
          {queue.map(({ card, operation }) => {
            const status = getStatusView(card.status);
            return (
              <Card className="admin-review-queue__item" key={card.id} variant="interactive">
                <CardContent>
                  <div className="admin-review-queue__identity"><span>{card.id}</span><strong>{card.title}</strong><small>{card.projectName}</small></div>
                  <div className="admin-review-queue__status"><StatusBadge label={status.label} tone={status.tone} /><Badge variant="outline">{operation.attentionLabel}</Badge></div>
                  <div className="admin-review-queue__progress"><Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={card.progress} value={card.progress} /><span>{card.progress}%</span></div>
                  <span className="admin-review-queue__qc">QC · {card.qcStatus}</span>
                  <Link className="dashboard-detail-link" to={`/workspace/admin/cards/${card.id}`}>{operation.reviewable ? "검토 열기" : "상세 확인"}</Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : <p className="admin-review-queue__empty">현재 우선 검토할 항목이 없습니다.</p>}
    </section>
  );
}
