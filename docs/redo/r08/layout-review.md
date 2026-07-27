# Layout review

The Round 7 approved head `cd70a536a34e5bb23f1ebfd5a6df512893a0b9a6` is the layout baseline.

Across 12 Worker route/viewport cases, enabling and disabling the Worker stylesheet produced a maximum Shell delta of zero. Desktop keeps the 240px sidebar and 64px top bar. At 768px and below the existing mobile header remains 56px and the bottom tabs remain 64px. Section order is unchanged:

- Worker Home: header, KPI, revision, in-progress, pending
- Worker Cards: header, master-detail work area

All six viewport pairs report zero horizontal overflow.

