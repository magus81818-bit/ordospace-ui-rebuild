# @ordospace/design-tokens

Shared ORDO design-token package established in Round 2.

## Layers

1. `primitives.css`: source colors and neutral values translated from SalesOps
2. `semantic.css`: canvas, surface, border, text, accent, status, and chart roles
3. `components.css`: shell dimensions, spacing, radius, border, and elevation
4. `typography.css`: network-independent font stacks and type scale
5. `motion.css`: restrained durations, easing, and reduced-motion overrides

Import the package once:

```css
@import "@ordospace/design-tokens";
```

Both `apps/web` and `apps/ui-lab` consume this package. Do not copy its variables into either app.
