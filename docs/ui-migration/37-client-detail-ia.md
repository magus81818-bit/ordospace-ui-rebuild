# Client detail IA

The detail surface orders information as delivery identity, approval summary, delivered work, revision reason, review history, and decision panel. It deliberately omits assignee identity, worker email, internal notes, estimates, deadlines, priority, raw QC data, and unavailable attachment/evidence concepts.

At 1280px and above, review content and the sticky decision column form two columns. Below 1280px they return to document flow. Mobile uses single-column summary fields and full-width decision actions.

`client_review` shows the existing approve/revision form. `approved` and `revision_requested` render the existing panel's readonly status guidance without a form. A client-visible comment supplies the revision reason when present.
