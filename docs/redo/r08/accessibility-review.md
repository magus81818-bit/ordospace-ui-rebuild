# Accessibility review

Twelve independent browser scenarios are recorded with `scenario`, `measurement`, `expected`, `actual`, `measured`, and `pass`:

- pressed state for filters and selected work cards;
- named QC fieldset and label association;
- labelled work-log fields and associated validation;
- disabled reason for review submission;
- native disabled submit, pending busy/loading state, and duplicate-call protection;
- visible focus;
- reduced-motion behavior;
- long-content wrapping;
- Worker Home KPI count and Worker Cards QC progress text;
- 390px control containment and polite live feedback.

The state matrix contains 87 implemented states with direct screenshot evidence and a concrete `test file::test title#inventory/state` assertion name, plus 203 specifically reasoned not-applicable states. Invalid status, generic assertion, missing evidence, directory-only evidence, deferred, and missing counts are all zero.
