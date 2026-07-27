# Validator integrity review

Round 3/4 Worker stylesheet isolation and Round 6 Worker descendant recognition retain their API/backend/Shell prohibitions. Their approved source hashes and test counts are compared with Round 8; none changed.

The Round 9 validator does not trust top-level artifact pass flags. It independently traverses every inventory/state row, evidence file, test title and item/state marker, Round 1 baseline case, UI-072/UI Lab measurement, parity pair, CSS result, health listener result, and product diff. It additionally requires zero:

- hardcoded audit result literals
- invalid non-assertions
- generic browser assertions
- missing browser assertions
- accepted directory-only evidence
- expectation relaxations
- fabricated uniform state rows
- invalid `0r*` round paths
