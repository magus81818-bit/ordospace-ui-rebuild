# Bundle Splitting Decision

Decision: NOT APPLIED

- Round 9 main chunk: 537,384 bytes.
- Round 4 delta: +33,354 bytes (+6.62%); Round 8 delta: +891 bytes (+0.17%).
- The Vite 500kB warning remains visible and is not suppressed.
- The current hash router renders role branches from `App.jsx`; safe role chunking would require route/component restructuring, loading/error UX and new direct-entry tests.
- No large Round 10 runtime feature or dependency is being added, so splitting would add release risk for little proven benefit.
- QA scripts, docs and screenshots do not enter the production graph.

Backlog: profile the deployed initial transfer and implement lazy role modules only if a measured network target justifies the structural change.
