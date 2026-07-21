# Token implementation

## Namespace and inventory

All new semantic variables use the `--ordo-so-*` namespace. The machine inventory records 219 unique tokens and 222 declarations; the three additional declarations are intentional reduced-motion overrides.

| Category | Count |
|---|---:|
| Background / Surface | 11 |
| Text | 12 |
| Border | 9 |
| Status | 21 |
| Typography | 29 |
| Radius | 9 |
| Shadow | 5 |
| Geometry | 11 |
| Overlay | 9 |
| Chart | 12 |
| Interaction | 87 |
| Responsive | 4 |
| **Total** | **219** |

Forty tokens are consumed by the minimal Round 3 bridge; 179 are reserved for evidence-gated Round 4+ migrations.

## Source translation

The values translate the supplied SalesOps ZIP, live deployment, official v0 template and screenshots into ORDOSPACE semantic names. Neutral near-black surfaces, restrained borders, green accent/status grammar, compact typography, radii, shadows, focus rings and motion timings are retained. Sales vocabulary, navigation structure, fake sales data and SalesOps page layout are not imported.

## Compatibility bridge

Twelve legacy `--dk-*` aliases map the existing dark-layer consumers to the new semantic tokens. Sixteen `!important` declarations are limited to legacy status-badge and progress selectors that already participate in important cascades. The validator rejects any broader use.
