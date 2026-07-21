# Scope Correction

Rounds 1 through 10 redesigned only the separate React MVP dashboard. That artifact did not contain the existing ORDOSPACE landing, inquiry, authentication, workspace selection or complete role surfaces and must not be described as the completed site-wide redesign.

The corrected public product is the existing static ORDOSPACE surface copied read-only from the protected source into `apps/product-static`. Its IA, copy, hash routes, actions, session behavior and backend origin remain intact. The shared ORDO tokens and a presentation-only CSS bridge provide the redesign. `apps/web` is retained as a non-public React MVP experiment.
