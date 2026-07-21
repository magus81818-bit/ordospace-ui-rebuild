import { Card } from "@ordospace/ui-catalog";

export function DataPanel({ children, className = "" }) {
  return <Card className={joinClassNames("data-panel", className)} variant="muted">{children}</Card>;
}

export function NoticePanel({ actions, children }) {
  return (
    <div className="notice-panel">
      {children}
      {actions ? <div className="action-row compact-actions">{actions}</div> : null}
    </div>
  );
}

export function MetricList({ rows }) {
  return (
    <div className="metric-list">
      {rows.map((row) => (
        <div className="metric-row" key={row.id}>
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </div>
      ))}
    </div>
  );
}

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}
