# Role isolation review

## Source

- Artifact: `artifacts/redo/r09/role-isolation-audit.json`.
- Browser specification: `tests/redo/r09/integration-audit.spec.cjs`.
- Approved role contract: Round 8 commit `2911cc85922bf32f31d051216aca9f29ed906564`.

## Methodology

- Admin, Client, and Worker sessions were created through the existing session service.
- Every protected dashboard route was opened under its permitted role.
- Cross-role routes were attempted without bypassing the router guard.
- Visible menus, screen IDs, and resulting hashes were recorded.
- Desktop, tablet, and mobile widths were included.

## Pass criteria

- Each role must see only its approved navigation.
- A forbidden route must resolve to the existing 403 flow.
- Session role and hash route must remain consistent.
- No hidden cross-role screen may become visible.
- Every measured case must pass internally.

## Measured result

- Role and viewport cases: 60.
- Passing cases: 60.
- Unauthorized screen exposures: 0.
- Guard bypasses: 0.
- Route or menu mismatches: 0.
- Result: PASS.

## Risks and limitations

- The audit covers repository-defined roles, not hypothetical future roles.
- Server-side authorization remains outside this static browser matrix.
- Production was not deployed or tested in Round 9.

## Decision

- Existing Admin, Client, and Worker isolation is preserved.
