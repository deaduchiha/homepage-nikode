import { ClientRouter } from "react-router";
import { hydrateRoot } from "react-dom/client";
import { Layout } from "./root";

hydrateRoot(
  document,
  <ClientRouter>
    <Layout>
      <ClientRouter.Outlet />
    </Layout>
  </ClientRouter>
); 