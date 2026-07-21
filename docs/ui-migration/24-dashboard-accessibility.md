# Dashboard accessibility

- Existing screen `h1` remains the sole semantic page heading; Shell page context is not another `h1`.
- Dashboard sections use catalog PanelHeader headings and descriptive text.
- FilterTabs exposes a named group and pressed state; counts remain textual.
- StatusBadge includes a label and marker, so state is not color-only.
- Progress includes visible percentage text and `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.
- Desktop data uses semantic table markup inside the catalog's keyboard-scrollable table region.
- Mobile detail links include the ModuleCard title in their accessible name.
- Empty filtered results describe the condition and provide a named reset action.
- Catalog Button, Input, and Textarea preserve focus-visible and invalid-state styling; existing labels and submit handlers remain connected.

