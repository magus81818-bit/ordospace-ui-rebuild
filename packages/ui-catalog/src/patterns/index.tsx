import * as React from "react";
import { cn } from "../utils/cn";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../primitives/core";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../primitives/overlays";

export type StatusTone = "ok" | "warn" | "crit" | "pend" | "rej";
type IconType = React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;

export function StatusBadge({ tone, label, icon: Icon, className }: { tone: StatusTone; label: string; icon?: IconType; className?: string }) {
  return <span className={cn("ordo-status-badge", `ordo-status-badge--${tone}`, className)} data-tone={tone}>{Icon ? <Icon size={13} aria-hidden /> : <span className="ordo-status-badge__mark" aria-hidden="true" />}{label}</span>;
}

export type MetricCardProps = {
  label: string;
  value: React.ReactNode;
  delta?: { value: string; direction: "up" | "down" | "neutral"; tone?: StatusTone };
  helper?: string;
  icon?: IconType;
  loading?: boolean;
};
export function MetricCard({ label, value, delta, helper, icon: Icon, loading }: MetricCardProps) {
  return <Card className="ordo-metric-card"><CardHeader><div className="ordo-metric-card__label"><span>{label}</span>{Icon && <Icon size={18} aria-hidden />}</div></CardHeader><CardContent>{loading ? <><Skeleton variant="text" /><Skeleton variant="text" /></> : <><strong className="ordo-metric-card__value">{value ?? "값 없음"}</strong>{delta && <span className={cn("ordo-metric-card__delta", `ordo-metric-card__delta--${delta.tone || "pend"}`)} data-direction={delta.direction}>{delta.direction === "up" ? "↑" : delta.direction === "down" ? "↓" : "→"} {delta.value}</span>}{helper && <p>{helper}</p>}</>}</CardContent></Card>;
}

export type FilterTabItem = { value: string; label: string; count?: number };
export function FilterTabs({ value, onValueChange, items, label = "업무 필터" }: { value: string; onValueChange: (value: string) => void; items: FilterTabItem[]; label?: string }) {
  return <div className="ordo-filter-tabs" role="group" aria-label={label}>{items.map((item) => <button key={item.value} type="button" aria-pressed={value === item.value} onClick={() => onValueChange(item.value)}>{item.label}{typeof item.count === "number" && <Badge variant="neutral">{item.count}</Badge>}</button>)}</div>;
}

export function EmptyState({ icon: Icon, title, description, action, compact = false }: { icon?: IconType; title: string; description?: string; action?: React.ReactNode; compact?: boolean }) {
  return <div className={cn("ordo-empty-state", compact && "ordo-empty-state--compact")}>{Icon && <Icon size={compact ? 24 : 32} aria-hidden />}<strong>{title}</strong>{description && <p>{description}</p>}{action}</div>;
}

export function InlineNotice({ tone = "pend", title, children, className }: { tone?: StatusTone; title: string; children?: React.ReactNode; className?: string }) {
  return <aside className={cn("ordo-inline-notice", `ordo-inline-notice--${tone}`, className)}><span aria-hidden="true">!</span><div><strong>{title}</strong>{children && <p>{children}</p>}</div></aside>;
}

export function PanelHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: React.ReactNode }) {
  return <header className="ordo-panel-header"><div>{eyebrow && <span>{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>{actions && <div className="ordo-panel-header__actions">{actions}</div>}</header>;
}

export function TableToolbar({ children, className }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("ordo-table-toolbar", className)}>{children}</div>; }
export function TableEmptyState({ title = "표시할 업무가 없습니다" }: { title?: string }) { return <tr><td colSpan={99}><EmptyState title={title} compact /></td></tr>; }
export function TableLoadingState({ rows = 3, columns = 4 }: { rows?: number; columns?: number }) { return <>{Array.from({ length: rows }, (_, row) => <tr key={row}>{Array.from({ length: columns }, (_, cell) => <td key={cell}><Skeleton variant="table-row" /></td>)}</tr>)}</>; }
export function DataTableShell({ title, description, toolbar, columns, rows, empty = false, loading = false }: { title: string; description?: string; toolbar?: React.ReactNode; columns: string[]; rows: React.ReactNode[][]; empty?: boolean; loading?: boolean }) {
  return <Card className="ordo-data-table-shell"><CardHeader><CardTitle>{title}</CardTitle>{description && <CardDescription>{description}</CardDescription>}</CardHeader>{toolbar && <TableToolbar>{toolbar}</TableToolbar>}<CardContent><Table><TableHeader><TableRow>{columns.map((column) => <TableHead key={column}>{column}</TableHead>)}</TableRow></TableHeader><TableBody>{loading ? <TableLoadingState columns={columns.length} /> : empty ? <TableEmptyState /> : rows.map((row, index) => <TableRow key={index}>{row.map((cell, cellIndex) => <TableCell key={cellIndex}>{cell}</TableCell>)}</TableRow>)}</TableBody></Table></CardContent></Card>;
}

export type ActionItem = { label: string; onSelect?: () => void; disabled?: boolean; destructive?: boolean };
export function ActionGroup({ primary, secondary = [], overflow = [], overflowLabel = "더 보기" }: { primary?: React.ReactNode; secondary?: React.ReactNode[]; overflow?: ActionItem[]; overflowLabel?: string }) {
  const visible = secondary.slice(0, primary ? 2 : 3);
  const moved = secondary.slice(visible.length).map((node, index) => ({ label: `추가 작업 ${index + 1}`, onSelect: undefined, node }));
  return <div className="ordo-action-group">{primary}{visible.map((action, index) => <React.Fragment key={index}>{action}</React.Fragment>)}{(overflow.length > 0 || moved.length > 0) && <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" aria-label={overflowLabel}>••• <span className="ordo-action-group__label">{overflowLabel}</span></Button></DropdownMenuTrigger><DropdownMenuContent align="end">{overflow.map((item) => <DropdownMenuItem key={item.label} disabled={item.disabled} destructive={item.destructive} onSelect={item.onSelect}>{item.label}</DropdownMenuItem>)}{moved.map((item) => <DropdownMenuItem key={item.label}>{item.node}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>}</div>;
}
