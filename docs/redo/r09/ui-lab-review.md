# UI Lab review

## Source

- Artifact: `artifacts/redo/r09/ui-lab-audit.json`.
- Browser specification: `tests/redo/r09/integration-audit.spec.cjs`.
- Evidence root: `evidence/redo/r09/ui-lab/`.

## Methodology

- UI Lab was opened through its development-only route guard.
- Official navigation was inspected for accidental exposure.
- API calls and storage values were measured before and after interaction.
- Token, primitive, Shell, Admin, Client, Worker, and Derived specimens were counted.
- Keyboard tabs, invalid-form focus, visible focus, and reduced motion were exercised.
- Desktop, tablet, and mobile containment was measured.

## Pass criteria

- The route must remain development-only and absent from official menus.
- API call count must be zero.
- Storage must remain byte-identical.
- All specimen category minimums must be met.
- Keyboard, focus, reduced-motion, and containment checks must pass.

## Measured result

- Viewport cases: 3 of 3 passed.
- Official menu exposure: 0.
- API calls: 0.
- Storage mutations: 0.
- Primitive specimens: at least 15 in every case.
- Shell specimens: 4; Admin: 5; Client: 3; Worker: 2.
- Result: PASS.

## Risks and limitations

- UI Lab is a verification surface, not a user-facing product route.
- Specimen counts confirm coverage presence, not exhaustive visual permutations.
- Production exposure remains prohibited.

## Decision

- UI Lab remains isolated and provides complete cross-round verification specimens.
