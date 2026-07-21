# Current shell audit

## Baseline

- Root layout: `router.jsx` mounted one `AppShell` around every route.
- Router: one `createHashRouter`; public, auth, workspace redirect, three role roots, three role detail routes, and wildcard fallback.
- Guard: `RequireRole` in `App.jsx` redirects unauthenticated users to `/auth?next=...` and cross-role access to the signed-in role root.
- Providers: `SessionProvider` and `ModuleCardStoreProvider` are mounted once in `main.jsx`.
- Session: the former shell read session state and called the existing `signOut` action.
- Outlet: the former shell rendered `Outlet` inside its main column.
- Navigation and header: a 260px grid sidebar contained public and role links; there was no route-aware header, compact rail, mobile Sheet, or route metadata.

## Coupling points changed

Only the former `AppShell` presentation was extracted from `App.jsx`. `router.jsx` now imports the shell module. Route paths, guards, providers, screen components, store actions, persistence keys, and domain behavior are unchanged.

## Existing route reality

Each role currently has one real navigable list route and one parameterized detail route. Projects, teams, audit, settings, and profile routes do not exist, so Round 4 does not invent links for them.

