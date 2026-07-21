# Build and Runtime Contract

- Package manager: npm with committed `package-lock.json`; clean install is `npm ci`.
- Node contract: `>=20.19.0`; audited runtime Node 24.15.0/npm 11.12.1.
- Workspace root: `apps/*`, `packages/*`.
- Root web build: `npm run build` → `npm run build --workspace @ordospace/web`.
- Web build: Vite → `apps/web/dist`.
- Vercel method: repository root, `npm ci`, `npm run build`, output `apps/web/dist`, framework `vite`.
- Hash routing needs no server rewrite.
- Runtime needs no environment variables; state is local demo `localStorage`.
- UI Lab and QA scripts are validated locally but excluded from the publish output.
