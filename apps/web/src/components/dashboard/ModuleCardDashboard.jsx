import { useMemo, useState } from "react";
import {
  ActionGroup,
  Card,
  CardContent,
  DataTableShell,
  EmptyState,
  FilterTabs,
  InlineNotice,
  MetricCard,
  PanelHeader,
  Progress,
  StatusBadge,
} from "@ordospace/ui-catalog";
import { CheckCircle2, ClipboardList, FolderKanban, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

import { FILTER_GROUPS, getFiltersForRole, getModuleCardMetrics } from "../../features/module-cards/module-card-metrics.js";
import { createModuleCardViewModels } from "../../features/module-cards/module-card-view-model.js";

const roleCopy = {
  admin: { eyebrow: "Admin workspace", title: "운영 흐름을 한눈에 관리하세요", description: "모듈카드 생성부터 검토와 클라이언트 전달까지 현재 상태를 확인합니다.", notice: "검토 대기 항목을 확인하고 필요한 운영 작업을 이어가세요." },
  worker: { eyebrow: "Worker workspace", title: "내 작업과 제출 상태를 확인하세요", description: "현재 계정에 배정된 모듈카드와 진행 단계를 보여줍니다.", notice: "진행률과 QC 상태를 갱신한 뒤 준비된 작업을 검토로 제출하세요." },
  client: { eyebrow: "Client workspace", title: "전달된 결과물을 검토하세요", description: "현재 프로젝트 범위의 모듈카드와 승인 상태를 확인합니다.", notice: "클라이언트 검토 단계의 결과물만 승인하거나 수정을 요청할 수 있습니다." },
};

function StatusCell({ view }) {
  return <StatusBadge label={view.label} tone={view.tone} />;
}

function ProgressCell({ value }) {
  if (value === null) return <span className="dashboard-muted">미설정</span>;
  return (
    <div className="dashboard-progress" aria-label={`진행률 ${value}%`}>
      <Progress aria-valuemax={100} aria-valuemin={0} aria-valuenow={value} value={value} />
      <span>{value}%</span>
    </div>
  );
}

function DetailAction({ path, title }) {
  return <Link className="dashboard-detail-link" to={path} aria-label={`${title} 상세 열기`}>상세</Link>;
}

export function ModuleCardDashboard({ cards, role, users }) {
  const [filter, setFilter] = useState("all");
  const copy = roleCopy[role];
  const metrics = useMemo(() => getModuleCardMetrics(cards, role), [cards, role]);
  const filters = useMemo(() => getFiltersForRole(cards, role), [cards, role]);
  const visibleCards = useMemo(() => cards.filter(FILTER_GROUPS[filter] ?? FILTER_GROUPS.all), [cards, filter]);
  const rows = useMemo(() => createModuleCardViewModels(visibleCards, { role, users }), [role, users, visibleCards]);
  const columns = role === "client"
    ? ["모듈카드", "상태", "프로젝트", "진행률", "작업"]
    : ["모듈카드", "상태", "담당자", "진행률", "작업"];
  const tableRows = rows.map((card) => [
    <div className="dashboard-card-title"><strong>{card.title}</strong><span>{card.id}</span></div>,
    <StatusCell view={card.statusView} />,
    card.assigneeLabel ?? card.projectLabel,
    <ProgressCell value={card.progress} />,
    <ActionGroup primary={<DetailAction path={card.detailPath} title={card.title} />} />,
  ]);

  return (
    <section className="dashboard-page">
      <header className="dashboard-page__intro">
        <span>{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </header>

      <div className="dashboard-kpi-grid" aria-label={`${role} 주요 지표`}>
        {metrics.map((metric, index) => (
          <MetricCard
            helper={metric.helper}
            icon={[ClipboardList, FolderKanban, CheckCircle2, RefreshCcw][index]}
            key={metric.id}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>

      <InlineNotice className="dashboard-notice" title="현재 업무 안내" tone="pend">{copy.notice}</InlineNotice>

      <section className="dashboard-section" aria-labelledby={`${role}-cards-title`}>
        <PanelHeader eyebrow="ModuleCards" title="모듈카드 현황" description={`현재 역할에서 확인 가능한 ${cards.length}건`} />
        <div className="dashboard-toolbar"><FilterTabs items={filters} label="모듈카드 상태 필터" onValueChange={setFilter} value={filter} /></div>
        {rows.length > 0 ? (
          <>
            <div className="dashboard-table"><DataTableShell columns={columns} rows={tableRows} title="역할별 모듈카드 목록" /></div>
            <div className="dashboard-mobile-list">
              {rows.map((card) => (
                <Card className="dashboard-mobile-card" key={card.id}>
                  <CardContent>
                    <div className="dashboard-mobile-card__top"><StatusCell view={card.statusView} /><span>{card.id}</span></div>
                    <strong>{card.title}</strong>
                    <p>{card.summary}</p>
                    <ProgressCell value={card.progress} />
                    <DetailAction path={card.detailPath} title={card.title} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            action={filter === "all" ? null : <button className="dashboard-reset" onClick={() => setFilter("all")} type="button">필터 초기화</button>}
            description={filter === "all" ? "현재 역할에 표시할 모듈카드가 없습니다." : "다른 상태 필터를 선택해 보세요."}
            icon={ClipboardList}
            title={filter === "all" ? "표시할 모듈카드가 없습니다" : "현재 조건에 해당하는 항목이 없습니다"}
          />
        )}
      </section>
    </section>
  );
}

