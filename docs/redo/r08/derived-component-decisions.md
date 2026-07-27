# Derived component decisions

## UI-040 QC checklist

SalesOps has no QC checklist counterpart. Round 2 therefore classifies UI-040 as Derived from SO-INPUT-001.

The derivation borrows only the approved Input grammar: dark control surface, thin border, compact density, label/helper hierarchy, focus-visible ring, checked/unchecked feedback, disabled state, and error/helper treatment. ORDOSPACE-specific structure is preserved:

- checklist length and item labels come directly from `card.qcChecklist`;
- each input keeps its existing index and checked value;
- `updateQc(card, index, checked)` remains the only mutation path;
- no item is added, removed, or auto-completed;
- `canWorkerSubmit` remains the blocker authority;
- the fieldset/legend, unique input IDs, labels, helper text, and keyboard operation provide the accessible group contract.

This is not an Exact port because the SalesOps source has no checklist. It is not a generic recolor because the Worker control anatomy, lifecycle blocker, state set, and browser evidence are implemented explicitly.

