# React MVP functional baseline

## Preserved routes

- `#/`
- `#/auth`
- `#/workspace`
- `#/workspace/admin`
- `#/workspace/admin/cards/:cardId`
- `#/workspace/worker`
- `#/workspace/worker/cards/:cardId`
- `#/workspace/client`
- `#/workspace/client/cards/:cardId`

The app continues to use `createHashRouter`, role guards, demo seed-user selection, and the same route redirects.

## Preserved state contracts

- Session storage key: `ordospace.reactMvp.session.v1`
- ModuleCard store key: `ordospace.reactMvp.moduleCards.v1`
- Store version: `1`
- Roles: `admin`, `worker`, `client`
- ModuleCard statuses: `draft`, `assigned`, `in_progress`, `qc_ready`, `admin_review`, `client_review`, `approved`, `revision_requested`

## Preserved workflows

- Admin creates and assigns ModuleCards.
- Worker updates progress, hours, QC state, and notes.
- Worker submits QC-ready work for admin review.
- Admin sends reviewed work to the client or requests revision.
- Client approves or requests revision.
- Session and ModuleCard state survive refresh through local storage.

## Automated baseline

The copied validators cover seed integrity, session behavior, role-scoped card routes, admin create, worker update and submission, admin review, client decisions, persistence, activity review, and form polish. The browser smoke covers the cross-role lifecycle and refresh persistence.
