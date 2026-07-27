# QC lifecycle contract

UI-040 retains the existing ModuleCard QC contract.

- Source: `card.qcChecklist`
- Mutation: `ORDO_MODULE_CARD_LIFECYCLE.updateQc(card, index, passed)`
- Review eligibility: `ORDO_MODULE_CARD_LIFECYCLE.canWorkerSubmit(card, ORDO_CURRENT_WORKER)`
- Persistence/API behavior: unchanged lifecycle service

Browser checks prove three original items, checked and unchecked values, blocked and disabled presentation, Space-key operation, label association, accessible group naming, submit blocking, and route-reload restoration. The QA fixture uses a page-local lifecycle spy, performs zero API calls, does not mutate operating localStorage, and restores by navigation.

