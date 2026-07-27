# Worker Cards implementation

The existing master-detail layout, six filter values and order, assigned-card order, selected card, status labels, project/deadline/MH metadata, detail sections, and action order are preserved.

- UI-037 exposes the existing button group as pressed filters without inventing tab semantics.
- UI-038 applies selectable Card anatomy with selected, revision, overdue, hover, focus, and no-result treatment.
- UI-039 retains Recipe, QC, work logs, attachments, comments, and the final action area.
- UI-040 keeps every checklist item and checked value; its Derived rationale is documented separately.
- UI-041 replaces the blocking prompt with an inline form while still calling the existing `addWorkLog` service exactly once. It validates 0.5–24 MH and non-empty content, and keeps disabled/busy/loading feedback until synchronous or Promise-like results settle.
- UI-042 uses `canWorkerSubmit` for enabled state and `submitWorkerReview` for the transition. Busy state prevents duplicate calls.

Mobile keeps the same content and action order in a one-column containment policy with no document-width overflow.

The correction did not change data arrays, filters, routes, CTA copy, lifecycle service names, service arguments, API paths, storage keys, QC labels, or status directly. `worker-product-diff-audit.json` measures these invariants and documents the Promise-compatible work-log busy state as the only correction behavior addition.
