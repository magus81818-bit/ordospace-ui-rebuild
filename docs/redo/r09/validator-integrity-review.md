# Validator integrity review

## Source

- Integrity artifact: `artifacts/redo/r09/validator-integrity-audit.json`.
- Independent gate: `tests/redo/r09/validate.cjs`.
- Generator: `tests/redo/r09/generate.cjs`.
- State registry: `tests/redo/r09/state-assertion-registry.cjs`.
- Approved prior source reference: Round 8 commit `2911cc85922bf32f31d051216aca9f29ed906564`.

## Methodology

- Prior Round 1 through Round 8 validators and browser tests are read from Git.
- Their current hashes and test counts are compared to approved Round 8.
- The Round 9 sources are scanned for hardcoded audit-result literals.
- Non-discriminating count assertions are rejected.
- Directory-only evidence and generic assertion bridges are counted.
- Full inventory item internals are traversed independently.
- State registry keys are reconstructed from source artifacts.
- Round 3 and Round 5 keys must exist in the explicit registry and executed audit.
- Required review documents are checked for content depth and audit sections.

## Pass criteria

- No prior assertion may be deleted or expectation changed.
- Hardcoded result detections must be zero.
- Invalid count assertions must be zero.
- Evidence directory and generic assertion counts must be zero.
- Every inventory item must pass its own evidence checks.
- Every implemented state row must resolve to an exact registry key.
- Rows without real assertions must be zero.
- Marker-only and broad-title reuse violations must be zero.
- Required documents must meet line, structure, source, method, criteria, result, and risk checks.

## Measured result

- Prior validator/test sources checked: 9.
- Prior source hash changes: 0.
- Deleted assertion counts: 0.
- Hardcoded audit results: 0.
- Invalid count assertions: 0.
- Directory evidence rows: 0.
- Generic assertion bridges: 0.
- State rows with source state: 488.
- State rows with Round 9 assertions: 40.
- State rows without real assertion: 0.
- Marker-only rows: 0.
- Broad test-title reuse violations: 0.
- Independent item traversal: enabled.
- Fabricated-state detection: enabled.
- Invalid-round-path detection: enabled.
- Result: PASS.

## Risks and limitations

- Static scans target known false-pass patterns and cannot prove all future validator code correct.
- A future source-artifact schema change requires registry-builder maintenance.
- Document depth checks enforce evidence structure but do not substitute for human judgment.
- The final gate still depends on truthful primary browser artifacts, which are rerun in this correction.

## Decision

- The former broad test-title bridge has been removed.
- The validator now rejects missing exact state assertions and shallow review documents.
