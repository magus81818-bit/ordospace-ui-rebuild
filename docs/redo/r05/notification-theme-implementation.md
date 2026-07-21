# Notification and theme implementation

Operating notification fixtures, targets, categories, read state, and storage are unchanged. The renderer now safely supports an accessible empty result and wraps long title/description content. QA-only fixtures proved empty and long-content states at 1440×1000 and 390×844, including internal scroll, mixed unread/read items, containment, outside click, Escape, and focus return.

Theme choices remain `light`, `dark`, and `system`, persist under the existing `ordo_theme` key, and publish `aria-pressed`. Disabled theme and drawer specimens are test-only DOM fixtures; they do not change the operating default.
