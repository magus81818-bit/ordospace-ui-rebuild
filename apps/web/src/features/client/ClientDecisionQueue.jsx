import { Badge, Card, CardContent, PanelHeader, Progress, StatusBadge } from "@ordospace/ui-catalog";
import { Link } from "react-router-dom";
import { getStatusView } from "../../design-system/status-map.ts";
import { getClientReviewQueue } from "./client-approval-view.js";

export function ClientDecisionQueue({ cards }) {
  const queue = getClientReviewQueue(cards);
  return (
    <section className="client-decision-queue" aria-labelledby="client-decision-queue-title">
      <PanelHeader eyebrow="Decision queue" title="지금 검토할 항목" description={`승인 또는 수정 요청을 결정할 ${queue.length}건`} />
      {queue.length ? (
        <div className="client-decision-queue__list">
          {queue.map(({ card, category }) => {
            const status = getStatusView(card.status);
            return (
              <Card className="client-decision-queue__item" key={card.id} variant="interactive">
                <CardContent>
                  <div className="client-decision-queue__identity"><span>{card.id}</span><strong>{card.title}</strong><small>{card.projectName}</small></div>
                  <div className="client-decision-queue__status"><StatusBadge label={status.label} tone={status.tone} /><Badge variant="outline">{category.label}</Badge></div>
                  <div className="client-decision-queue__progress"><Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={card.progress} value={card.progress} /><span>{card.progress}%</span></div>
                  <Link className="dashboard-detail-link" to={`/workspace/client/cards/${card.id}`}>검토하기</Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : <p className="client-decision-queue__empty">지금 결정할 항목이 없습니다.</p>}
    </section>
  );
}
