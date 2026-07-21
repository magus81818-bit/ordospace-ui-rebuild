# Responsive shell policy

| Range | Navigation | Header | Main offset | Gutter |
| --- | --- | --- | --- | --- |
| `<768px` | left Sheet | 56px mobile header | none | 16px |
| `768–1023px` | fixed 72px rail | sticky app header | 72px | 20px |
| `>=1024px` | fixed 260px sidebar | sticky app header | 260px | 24px |
| `>=1440px` | same shell, fluid content | same | 260px | 24px |

Shell dimensions use Round 2 tokens. `min-width: 0`, bounded Sheet width, ellipsis on identity fields, and document-level overflow containment prevent horizontal pressure. Tables may retain their own internal scrolling. No sidebar preference, hover expansion, resize state, or localStorage coupling was added.

