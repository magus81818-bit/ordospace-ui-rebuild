# SalesOps Source Vault Policy

## Boundary

`references/salesops-source-vault` is a read-only evidence archive. It preserves the 57 UI files, 15 Dashboard files, 8 sections, supporting utilities, and original global styles from the named ZIP.

- It is not a workspace package.
- It is absent from application TypeScript includes.
- It is excluded from Build and Type Check.
- Production and UI Lab code must never import from it.
- Next.js imports and missing source dependencies are not fixed in place.
- The license is not inferred. Current status is `not confirmed`.

## Update procedure

1. Confirm the source ZIP path and checksum or archive timestamp.
2. Replace Vault copies only from that source, without code adaptation.
3. Preserve the directory structure and prohibited-file exclusions.
4. Recalculate the 57-item Manifest from the extracted source.
5. Re-run `validate:source-vault`, `validate:ui-catalog`, and `validate:ui-exports`.
6. Port intentional changes separately under `packages/ui-catalog` and document the decision.

Do not copy node_modules, build output, environment files, Git metadata, Vercel metadata, user data, or redundant screenshots into the Vault.
