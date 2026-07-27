# QC lifecycle contract

UI-040 retains the existing ModuleCard QC contract.

- Source: `card.qcChecklist`
- Mutation: `ORDO_MODULE_CARD_LIFECYCLE.updateQc(card, index, passed)`
- Review eligibility: `ORDO_MODULE_CARD_LIFECYCLE.canWorkerSubmit(card, ORDO_CURRENT_WORKER)`
- Persistence/API behavior: unchanged lifecycle service

The correction suite measures, rather than declares, every contract. It verifies the three original labels and `[true,false,false]` values; name/value/index preservation; group legend and described-by linkage; a separate Space scenario with one `updateQc(mc-005, 1, true)` call; a separate label-click scenario with one index-2 call; and a disabled fixture whose click, Space, and lifecycle call counts remain zero.

The submit blocker is exercised through initial, partial, complete, and unchecked QC states. The existing renderer changes review eligibility without changing card status, API traffic, or normalized operating localStorage. The QA fixture restores the original QC values and service/fetch references, rerenders, and records `restore` only from before/after deep equality.
