# Admin accessibility

- One page `h1` identifies the card; Shell context remains non-heading.
- Review Queue cards expose textual ID, title, status, attention label, progress, QC, and named detail links.
- Status and attention are visually distinct and both have text, not color alone.
- Review summary uses a semantic definition list and Progress ARIA values.
- The Admin action region is an `aside` with an accessible label and existing labeled form fields.
- Sticky behavior is disabled below 1280px and never creates an internal scroll trap.
- All queue, form, and navigation actions retain keyboard focus styles and mobile document overflow remains false.
