# @ordospace/ui-catalog

ORDOSPACE의 실행 가능한 공통 컴포넌트 카탈로그다. 모든 시각 값은 `@ordospace/design-tokens`의 CSS 변수로 소비하며 Router, Store, Domain 상태를 포함하지 않는다.

- Public entry: `src/index.ts`
- Styles: `@ordospace/ui-catalog/styles.css`
- Primitive: Tier A 9개, Tier B 9개
- Pattern: MetricCard, StatusBadge, FilterTabs, EmptyState, InlineNotice, PanelHeader, DataTableShell, ActionGroup
- Source reference: `references/salesops-source-vault`이며 Production import가 금지된다.

소비 앱은 design token CSS를 먼저 불러온 다음 catalog CSS를 불러와야 한다. 컴포넌트 상태 전이, 숫자 formatting, Route 이동은 호출자가 담당한다.
