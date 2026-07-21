# Bundle baseline

| Build | Main JavaScript | Difference | Increase |
| --- | ---: | ---: | ---: |
| Round 4 | 504,030 bytes | — | — |
| Round 5 | 514,908 bytes | +10,878 bytes | +2.16% |

The measurement uses the largest generated JavaScript asset after a production build. Round 5 adds no dependency: it reuses React, React Router, Lucide, and `@ordospace/ui-catalog`. The existing Vite 500 kB warning remains, but growth is below the 10% analysis threshold and far below the 20% failure threshold. Code splitting is intentionally deferred to a performance round.

