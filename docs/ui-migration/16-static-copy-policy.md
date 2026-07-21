# Static Copy Policy

Allowlist: source `index.html` and the runtime `app/` tree required by the existing product. The copied tree contains HTML, generated local Tailwind CSS, product CSS/JavaScript, route/session/API services, role screens, UI components, seed data, QA scripts and the pinned Lucide runtime.

Denylist: `.git`, `.vercel`, `.env*`, `node_modules`, build output, backend source, API source, documentation, screenshots, caches, logs and the source React MVP. No deployment metadata or secret was copied.

The protected source remains unchanged. The new token CSS and `full-surface-redesign.css` exist only in the isolated rebuild repository.
