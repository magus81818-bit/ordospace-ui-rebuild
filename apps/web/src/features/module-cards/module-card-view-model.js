import { getStatusView } from "../../design-system/status-map.ts";

export function createModuleCardViewModel(card, { role, users = [] }) {
  const findName = (userId) => users.find((user) => user.id === userId)?.name ?? "미지정";
  const progress = Number.isFinite(Number(card.progress))
    ? Math.min(100, Math.max(0, Number(card.progress)))
    : null;

  return {
    id: card.id,
    title: card.title || "제목 없음",
    summary: card.summary,
    projectLabel: card.projectName || card.projectId || "프로젝트 미지정",
    assigneeLabel: role === "client" ? null : findName(card.assigneeId),
    clientLabel: role === "worker" ? null : findName(card.clientId),
    status: card.status,
    statusView: getStatusView(card.status),
    progress,
    phase: card.phase ?? null,
    updatedLabel: card.updatedAt ?? card.createdAt ?? "업데이트 정보 없음",
    detailPath: `/workspace/${role}/cards/${card.id}`,
  };
}

export function createModuleCardViewModels(cards, context) {
  return cards.map((card) => createModuleCardViewModel(card, context));
}
