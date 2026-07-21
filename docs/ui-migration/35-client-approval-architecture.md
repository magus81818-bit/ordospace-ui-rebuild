# Client approval architecture

`ClientApprovalPage` composes the common `ModuleCardDashboard`, Client-scoped metrics, `ClientDecisionQueue`, guidance, filters, and the existing responsive list/table. The queue is derived only from actual `client_review` cards and opens detail rather than performing a decision from the list.

`client-approval-view.js` derives category, stable priority, queue, metrics, and the Client extension of the common ModuleCard view model. It copies before sorting and never stores derived categories.

Search is intentionally omitted: the seven-card seed scope and existing status filters provide sufficient control without introducing another interaction contract.

Detail flow: `ClientApprovalDetailPage` renders delivery identity, summary, delivered work, actual history, revision reason when a client-visible comment exists, and the existing decision form inside the decision column.
