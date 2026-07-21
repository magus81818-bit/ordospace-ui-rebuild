# Admin detail IA

`AdminCardReviewPage` presents Card identity and central status/attention badges, state-specific guidance, a read-only review summary, the preserved detail panels, and an Admin action panel. The summary uses only real assignee, client, QC, priority, hours, due date, and progress data.

At 1280px and above, review content and the sticky action panel form two columns. Below 1280px they return to document flow; mobile stacks identity, summary fields, and actions. The action panel renders the existing review form only when its existing condition allows it. Client-review, revision, approved, and work-in-progress states remain read-only from the Admin UI unless an existing handler says otherwise.
