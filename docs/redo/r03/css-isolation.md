# CSS isolation

## Boundary

The token declaration and every Round 3 consumer are scoped beneath `body.auth-on`. The existing shell lifecycle adds this class for authenticated application states and removes it for logged-out/public states. No JavaScript lifecycle change was necessary.

The stylesheet is loaded after `app.css`, making its cascade position explicit and reviewable. It contains no `:root` override, public-screen selector, remote font, CDN import, Next.js, Radix, shadcn, or ignored type-error escape hatch.

## Static safeguards

The validator confirms:

- no unscoped semantic declarations;
- no public selectors;
- all `--ordo-so-*` references resolve;
- no blank values or accidental duplicate declarations;
- `!important` is restricted to the documented legacy bridges;
- protected routing, session, shell, lifecycle and configuration files match Round 2 byte-for-byte;
- product changes are limited to `index.html` and the new token stylesheet.

## Runtime safeguards

Eighteen public route/viewport checks found no token value on public roots. Token-disabled controls and token-enabled pages had identical DOM, computed styles and bounding boxes. Authenticated 403 and the development-only QA gallery received the intended scope; the gallery remains unavailable outside development mode.
