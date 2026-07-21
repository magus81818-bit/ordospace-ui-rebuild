# Round 9 Accessibility Hardening

| Area | Before / issue | Fix or retained contract | Evidence | Remaining gap |
|---|---|---|---|---|
| Heading / landmarks | possible cross-screen drift | one rendered `h1`, one shell `main`, labelled asides | static + 50 browser captures | screen-reader lab deferred |
| Skip link | existed | browser focus and activation to `#main-content` verified | `skip-link-focus.png` | none found |
| Navigation | desktop/rail labels duplicated | unique desktop, compact and mobile labels | browser metrics | none found |
| Focus | global token existed | retained `:focus-visible`; Sheet/Menu keyboard regression | accessibility captures | OS high-contrast manual test deferred |
| Forms / errors | feedback was announced but not referenced | stable feedback IDs, `aria-describedby`, client `aria-invalid` | validation + revision error capture | field-specific Admin mapping deferred |
| Disabled reason | visible Worker explanation existed | stable accessible reason node retained | worker-disabled capture | none found |
| Status / progress | label and dot existed; invalid values could leak | value clamp/null handling and ARIA defaults | unit/static tests | none found |
| Table | internal scroll existed | labelled scroll container, semantic table retained | responsive browser pass | external screen-reader table pass deferred |
| Sheet / dropdown / tooltip | Radix behavior | focus trap, Escape, focus return and reduced-motion retained | shell + accessibility runs | touch screen-reader pass deferred |
| Contrast | semantic dark tokens | neutral primary/secondary/tertiary against canvas automatically meet 4.5:1; status surfaces visually inspected | accessibility contract + browser screenshots | exhaustive mixed/status matrix deferred |
| Zoom / motion | policy existed | 200% and reduced-motion scenarios added | dedicated captures | none found |
