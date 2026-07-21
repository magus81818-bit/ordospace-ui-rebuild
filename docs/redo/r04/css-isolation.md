# CSS isolation

Every declaration and consumer in `dashboard-salesops.primitives.css` is under `body.auth-on`. It has no `:root`, public-screen, Sidebar/Header-completion or role-page-completion selector.

- Round 3 token dependencies: 64.
- Unresolved variables: 0.
- Raw colors: 0.
- Remote fonts/CDNs: 0.
- Round 4 `!important`: 0.
- Public token/style/box leak: 0 across 18 controls.

Operating table classes retain existing typography and padding; only visual grammar is shared. UI Lab-only table density is explicitly nested under `.ordo-ui-lab`.
