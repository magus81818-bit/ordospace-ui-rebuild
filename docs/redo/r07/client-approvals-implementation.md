# Client Approvals Implementation

UI-030 preserves the done-card queue, latest-first ordering, keyboard selection, selected state, and empty meaning. UI-031 preserves the current detail renderer, metadata, attachments, checklist, comments, and no-selection meaning; evidence includes queue empty, no selection, and long mobile detail.

UI-032 retains the existing ActionToolbar order and lifecycle calls. The correction tests a disabled page-local control for pointer/keyboard blocking, an invalid control with `aria-invalid`, `aria-describedby`, visible error and focus movement, plus safe spies on the actual revision and approve buttons. Each actual binding calls the correct lifecycle method exactly once with the selected card ID. `persist` is replaced by a no-op spy, and localStorage snapshots remain byte-equal.

The current renderer has no confirm step, so confirm is `not_applicable` with that explicit renderer-contract reason; no new product workflow was invented.
