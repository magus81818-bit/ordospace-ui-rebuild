# Responsive and motion policy

## Responsive behavior

| Range | Navigation | Header | Content | Dense data |
| --- | --- | --- | --- | --- |
| Desktop, ≥1024px | fixed 260px sidebar | sticky 64px | 24px gutter, max 1600px | table-first |
| Tablet, 768–1023px | 72px rail or collapsible sidebar | sticky 64px | 20px gutter | horizontal scroll where needed |
| Mobile, <768px | drawer or sheet, never fixed 260px | compact 56px | full width, 16px gutter | card conversion or explicit horizontal scroll |

Breakpoints are 1024px and 768px. Round 2 defines the policy and tokens but does not replace the existing sidebar. Future shell work must preserve route/role behavior while implementing the policy.

The responsive QA matrix is 393×852, 768×1024, 1024×768, 1280×800, 1440×900, and 1920×1080. UI Lab must avoid clipped text, viewport overflow, overlapping controls, and unusable touch targets at each size.

## Density

Visual density 8 means compact dashboard rhythm without shrinking interactive controls below usable sizes. Desktop controls use 32–40px heights, table rows use 48px, card padding uses 20px, and mobile controls may grow rather than shrink.

## Motion

- fast: 120ms for hover, border, and color feedback;
- normal: 180ms for opacity and small state changes;
- slow: 280ms for restrained entrance or drawer motion;
- travel is minimal and never required to understand state;
- no looping decorative motion in production surfaces.

Both applications implement `prefers-reduced-motion: reduce` by collapsing effective animation and transition duration to 0.01ms, disabling smooth scrolling, and removing the UI Lab motion-preview travel. The base duration tokens stay single-declaration values so the token contract remains deterministic.
