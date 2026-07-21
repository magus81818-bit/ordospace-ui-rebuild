# Client current flow audit

- Routes remain `/workspace/client` and `/workspace/client/cards/:cardId` behind `RequireRole role="client"`.
- `getCardsForRole` exposes every card whose `clientId` matches the signed-in client. Round 7 preserves this selector instead of inventing a delivery-only permission rule.
- A decision is allowed only when the card belongs to the actor and has `client_review` status, through `canClientDecideModuleCard`.
- `decideClientModuleCard` remains the only UI entry to `buildClientModuleCardDecision`. Approval moves to `approved`; a revision request moves to `revision_requested`, increments the revision count, blocks QC, and writes activity plus an optional client-visible comment.
- Revision requests require a nonblank note and all decision notes retain the 240-character limit.
- Before Round 7, Client Root used the generic dashboard and detail used the generic module panel, exposing the decision form before the review context and mixing internal-facing fields into the summary.
- Round 7 targets visual priority, decision clarity, and narrower field rendering. Routes, selectors, transitions, storage keys, and handlers remain unchanged.

Deferred: attachments, evidence, approval snapshots, versions, backend APIs, profile/settings routes, and analytics.
