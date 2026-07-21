# Shell accessibility

- A keyboard-visible skip link targets `#main-content`.
- Each role navigation is a named `nav` landmark and the active item uses `aria-current="page"`.
- Compact rail items retain accessible names and expose focus/hover tooltips.
- The mobile menu uses the catalog's Radix Dialog-based Sheet: accessible title/description, focus trap, Escape/backdrop close, scroll lock, and trigger focus return.
- Route changes close the controlled Sheet through React Router location state.
- User menu uses the catalog's Radix DropdownMenu and preserves keyboard navigation and focus return.
- Existing screen `h1` elements remain the semantic top-level heading; the shell page context is deliberately not a second `h1`.
- Reduced-motion rules from the design tokens and catalog disable Sheet and menu motion where requested.

