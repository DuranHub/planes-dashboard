import { flatRoutes } from "remix-flat-routes"
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools/vite";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [remix({
    ignoredRouteFiles: ['**/*'],
    routes: async defineRoutes => {
      return flatRoutes('routes', defineRoutes)
    }
  }),
  tsconfigPaths(),
  remixDevTools()
  ],
});
