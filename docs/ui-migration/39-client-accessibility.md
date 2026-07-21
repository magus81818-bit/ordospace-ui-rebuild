# Client accessibility

- Decision Queue and detail regions have named section/aside landmarks and ordered headings.
- Status is always represented by text plus the common StatusBadge, not color alone.
- Progress exposes numeric ARIA attributes and a visible percentage.
- Root list actions name the review/detail intent; decisions remain in detail to prevent ambiguous mobile action pairs.
- The existing radio group, textarea label, required state, validation feedback, and submit semantics are preserved.
- Readonly states keep explicit textual guidance after the decision form disappears.
- Focus-visible behavior comes from existing catalog and app controls. Mobile retains a single document scroll and no horizontal overflow.
