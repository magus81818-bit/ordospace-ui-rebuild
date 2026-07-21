# Round 4 QA

## Automated results

- TypeScript typecheck: passed for catalog, web, and UI Lab.
- Existing functional validations: 11/11 passed.
- Token, status map, Source Vault, catalog, and exports validations: passed.
- Navigation, route metadata, and shell contract validations: passed.
- UI catalog and shell tests: passed; shell suite has 16 assertions.
- Web and UI Lab production builds: passed.
- Development and preview browser smoke: 15/15 steps each.
- Shell visual automation: 7 role/viewport scenarios passed with no document horizontal overflow.

## Viewports and interactions

The automated run checks all required 393, 768, 1024, 1280, 1440, and 1920 widths. It verifies desktop Sidebar, tablet Rail, mobile Header/Sheet, role labels, route titles, detail-route active navigation, and open User Menu. The run also verifies Sheet Escape close and trigger focus return plus User Menu Escape close; the existing Smoke verifies logout and session persistence.

Screenshots are stored in `docs/ui-migration/screenshots/round-04/`:

- `admin-desktop-1440.png`
- `admin-tablet-768.png`
- `admin-mobile-nav-open-393.png`
- `worker-desktop-1440.png`
- `client-mobile-393.png`
- `detail-route-active-navigation.png`
- `user-menu-open.png`

## Deliberately unresolved

Legacy dashboard body cards remain visually light and retain their original component styling. This is expected: Round 4 changes the shell only. The web bundle still reports the existing warning that its main JavaScript chunk exceeds 500 kB; it does not fail the build and is deferred from this visual scope.
