# Frozen public baseline

The following surfaces are immutable throughout the SalesOps dashboard migration: landing, authentication, inquiry, terms, privacy, support, and the unauthenticated workspace-selection presentation. Dashboard styling must remain scoped to authenticated application surfaces and must not leak into these pages.

## Screenshot matrix

Every listed route was captured at desktop `1440×1000`, tablet `1024×1366`, and mobile `390×844`:

- `landing-{viewport}-{size}.png`
- `auth-{viewport}-{size}.png`
- `terms-{viewport}-{size}.png`
- `privacy-{viewport}-{size}.png`
- `support-{viewport}-{size}.png`
- `select-workspace-{viewport}-{size}.png`

Additional desktop state captures:

- `inquiry-modal-desktop-1440x1000.png`
- `auth-forgot-desktop-1440x1000.png`
- `auth-forgot-sent-desktop-1440x1000.png`

All files are under `evidence/redo/r01/frozen-public/`. Captures use the baseline product files from commit `937d38b` and the same installed Chrome channel used by the Playwright audit.

## Frozen behavior

- exact navigation labels, Korean copy, marketing content, illustration/demo sections, FAQ content, and footer;
- exact public typography, colors, spacing, borders, radii, shadows, imagery, motion, and responsive behavior;
- inquiry open/close/return-hash and form validation/notification behavior;
- login, forgot, forgot-sent, resend, reset, reset-complete, validation, loading, and error behavior;
- terms/privacy/support long-form content and links;
- no authenticated sidebar/topbar/mobile dashboard shell on an `AUTH_OFF` route;
- no SalesOps navigation, sales terminology, fixture data, or dashboard styling on any public surface.

## Regression rule

Later-round public comparisons use this directory as the immutable visual baseline. Pixel differences require explicit explanation; a difference caused by intended dashboard work is a failure. Font rasterization, browser-version antialiasing, and capture timestamps may be reported as environmental noise only when the DOM, computed layout, and visual review confirm no product change.

## Round 1 result

All 18 route/viewport captures and three additional public state captures passed visibility, correct `auth-off` shell state, and meaningful-content checks. This round made no product changes, and source parity confirms that the frozen screenshots correspond to the protected source commit.
