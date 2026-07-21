# Round 9 Responsive Hardening

- Breakpoints remain mobile `<768`, tablet `768–1023`, desktop `>=1024`, wide `>=1440`.
- Shell widths use `--ordo-sidebar-width`, `--ordo-sidebar-rail-width` and `--ordo-mobile-header-height`; no duplicate `260px` shell constant was added.
- Main/content grids retain `min-width: 0`. Detail sidebars become normal-flow panels below 1280px, so they do not collide with the sticky header.
- Desktop tables are hidden at mobile width and mobile cards become visible; table wrappers keep their own horizontal scroll.
- Browser results at 320, 393, 768, 1024, 1280, 1440 and 1920 all reported `documentOverflow=false`.
- 200% page scale on Admin detail retained access to navigation, content and action surfaces with no document overflow.
- Mobile Sheet width remains viewport-bounded; Escape/route navigation closes it and Radix returns focus.

No official supported minimum width was newly declared. The 320px result is an extreme QA fixture.
