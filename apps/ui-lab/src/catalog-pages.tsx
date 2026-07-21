import { useState, type ReactNode } from "react";
import { AlertTriangle, Check, ChevronRight, CircleDashed, Clock3, Inbox, Layers3, Menu, MoreHorizontal, Search, Settings2, ShieldAlert, UserRound } from "lucide-react";
import {
  ActionGroup, Avatar, AvatarFallback, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  DataTableShell, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
  EmptyState, Field, FieldDescription, FieldError, FilterTabs, InlineNotice, Input, Label, MetricCard, PanelHeader, Progress, ScrollArea,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger,
  Skeleton, StatusBadge, Switch, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger,
  Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@ordospace/ui-catalog";
import sourceManifest from "../../../references/salesops-source-vault/source-manifest.json";

export type LabPage = "foundation" | "primitives" | "patterns" | "states" | "responsive" | "source-inventory";

const pageCopy: Record<Exclude<LabPage, "foundation">, [string, string]> = {
  primitives: ["Executable primitives", "18개 Production Primitive의 실제 상태와 키보드 상호작용을 확인합니다."],
  patterns: ["ORDO patterns", "운영 데이터 표현과 Action 정책을 업무 로직 없이 검증합니다."],
  states: ["State matrix", "실제 Props와 상호작용으로 Default부터 Overflow까지 비교합니다."],
  responsive: ["Responsive matrix", "320px 스트레스 테스트부터 1440px 컨테이너까지 같은 패턴을 반복 검증합니다."],
  "source-inventory": ["Source inventory", "Source Vault Manifest의 57개 항목을 단일 원본에서 렌더합니다."],
};

function PageIntro({ page }: { page: Exclude<LabPage, "foundation"> }) {
  const [title, description] = pageCopy[page];
  return <div className="catalog-intro"><p>Round 03 · Component catalog</p><h1>{title}</h1><span>{description}</span></div>;
}

function Demo({ title, note, children, wide = false }: { title: string; note?: string; children: ReactNode; wide?: boolean }) {
  return <section className={`catalog-demo${wide ? " catalog-demo--wide" : ""}`}><header><h2>{title}</h2>{note && <p>{note}</p>}</header><div className="catalog-demo__body">{children}</div></section>;
}

function CommonMenu() {
  const [compact, setCompact] = useState(false);
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline"><MoreHorizontal size={16} /> 작업 메뉴</Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem><Settings2 size={15} /> 표시 설정</DropdownMenuItem><DropdownMenuCheckboxItem checked={compact} onCheckedChange={(checked) => setCompact(Boolean(checked))}>간결하게 보기</DropdownMenuCheckboxItem><DropdownMenuSeparator /><DropdownMenuItem disabled>권한이 필요한 작업</DropdownMenuItem><DropdownMenuItem destructive>기록에서 제외</DropdownMenuItem></DropdownMenuContent></DropdownMenu>;
}

function PrimitivePage() {
  const [filter, setFilter] = useState("all");
  return <><PageIntro page="primitives" /><div className="catalog-grid">
    <Demo title="Avatar · Badge"><div className="demo-row"><Avatar><AvatarFallback>김도윤</AvatarFallback></Avatar><Avatar><AvatarFallback><UserRound size={17} /></AvatarFallback></Avatar><Badge>기본</Badge><Badge variant="accent">강조</Badge><Badge variant="outline">외곽선</Badge></div></Demo>
    <Demo title="Button" note="Variant, size, disabled, loading"><div className="demo-stack"><div className="demo-row"><Button size="sm">승인</Button><Button variant="secondary">검토</Button><Button variant="outline">보류</Button><Button variant="ghost">닫기</Button><Button variant="destructive">제외</Button><Button variant="link">상세 열기</Button></div><div className="demo-row"><Button size="lg">긴 한국어 주요 작업명</Button><Button size="icon" aria-label="다음"><ChevronRight size={16} /></Button><Button disabled>비활성</Button><Button loading>저장 중</Button></div></div></Demo>
    <Demo title="Card" note="Default, muted, elevated, interactive, selected" wide><div className="card-demo-grid">{(["default","muted","elevated","interactive","selected"] as const).map((variant) => <Card variant={variant} key={variant}><CardHeader><CardTitle>{variant}</CardTitle><CardDescription>긴 한국어 설명이 좁은 카드에서도 안전하게 줄바꿈됩니다.</CardDescription></CardHeader><CardContent>MC-0248 · Project Alpha</CardContent>{variant === "interactive" && <CardFooter><Button variant="outline" size="sm">카드 작업</Button></CardFooter>}</Card>)}</div></Demo>
    <Demo title="Form controls" note="Label, Input, Textarea, invalid, helper"><div className="form-demo"><Field><Label htmlFor="module-title">작업 제목</Label><Input id="module-title" defaultValue="Project Alpha 검토 요청" /><FieldDescription>담당자가 이해할 수 있는 이름을 입력합니다.</FieldDescription></Field><Field><Label htmlFor="invalid-title">오류 예시</Label><Input id="invalid-title" aria-invalid="true" aria-describedby="invalid-error" defaultValue="필수 정보 누락" /><FieldError id="invalid-error">납기 정보를 확인해주세요.</FieldError></Field><Field><Label htmlFor="description">상세 설명</Label><Textarea id="description" placeholder="긴 한국어 업무 설명을 입력하세요." /></Field><Field><Label htmlFor="readonly">읽기 전용</Label><Input id="readonly" readOnly value="수정할 수 없는 기준 정보" /></Field></div></Demo>
    <Demo title="Select · Switch"><div className="demo-stack"><Field><Label id="status-label">검토 상태</Label><Select defaultValue="pending"><SelectTrigger aria-labelledby="status-label"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">전체 상태</SelectItem><SelectItem value="pending">검토 대기</SelectItem><SelectItem value="blocked">QC 차단</SelectItem></SelectContent></Select></Field><div className="demo-row"><Label htmlFor="notify">상태 알림</Label><Switch id="notify" defaultChecked aria-label="상태 알림" /><Switch disabled aria-label="비활성 알림" /></div></div></Demo>
    <Demo title="Tabs"><Tabs defaultValue="all"><TabsList aria-label="업무 범주"><TabsTrigger value="all">전체</TabsTrigger><TabsTrigger value="mine">내 작업</TabsTrigger><TabsTrigger value="blocked">차단</TabsTrigger></TabsList><TabsContent value="all">방향키로 탭을 이동할 수 있습니다.</TabsContent><TabsContent value="mine">담당 업무 12건</TabsContent><TabsContent value="blocked">QC 차단 2건</TabsContent></Tabs></Demo>
    <Demo title="Separator · Tooltip"><div className="demo-stack"><span>상단 정보</span><Separator /><TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="상태 도움말"><CircleDashed size={16} /></Button></TooltipTrigger><TooltipContent>상태 의미를 보조하는 설명입니다.</TooltipContent></Tooltip></TooltipProvider></div></Demo>
    <Demo title="DropdownMenu"><CommonMenu /></Demo>
    <Demo title="Sheet"><div className="demo-row"><Sheet><SheetTrigger asChild><Button variant="outline"><Menu size={16} /> 오른쪽 패널</Button></SheetTrigger><SheetContent side="right" aria-label="작업 상세 패널"><SheetTitle>작업 상세</SheetTitle><SheetDescription>Focus Trap, Escape, Backdrop 닫기를 확인합니다.</SheetDescription><InlineNotice title="검토 진행 중">변경 전에 담당자 메모를 확인하세요.</InlineNotice></SheetContent></Sheet><Sheet><SheetTrigger asChild><Button variant="ghost">왼쪽 패널</Button></SheetTrigger><SheetContent side="left" aria-label="탐색 미리보기 패널"><SheetTitle>탐색 미리보기</SheetTitle><SheetDescription>Round 4 모바일 Navigation을 위한 방향 동작만 검증합니다.</SheetDescription></SheetContent></Sheet></div></Demo>
    <Demo title="ScrollArea"><ScrollArea className="scroll-demo" type="always">{Array.from({ length: 12 }, (_, i) => <div className="scroll-demo__row" key={i}>작업 기록 {String(i + 1).padStart(2,"0")}</div>)}</ScrollArea></Demo>
    <Demo title="Skeleton"><div className="skeleton-demo"><Skeleton variant="avatar" /><div><Skeleton /><Skeleton /></div><Skeleton variant="card" /><Skeleton variant="table-row" /></div></Demo>
    <Demo title="Table" wide><Table><TableHeader><TableRow><TableHead>ModuleCard</TableHead><TableHead>프로젝트</TableHead><TableHead>상태</TableHead><TableHead>담당</TableHead><TableHead>마감</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>MC-0248</TableCell><TableCell>Project Alpha</TableCell><TableCell><StatusBadge tone="pend" label="검토 중" /></TableCell><TableCell>김도윤</TableCell><TableCell>7월 24일</TableCell></TableRow></TableBody></Table></Demo>
    <Demo title="Progress"><div className="demo-stack"><Label>이번 주 완료율 86%</Label><Progress value={86} aria-label="이번 주 완료율" /><Progress value={42} aria-label="업무 진행률" /></div></Demo>
    <Demo title="Narrow container"><div className="narrow-demo"><FilterTabs value={filter} onValueChange={setFilter} items={[{value:"all",label:"전체",count:24},{value:"pending",label:"매우 긴 검토 대기 상태",count:7}]} /><Button>줄바꿈 없이 유지되는 긴 작업 버튼</Button><Input aria-label="좁은 입력" placeholder="좁은 화면 입력" /></div></Demo>
  </div></>;
}

function PatternPage() {
  const [filter, setFilter] = useState("pending");
  const rows = [["MC-0248","Project Alpha",<StatusBadge tone="pend" label="승인 대기" icon={Clock3} />,"김도윤"],["MC-0251","Project Beta",<StatusBadge tone="crit" label="QC 차단" icon={ShieldAlert} />,"이서연"]];
  return <><PageIntro page="patterns" /><PanelHeader eyebrow="운영 개요" title="오늘의 작업 상태" description="숫자 계산과 상태 전이는 외부에서 완료된 값을 전달합니다." actions={<ActionGroup primary={<Button>새 ModuleCard</Button>} secondary={[<Button variant="outline" key="review">일괄 검토</Button>,<Button variant="ghost" key="export">목록 내보내기</Button>]} overflow={[{label:"표시 설정"},{label:"기록에서 제외",destructive:true}]} />} /><div className="metric-grid"><MetricCard label="승인 대기" value="7건" delta={{value:"2건 증가",direction:"up",tone:"pend"}} icon={Clock3} /><MetricCard label="진행 중 ModuleCard" value="12건" delta={{value:"변화 없음",direction:"neutral"}} icon={Layers3} /><MetricCard label="QC 차단" value="2건" delta={{value:"1건 감소",direction:"down",tone:"ok"}} icon={ShieldAlert} /><MetricCard label="이번 주 완료율" value="86%" helper="지난주 대비 6%p" icon={Check} /><MetricCard label="지표 불러오는 중" value={null} loading /></div><div className="catalog-grid"><Demo title="StatusBadge"><div className="demo-row"><StatusBadge tone="ok" label="승인 완료" icon={Check} /><StatusBadge tone="warn" label="확인 필요" icon={AlertTriangle} /><StatusBadge tone="crit" label="QC 차단" icon={ShieldAlert} /><StatusBadge tone="pend" label="검토 중" icon={Clock3} /><StatusBadge tone="rej" label="초안" icon={CircleDashed} /></div></Demo><Demo title="FilterTabs"><FilterTabs value={filter} onValueChange={setFilter} items={[{value:"all",label:"전체",count:24},{value:"pending",label:"대기",count:7},{value:"blocked",label:"차단",count:2}]} /></Demo><Demo title="EmptyState"><EmptyState icon={Inbox} title="등록된 업무가 없습니다" description="첫 ModuleCard를 만들면 역할별 작업 흐름을 시작할 수 있습니다." action={<Button size="sm">ModuleCard 만들기</Button>} /></Demo><Demo title="No search result"><EmptyState icon={Search} title="검색 결과가 없습니다" description="검색어나 상태 필터를 조정해보세요." compact /></Demo><Demo title="InlineNotice"><InlineNotice tone="warn" title="납기 확인 필요">승인 전에 담당자와 일정을 다시 확인하세요.</InlineNotice></Demo><Demo title="ActionGroup"><ActionGroup primary={<Button>승인</Button>} secondary={[<Button variant="outline" key="hold">보류</Button>,<Button variant="ghost" key="note">메모</Button>,<Button variant="ghost" key="history">기록</Button>]} overflow={[{label:"담당자 변경"},{label:"작업 제외",destructive:true}]} /></Demo><Demo title="DataTableShell" wide><DataTableShell title="검토 대기 목록" description="표 전체를 키보드로 탐색하고 좁은 화면에서는 가로로 스크롤합니다." toolbar={<><Input aria-label="목록 검색" placeholder="ModuleCard 검색" /><CommonMenu /></>} columns={["ModuleCard","프로젝트","상태","담당"]} rows={rows} /></Demo><Demo title="Loading table" wide><DataTableShell title="목록 불러오는 중" columns={["ModuleCard","프로젝트","상태","담당"]} rows={[]} loading /></Demo></div></>;
}

function StatesPage() {
  return <><PageIntro page="states" /><div className="state-matrix">{[
    ["Default",<Button key="default">기본 작업</Button>],["Hover",<Button key="hover" className="demo-force-hover">마우스 올림</Button>],["Focus",<Button key="focus" autoFocus>키보드 포커스</Button>],["Active",<Button key="active" className="demo-force-active">누르는 중</Button>],["Selected",<Card key="selected" variant="selected"><CardContent>선택된 카드</CardContent></Card>],["Disabled",<Button key="disabled" disabled>비활성</Button>],["Loading",<Button key="loading" loading>처리 중</Button>],["Empty",<EmptyState key="empty" title="업무 없음" compact />],["Error",<InlineNotice key="error" tone="crit" title="저장하지 못했습니다">입력값을 확인하세요.</InlineNotice>],["Success",<InlineNotice key="success" tone="ok" title="저장 완료">변경 사항이 반영됐습니다.</InlineNotice>],["Long content",<StatusBadge key="long" tone="warn" label="담당자 확인과 추가 검토가 모두 필요한 매우 긴 상태" />],["Overflow",<ActionGroup key="overflow" primary={<Button>승인</Button>} secondary={[<Button variant="outline" key="a">보류</Button>,<Button variant="ghost" key="b">메모</Button>,<Button variant="ghost" key="c">기록</Button>]} overflow={[{label:"담당자 변경"}]} />],
  ].map(([label,content]) => <section className="state-cell" key={String(label)}><h2>{label}</h2><div>{content}</div></section>)}</div></>;
}

function ResponsiveSample({ width }: { width: number }) {
  return <section className="responsive-frame" style={{ width }}><header><strong>{width}px</strong><span>{width === 320 ? "stress test" : "container test"}</span></header><div className="responsive-frame__content"><PanelHeader title="Project Alpha 운영 현황" description="긴 한국어 제목과 상태를 같은 구조에서 확인합니다." actions={<ActionGroup primary={<Button>승인 요청</Button>} secondary={[<Button variant="outline" key="review">검토 열기</Button>,<Button variant="ghost" key="note">메모</Button>]} overflow={[{label:"기록 보기"}]} />} /><div className="metric-grid"><MetricCard label="승인 대기" value="7건" /><MetricCard label="진행 중 ModuleCard" value="12건" /></div><Field><Label htmlFor={`responsive-${width}`}>업무 설명</Label><Input id={`responsive-${width}`} placeholder="긴 한국어 작업명을 입력하세요" /></Field><div className="demo-row"><CommonMenu /><Sheet><SheetTrigger asChild><Button variant="outline">패널 열기</Button></SheetTrigger><SheetContent aria-label={`${width}px 패널`}><SheetTitle>반응형 패널</SheetTitle><SheetDescription>현재 컨테이너는 {width}px입니다.</SheetDescription></SheetContent></Sheet></div><Table><TableHeader><TableRow><TableHead>ModuleCard</TableHead><TableHead>프로젝트</TableHead><TableHead>상태</TableHead><TableHead>담당</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>MC-0248</TableCell><TableCell>Project Alpha</TableCell><TableCell><StatusBadge tone="pend" label="담당자 확인과 검토 대기" /></TableCell><TableCell>김도윤</TableCell></TableRow></TableBody></Table></div></section>;
}
function ResponsivePage() { return <><PageIntro page="responsive" /><div className="responsive-matrix">{[320,393,768,1024,1440].map((width) => <ResponsiveSample width={width} key={width} />)}</div></>; }

function SourceInventoryPage() {
  const counts = sourceManifest.components.reduce<Record<string,number>>((acc,item) => ({...acc,[item.tier]:(acc[item.tier]||0)+1}),{});
  return <><PageIntro page="source-inventory" /><div className="inventory-summary">{["A","B","C","D"].map((tier) => <Card key={tier}><CardContent><span>Tier {tier}</span><strong>{counts[tier] || 0}</strong></CardContent></Card>)}</div><Table><TableHeader><TableRow>{["Component","Tier","SalesOps usage","ORDO plan","Production status","Dependencies","Source path","Port path"].map((head) => <TableHead key={head}>{head}</TableHead>)}</TableRow></TableHeader><TableBody>{sourceManifest.components.map((item) => <TableRow key={item.name}><TableCell><strong>{item.name}</strong></TableCell><TableCell><Badge variant={item.tier === "A" ? "accent" : "outline"}>{item.tier}</Badge></TableCell><TableCell>{item.usedBySalesOps ? "Used" : "Unconfirmed"}</TableCell><TableCell>{item.plannedForOrdo ? "Planned" : "No current plan"}</TableCell><TableCell>{item.productionStatus}</TableCell><TableCell>{item.externalDependencies.join(", ") || "None"}</TableCell><TableCell><code>{item.sourcePath}</code></TableCell><TableCell><code>{item.productionPortPath || "Vault only"}</code></TableCell></TableRow>)}</TableBody></Table><p className="inventory-footnote">Manifest: 57 unique primitives · License status: {sourceManifest.source.licenseStatus} · Build excluded</p></>;
}

export function CatalogPage({ page }: { page: Exclude<LabPage, "foundation"> }) {
  if (page === "primitives") return <PrimitivePage />;
  if (page === "patterns") return <PatternPage />;
  if (page === "states") return <StatesPage />;
  if (page === "responsive") return <ResponsivePage />;
  return <SourceInventoryPage />;
}
