# Backend Contract

The copied static product preserves the existing `ordo-api-base` runtime meta configuration and `app/config/api.config.js` resolution rules. Production-like deployments use the existing Render origin declared by the source product; localhost retains its local-backend fallback. Authentication, session restoration and ModuleCard API calls remain owned by the copied services. No endpoint, payload, credential, environment variable or backend project was changed.
