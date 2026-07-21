import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Check,
  CircleDashed,
  Clock3,
  Layers3,
  ShieldAlert,
  X,
} from "lucide-react";
import "./styles.css";
import "@ordospace/ui-catalog/styles.css";
import { CatalogPage, type LabPage } from "./catalog-pages";

type FoundationSectionProps = {
  index: string;
  title: string;
  note: string;
  children: React.ReactNode;
};

const surfaces = [
  ["Canvas", "--ordo-bg-canvas"],
  ["Sidebar", "--ordo-bg-sidebar"],
  ["Surface 1", "--ordo-bg-surface-1"],
  ["Surface 2", "--ordo-bg-surface-2"],
  ["Elevated", "--ordo-bg-elevated"],
];

const statuses = [
  { tone: "ok", label: "Approved", ko: "승인 완료", Icon: Check },
  { tone: "warn", label: "QC ready", ko: "추가 확인 필요", Icon: AlertTriangle },
  { tone: "crit", label: "Revision", ko: "수정 요청", Icon: ShieldAlert },
  { tone: "pend", label: "In review", ko: "검토 진행 중", Icon: Clock3 },
  { tone: "rej", label: "Draft", ko: "초안 · 미배정", Icon: CircleDashed },
];

const chartRoles = [
  ["Primary", "--ordo-chart-primary", 78],
  ["Secondary", "--ordo-chart-secondary", 62],
  ["Tertiary", "--ordo-chart-tertiary", 48],
  ["Positive", "--ordo-chart-positive", 70],
  ["Warning", "--ordo-chart-warning", 38],
  ["Critical", "--ordo-chart-critical", 24],
  ["Muted", "--ordo-chart-muted", 55],
] as const;

const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12];
const radii = ["sm", "md", "lg", "xl", "pill"];
const shadows = ["xs", "sm", "md", "overlay"];

function FoundationSection({ index, title, note, children }: FoundationSectionProps) {
  return (
    <section className="foundation-section" aria-labelledby={`section-${index}`}>
      <header className="section-heading">
        <span>{index}</span>
        <div>
          <h2 id={`section-${index}`}>{title}</h2>
          <p>{note}</p>
        </div>
      </header>
      {children}
    </section>
  );
}

function TokenCode({ children }: { children: React.ReactNode }) {
  return <code>{children}</code>;
}

function App() {
  const readPage = (): LabPage => {
    const hash = window.location.hash.slice(1) as LabPage;
    return ["foundation", "primitives", "patterns", "states", "responsive", "source-inventory"].includes(hash) ? hash : "foundation";
  };
  const [page, setPage] = useState<LabPage>(readPage);
  useEffect(() => {
    const handleHash = () => setPage(readPage());
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="lab-shell">
      <header className="lab-header">
        <a className="brand" href="#foundation" aria-label="ORDOSPACE UI Lab home">
          <span className="brand-mark"><Layers3 size={17} /></span>
          <span>ORDOSPACE <b>UI Lab</b></span>
        </a>
        <nav className="lab-nav" aria-label="UI Lab sections">
          {([
            ["foundation", "Foundation"], ["primitives", "Primitives"], ["patterns", "Patterns"],
            ["states", "States"], ["responsive", "Responsive"], ["source-inventory", "Source Inventory"],
          ] as const).map(([value, label]) => <a key={value} href={`#${value}`} aria-current={page === value ? "page" : undefined}>{label}</a>)}
        </nav>
        <div className="release-meta" aria-label="Round settings">
          <span>R03</span>
          <span>V3</span>
          <span>M2</span>
          <span>D7</span>
        </div>
      </header>

      <main id="top" className="lab-main">
        {page === "foundation" ? <>
        <div className="hero-copy">
          <div>
            <p className="eyebrow">Design foundation · 디자인 기반</p>
            <h1>Dark operations, translated for ORDO.</h1>
          </div>
          <p className="hero-note">
            SalesOps의 고밀도 다크 콘솔 언어를 ORDO의 역할·상태·업무 흐름에 맞춘 공통 토큰으로 정리했습니다.
            This catalog previews foundations only—no production shell is replaced.
          </p>
        </div>

        <div className="lab-grid">
          <FoundationSection index="01" title="Background and Surface" note="Layered dark neutrals with border-first separation.">
            <div className="surface-grid">
              {surfaces.map(([label, token]) => (
                <div className="surface-swatch" key={token} style={{ background: `var(${token})` }}>
                  <strong>{label}</strong>
                  <TokenCode>{token}</TokenCode>
                </div>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection index="02" title="Text Hierarchy" note="Readable hierarchy for dense operational content.">
            <div className="type-hierarchy">
              <div><span>Page title</span><h3>ModuleCard Operations</h3></div>
              <div><span>Section title</span><h4>오늘의 검토 대기 · Review queue</h4></div>
              <div><span>Body</span><p>납기와 역할 상태를 한 화면에서 확인하고 다음 작업을 결정합니다.</p></div>
              <div><span>Support</span><small>Updated 4 minutes ago · 담당자 김도윤</small></div>
            </div>
          </FoundationSection>

          <FoundationSection index="03" title="Brand Accent" note="Green owns actions; blue supports information and charts.">
            <div className="accent-row">
              <button className="button-primary">작업 승인 <ArrowUpRight size={15} /></button>
              <button className="button-secondary">검토 열기</button>
              <button className="icon-button" aria-label="Close preview"><X size={16} /></button>
              <div className="accent-chip"><span /> Primary action</div>
              <div className="accent-chip secondary"><span /> Informational</div>
            </div>
          </FoundationSection>

          <FoundationSection index="04" title="Status Tones" note="Every state combines color with text, icon, dot, or shape.">
            <div className="status-grid">
              {statuses.map(({ tone, label, ko, Icon }) => (
                <article className="status-card" data-tone={tone} key={tone}>
                  <div className="status-card-top">
                    <span className="status-badge"><Icon size={13} /> {label}</span>
                    <span className="status-dot" aria-hidden="true" />
                  </div>
                  <strong>{ko}</strong>
                  <p>ModuleCard · MC-0248</p>
                  <div className="status-alert"><Icon size={14} /><span>{label} workflow signal</span></div>
                </article>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection index="05" title="Chart Palette" note="CSS-variable roles only; no Recharts component is mounted in Round 2.">
            <div className="chart-preview">
              <div className="chart-bars" aria-label="Chart color role preview">
                {chartRoles.map(([label, token, height]) => (
                  <div className="chart-column" key={token}>
                    <div style={{ height: `${height}%`, background: `var(${token})` }} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="chart-legend">
                {chartRoles.slice(0, 6).map(([label, token]) => (
                  <span key={token}><i style={{ background: `var(${token})` }} />{label}</span>
                ))}
              </div>
            </div>
          </FoundationSection>

          <FoundationSection index="06" title="Typography" note="Network-independent fallbacks for English, Korean, and code.">
            <div className="typography-samples">
              <p className="font-display">Revenue signal <b>+18.4%</b></p>
              <p className="font-korean">검토가 필요한 업무 카드 12건</p>
              <p className="font-mono">status: client_review · SLA 04:18:32</p>
              <div className="weight-row"><span>Regular 400</span><b>Semibold 600</b><strong>Bold 700</strong></div>
            </div>
          </FoundationSection>

          <FoundationSection index="07" title="Spacing" note="Compact 4–48px scale tuned for dense dashboards.">
            <div className="spacing-list">
              {spacing.map((step) => (
                <div key={step}>
                  <TokenCode>space-{step}</TokenCode>
                  <span style={{ width: `var(--ordo-space-${step})` }} />
                  <small>{step * 4}px</small>
                </div>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection index="08" title="Radius" note="Six to twelve pixels for controls and panels; pill only for chips.">
            <div className="radius-grid">
              {radii.map((radius) => (
                <div key={radius} style={{ borderRadius: `var(--ordo-radius-${radius})` }}>
                  <strong>{radius}</strong>
                  <TokenCode>--ordo-radius-{radius}</TokenCode>
                </div>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection index="09" title="Border" note="Thin borders carry structure before shadows do.">
            <div className="border-grid">
              <div className="border-subtle"><strong>Subtle</strong><TokenCode>--ordo-border-subtle</TokenCode></div>
              <div className="border-default"><strong>Default</strong><TokenCode>--ordo-border-default</TokenCode></div>
              <div className="border-strong"><strong>Strong</strong><TokenCode>--ordo-border-strong</TokenCode></div>
              <div className="border-focus"><strong>Focus</strong><TokenCode>--ordo-border-focus</TokenCode></div>
            </div>
          </FoundationSection>

          <FoundationSection index="10" title="Shadow" note="Restrained elevation reserved for hierarchy and overlays.">
            <div className="shadow-grid">
              {shadows.map((shadow) => (
                <div key={shadow} style={{ boxShadow: `var(--ordo-shadow-${shadow})` }}>
                  <strong>{shadow}</strong><TokenCode>--ordo-shadow-{shadow}</TokenCode>
                </div>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection index="11" title="Motion" note="Fast feedback, small travel, and a complete reduced-motion path.">
            <div className="motion-panel">
              <div className="motion-track"><span /></div>
              <div>
                <strong>Operational pulse</strong>
                <p>Hover the track or focus the control. 움직임은 상태 이해를 돕는 범위에서만 사용합니다.</p>
              </div>
              <button className="button-secondary"><Activity size={15} /> Preview motion</button>
            </div>
          </FoundationSection>

          <FoundationSection index="12" title="Responsive Tokens" note="Desktop shell, tablet rail, and mobile drawer policy.">
            <div className="responsive-table-wrap">
              <table>
                <thead><tr><th>Viewport</th><th>Navigation</th><th>Header</th><th>Gutter</th><th>Data policy</th></tr></thead>
                <tbody>
                  <tr><td>≥ 1024px</td><td>260px fixed sidebar</td><td>64px</td><td>24px</td><td>Dense table</td></tr>
                  <tr><td>768–1023px</td><td>72px rail / collapse</td><td>64px</td><td>20px</td><td>Horizontal scroll</td></tr>
                  <tr><td>&lt; 768px</td><td>Drawer / sheet</td><td>56px</td><td>16px</td><td>Card or scroll</td></tr>
                </tbody>
              </table>
            </div>
          </FoundationSection>
        </div>

        <footer className="lab-footer">
          <span>ORDOSPACE Design Foundation · Round 3</span>
          <span>One token package · Five status tones · Executable catalog</span>
        </footer>
        </> : <CatalogPage page={page} />}
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
