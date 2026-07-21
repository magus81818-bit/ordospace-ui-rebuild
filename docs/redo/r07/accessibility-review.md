# Accessibility Review

The corrected artifact contains measured assertions rather than summary booleans. Progress checks require at least four elements, non-empty accessible names, min/max/current range validity, and visual width equality. Current step, pressed filters, tab selection/controls, queue keyboard selection, and live detail semantics are asserted against the DOM.

Dialog checks exercise accessible name, `aria-modal`, initial focus, Shift+Tab and Tab containment, background focus blocking, Escape, hidden state, `aria-hidden`, body scroll restoration, trigger focus return, backdrop close, and mobile bounds.

Decision checks exercise disabled click/keyboard blocking, zero lifecycle calls while invalid, invalid association and focus, exact-once revision/approve service spies, correct card IDs, and unchanged localStorage. Reduced motion is emulated for all tests.

`count() >= 0` and the former hardcoded `tabs: true` style summaries are removed. The validator scans for both patterns and requires `invalidAssertionsFound: 0` and `hardcodedAccessibilityPassCount: 0`.
