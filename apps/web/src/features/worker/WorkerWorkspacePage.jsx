import { InlineNotice } from "@ordospace/ui-catalog";
import { ModuleCardDashboard } from "../../components/dashboard/index.js";
import { WorkerWorkQueues } from "./WorkerWorkQueues.jsx";
import { getWorkerMetrics } from "./worker-work-view.js";

export function WorkerWorkspacePage({ cards, currentUser, users }) {
  const summary = getWorkerMetrics(cards);
  const metrics = [
    { id: "active", label: "진행 작업", value: summary.active, helper: "시작 또는 계속할 작업" },
    { id: "revision", label: "수정 요청", value: summary.revision, helper: "다시 확인할 작업" },
    { id: "review", label: "검토 중", value: summary.review, helper: "제출 후 대기 중" },
    { id: "completed", label: "승인 완료", value: summary.completed, helper: `내 배정 ${summary.total}건 중 완료` },
  ];
  return <div className="worker-workspace-page"><ModuleCardDashboard
    beforeList={<><WorkerWorkQueues cards={cards} currentUser={currentUser} /><InlineNotice title="작업 진행 안내" tone="pend">진행률과 QC를 저장한 뒤 조건을 충족하면 Admin 검토를 요청할 수 있습니다.</InlineNotice></>}
    cards={cards} metricsOverride={metrics} role="worker" users={users}
  /></div>;
}
