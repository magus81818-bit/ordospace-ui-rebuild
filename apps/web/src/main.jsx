import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ModuleCardStoreProvider } from "./cards/ModuleCardStoreContext.jsx";
import { router } from "./router.jsx";
import { SessionProvider } from "./session/SessionContext.jsx";
import "./styles.css";
import "./design-system/tokens.css";
import "@ordospace/ui-catalog/styles.css";
import "./styles/migration.css";
import "./styles/shell.css";
import "./styles/dashboard.css";
import "./styles/admin-operations.css";
import "./styles/client-approval.css";
import "./styles/worker-workspace.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionProvider>
      <ModuleCardStoreProvider>
        <RouterProvider router={router} />
      </ModuleCardStoreProvider>
    </SessionProvider>
  </React.StrictMode>,
);
