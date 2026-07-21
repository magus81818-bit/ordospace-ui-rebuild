# Round 9 Role Regression Policy

- Admin keeps the complete ModuleCard management range and Admin actions only.
- Client selection remains `clientId === userId`; client view models omit assignee/email/internal-team fields. Approve/revision stays limited to owned `client_review` cards.
- Worker selection remains `assigneeId === userId`; worker views omit client/internal Admin fields. Update and submit remain delegated to existing policy functions.
- Static policy validation rejects cross-role imports and checks selectors. Existing Admin (7), Client (10) and Worker (9) assertions remain active.
- Browser regressions cover Admin create/review/send, Client decision/error/readonly, and Worker update/submit/readonly. The 15-step smoke flow rechecks persisted state transitions.
- Role guards and hash routing were not changed.
