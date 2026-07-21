# Client visibility policy

- Card scope remains the existing `clientId === currentUser.id` selector; Round 7 does not widen it or create a new project selector.
- Root rows use the common Client view model, which suppresses assignee labels.
- Detail shows card ID, title, project, status, phase, progress, summary, deliverables, status activity messages, and client-visible revision comments.
- Detail does not render worker/admin email, assignee identity, internal team comments, raw store objects, internal QC detail, estimates, priority, or unrelated cards.
- Common components receive already-scoped cards. Client feature components do not access the store or localStorage.
- Existing activity visibility is not expanded; the same role-scoped card activity already available in Activity Review is reused.
