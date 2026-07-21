# Worker workspace architecture

`WorkerWorkspacePage` composes the common dashboard with Worker-scoped metrics, `WorkerWorkQueues`, guidance, filters, and the existing responsive assigned-work list. Active Queue uses the existing edit/submit policy; Revision Queue highlights actual `revision_requested` cards.

`worker-work-view.js` derives category, stable priority, active/revision queues, metrics, and the Worker extension of the common view model without mutating source cards. Search is omitted because the small assigned-card sets and status filters are sufficient.

`WorkerTaskDetailPage` composes task identity, actual context, revision notice, the existing update form, activity, and the existing submission form. Save and Submit remain distinct existing handlers.
