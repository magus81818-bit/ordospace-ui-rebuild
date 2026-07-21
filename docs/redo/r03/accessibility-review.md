# Accessibility review

## Contrast

| Pair | Ratio | Required | Result |
|---|---:|---:|---|
| Primary text / dashboard | 17.87:1 | 4.5:1 | Pass |
| Secondary text / surface | 10.11:1 | 4.5:1 | Pass |
| Muted text / dashboard | 6.41:1 | 3:1 | Pass |

## Keyboard focus

A real keyboard Tab path reached `#notifTrigger`. The visible treatment is a 2px solid accent outline with a 3px supporting focus shadow. It passed the focus-visible check.

## Names and motion

- 21 visible icon controls were inspected; unnamed controls: 0.
- With `prefers-reduced-motion: reduce`, fast, standard and emphasis motion tokens resolve to `0ms linear`.
- Existing accessible names, roles and keyboard behavior were not rewritten.

Full data is in `artifacts/redo/r03/accessibility-audit.json`.
