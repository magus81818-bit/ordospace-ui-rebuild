# Work log contract

The inline form preserves the Worker requirement to enter work time and work content and append a real log through the existing lifecycle service.

- Fields: `hours` and `text`
- Hours: required, numeric, step 0.5, range 0.5–24 MH
- Text: required, maximum 240 characters
- Append: one call to `addWorkLog(card, "<hours>h · <text>", workerId)`
- Feedback: focusable associated validation error and polite success status
- Duplicate protection: submit is disabled and busy while handling the call

No endpoint, storage key, input unit, or lifecycle service argument changes. The Worker handler now accepts both the existing synchronous result and a Promise through `Promise.resolve`, exposing a truthful pending state while preserving the same `addWorkLog(card, payload, workerId)` contract.

Empty hours, `0` hours, and empty text run from independent initial states and each measure zero lifecycle calls, focus, `aria-invalid`, the associated error ID, and exact feedback. A valid pending spy measures one call with the correct card/worker/payload, native disabled plus `aria-busy`, `추가 중`, click/Enter/Space duplicate rejection, success feedback, busy clearing, API calls zero, and before/after restore equality.
