# UI Catalog API

All components accept `className` where an underlying DOM element is exposed. Visual values come from ORDO tokens. Examples are executable in UI Lab.

## Primitive API

| Component | Purpose | Main props and variants | States and accessibility | Do not use for |
| --- | --- | --- | --- | --- |
| Avatar | Person or role identity | Root, Image, Fallback | Text/icon fallback; image alt belongs to caller | Decorative status |
| Badge | Generic short metadata | `neutral`, `accent`, `outline` | Text remains the primary cue | Workflow state |
| Button | User action | variants `primary`, `secondary`, `outline`, `ghost`, `destructive`, `link`; sizes `sm`, `md`, `lg`, `icon`; `loading` | Native button, focus-visible, disabled, `aria-busy`, stable label | Navigation that should be an anchor |
| Card | Grouped content | `default`, `muted`, `elevated`, `interactive`, `selected`; Header, Title, Description, Content, Footer | Focus-within for interactive content | A clickable `div`; use a semantic action inside |
| Input | Single-line data | Native input props, `aria-invalid`, read-only | Label by `htmlFor`; helper/error IDs by caller | Rich text |
| Label | Control name | Radix Label props | Activates associated control | Helper copy |
| Select | Controlled choice | Root, Trigger, Value, Content, Item | Keyboard selection and managed focus | Searchable command palette |
| Switch | Boolean setting | Radix checked props | `role=switch`, checked state, focus-visible | Multi-choice selection |
| Tabs | Content switching | Root, List, Trigger, Content | Arrow-key roving focus | Data filter; use FilterTabs |
| Separator | Visual or semantic boundary | horizontal or vertical, decorative by default | Set `decorative=false` when meaningful | Section heading |
| Tooltip | Supplementary hint | Provider, Root, Trigger, Content | Trigger focus support | Required task instructions |
| DropdownMenu | Compact secondary actions | Item, CheckboxItem, Separator, Content | Arrow navigation, disabled and destructive states | Primary action hiding |
| Sheet | Side overlay | Trigger, Content `left` or `right`, Title, Description, Close | Dialog focus trap, Escape, backdrop, scroll lock | Desktop permanent sidebar |
| ScrollArea | Styled bounded overflow | Radix Root props | Native viewport scrolling remains available | Whole-page scrolling |
| Skeleton | Loading placeholder | `text`, `avatar`, `card`, `table-row` | Hidden from accessibility tree; reduced-motion fallback | Error or empty state |
| Table | Semantic tabular data | Header, Body, Footer, Row, Head, Cell, Caption | Native table; wrapper exposes horizontal-scroll label | Sorting or pagination logic |
| Textarea | Multi-line data | Native textarea props, `aria-invalid` | Label and error association by caller | Rich text editor |
| Progress | Determinate progress | `value`, ARIA label/value props | Radix progress semantics | Unknown-duration spinner |

`Field`, `FieldDescription`, and `FieldError` provide a lightweight layout contract. They do not contain validation or React Hook Form integration.

## Pattern API

| Pattern | Purpose | Core props | Do not use for |
| --- | --- | --- | --- |
| MetricCard | Preformatted operational metric | `label`, `value`, optional `delta`, `helper`, `icon`, `loading` | Formatting or calculating numbers |
| StatusBadge | ORDO workflow status | `tone: ok|warn|crit|pend|rej`, `label`, optional `icon` | Arbitrary marketing labels |
| FilterTabs | Dataset filter | `value`, `onValueChange`, `items` | Route navigation or Store access |
| EmptyState | No data or no result | `title`, `description`, `icon`, `action`, `compact` | Loading or error states |
| InlineNotice | Contextual status message | `tone`, `title`, children | Toast queue |
| PanelHeader | Page or panel heading | `eyebrow`, `title`, `description`, `actions` | App-wide Header replacement in Round 3 |
| DataTableShell | Table framing | `title`, `description`, `toolbar`, `columns`, `rows`, `empty`, `loading` | Sorting, pagination, fetching |
| ActionGroup | Action priority policy | one `primary`, up to two visible `secondary`, remaining `overflow` | Making destructive actions primary by default |

```tsx
<MetricCard label="이번 주 완료율" value="86%" delta={{ value: "6%p", direction: "up", tone: "ok" }} />
```
