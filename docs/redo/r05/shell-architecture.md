# Shell architecture

`index.html` retains the stable shell DOM. `app/layout/app-shell.js` renders role-driven content from `app/config/app.config.js`. `dashboard-salesops.shell.css` is an additive, `body.auth-on`-scoped presentation layer consuming Round 3 tokens. The 240px sidebar, 64px desktop header, mobile breakpoint, main origin, route containers, and render timing are preserved.
