# Round 9 Bundle and Performance Readiness

| Baseline | Main chunk | Delta | Increase |
|---|---:|---:|---:|
| Round 4 | 504,030 B | +33,354 B | +6.62% |
| Round 8 | 536,493 B | +891 B | +0.17% |
| Round 9 | 537,384 B | — | — |

- No production dependency was added.
- Quality scripts and fixtures execute under Node and are absent from the production import graph.
- The increase comes from small accessibility/fallback logic, not a new library or domain screen.
- Vite's 500kB warning remains visible. The 10% baseline warning threshold is not reached.
- Route-level code splitting/manual chunks are intentionally deferred to Round 10, where the benefit can be measured against deployment output.
