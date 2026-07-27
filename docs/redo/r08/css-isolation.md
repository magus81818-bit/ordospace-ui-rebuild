# CSS isolation

Worker styling begins with `body.auth-on` and is restricted to `#screen-worker-home` and `#screen-worker-cards`.

The static audit reports:

- Worker screen selectors: 2
- Admin, Client, Profile, public, and Shell selectors: 0
- generic global selectors: 0
- raw colors: 0
- unresolved variables: 0
- new `!important`: 0
- remote fonts added: 0
- token references: 101, all resolved

The stylesheet is switched off during browser geometry comparison; Sidebar, Header, main origin, mobile header, and bottom tabs remain identical at all six Worker viewports.

