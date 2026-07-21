# Component Accessibility Contract

## Keyboard and focus

- Buttons use native button semantics and retain a visible focus ring.
- Tabs use Radix roving focus and support arrow keys.
- Select and DropdownMenu use managed keyboard navigation and restored trigger focus.
- Switch exposes `role=switch` and `aria-checked` through Radix.
- Sheet uses Dialog focus trapping, Escape close, backdrop close, focus restoration, and body scroll lock.
- Horizontal tables keep every column and provide a focusable, named scroll wrapper.

## Names and relationships

- Icon-only buttons require an accessible name.
- Labels use `htmlFor` and matching control IDs.
- Helper and error text should be connected with `aria-describedby`; invalid fields set `aria-invalid`.
- Sheet requires a visible Title and Description unless an equivalent accessible label is intentionally supplied.
- Progress requires a task-specific accessible label and numeric value.

## State cues

StatusBadge combines text with icon or a shape mark, plus border and color. Color is never the only workflow cue. Disabled states keep semantics instead of relying on opacity alone. Loading buttons set `aria-busy`, become disabled, retain label width, and avoid duplicate submission.

## Motion

Sheet transitions, skeleton pulse, spinner, switch, progress, and hover transitions are disabled or reduced under `prefers-reduced-motion: reduce`. Motion is limited to feedback and state transitions.

## Round 3 evidence

The DOM/Chrome interaction suite covers Button, Tabs, Select, Switch, Sheet, DropdownMenu, StatusBadge, MetricCard, ActionGroup, and Manifest. UI Lab also exposes invalid, disabled, loading, empty, error, success, long-content, and overflow examples for manual review.
