# Migration architecture decisions

| ADR | Context | Decision | Evidence / rejected alternative | Risk | Apply / verify |
|---|---|---|---|---|---|
| ADR-01 dashboard isolation | public must remain frozen | scope all new tokens/styles under `body.auth-on` plus an ORDO SalesOps namespace | reject global root token replacement | selector leakage | R3 / public snapshots every round |
| ADR-02 token namespace | existing variables overlap | use `--ordo-so-*`; map declared SalesOps values explicitly | reject overwriting `--background` globally | partial token drift | R3/R9 |
| ADR-03 CSS coexistence | current utility/build CSS is product critical | append isolated dashboard layer after current CSS with specificity budget | reject mass rewrite | cascade collisions | R3/R9 |
| ADR-04 static recreation | source is React/Next | recreate DOM/CSS in existing static factories and renderers | reject copying TSX/shadcn | behavioral divergence | R4–R8/R9 |
| ADR-05 Radix replacement | portals/hooks unavailable | keep existing modal/sheet/dropdown JS and apply visual/state grammar | reject new React runtime | focus/keyboard parity | R4/R9 |
| ADR-06 Next exclusion | source aliases/layout/build are incompatible | no Next dependency or config copied | reject dual framework | build complexity | all rounds |
| ADR-07 fonts | named fonts lack packaged source | retain local/system ORDOSPACE stack while matching size/weight/spacing | reject remote font fetch | raster difference | R3/R9 |
| ADR-08 icons | both use Lucide concepts | use existing vendored Lucide names/sizes; no lucide-react | reject React icons | missing glyph | R4/R9 |
| ADR-09 charts | source uses Recharts | reproduce chart container/axis/legend palette in current SVG/DOM visualizations | reject Recharts runtime | data semantics | R6–R8/R9 |
| ADR-10 overlays | multiple current z layers | reserve namespaced overlay scale and preserve focus trap/close logic | reject arbitrary z-index | clipping/stacking | R4/R9 |
| ADR-11 responsive sidebar | SalesOps lacks mobile replacement | preserve ORDOSPACE 1024 breakpoint, drawer and bottom tabs | reject SalesOps fixed mobile sidebar | mobile unusable | R5/R9 |
| ADR-12 state selectors | current JS depends on IDs/data attrs | visual states use additive classes/data-state; never rename selectors | reject DOM replacement | functions break | R4–R9 |
| ADR-13 accessibility | SalesOps code has unnamed icon controls | ORDOSPACE labels, focus, keyboard and reduced-motion are authoritative | reject visual-only parity | WCAG regression | all / R9 |
| ADR-14 lifecycle semantics | SalesOps statuses are CRM concepts | only visual tone grammar maps; ORDOSPACE status names/transitions remain | reject sales data/state copy | product corruption | R4–R8 |
| ADR-15 evidence gate | mapping must be traceable | no component styling without matrix ID and source/state evidence | reject global cosmetic pass | slop/unreviewable change | R3–R9 |
