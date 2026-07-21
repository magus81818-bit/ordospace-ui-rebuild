# Worker visibility policy

- Card scope remains the existing `assigneeId === currentUser.id` selector.
- Root and detail receive already-scoped cards and never access the store or localStorage.
- Visible fields are card ID, title, project, phase, status, progress, QC, summary, deliverables, Worker-editable form fields, status activity messages, and client-visible revision reason.
- Client identity/email, Admin internal notes, other Worker identity, estimate, priority, raw store data, and unrelated cards are not added.
- The common Worker view model continues to suppress client identity.
