# Derived and Code-only Decisions

UI-022 is Derived from Round 2 `SO-PROGRESS-001` (`components/ui/progress.tsx`). Sales pipeline stages are not copied; the existing four ORDOSPACE project steps, values, labels, and current-step calculation are retained.

UI-027 is Derived from `SO-CHART-001` (`components/ui/chart.tsx`). Only dense surface, hierarchy, connector, grid, and tone grammar are derived; no chart library, SalesOps data, or numeric reinterpretation is introduced.

UI-029 is Adapted from code-only `SO-DIALOG-001` (`components/ui/dialog.tsx`). The live SalesOps site is not claimed as an identical modal. Round 4 overlay tokens and the existing controller remain authoritative. The only product correction is additive focus containment and reliable focus return; lifecycle/action listeners are not duplicated.

All other rows use the exact Round 2 mapping. No React, Next, Radix, Recharts, sales terminology, CRM fixtures, remote font, or information architecture is copied.
