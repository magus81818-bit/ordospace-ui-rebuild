# Work log contract

The inline form preserves the Worker requirement to enter work time and work content and append a real log through the existing lifecycle service.

- Fields: `hours` and `text`
- Hours: required, numeric, step 0.5, range 0.5–24 MH
- Text: required, maximum 240 characters
- Append: one call to `addWorkLog(card, "<hours>h · <text>", workerId)`
- Feedback: focusable associated validation error and polite success status
- Duplicate protection: submit is disabled and busy while handling the call

No endpoint, storage key, input unit, or lifecycle implementation changes. Browser checks cover empty hours, out-of-range hours, empty text, error association/focus, one append, duplicate blocking, success feedback, and no operating storage/API mutation.

