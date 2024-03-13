import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css?url";
import { Toaster } from "./components/ui/sonner";
import { GeneralErrorBoundary } from "./components/ErrorBoundary";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => [
  {
    title: "PlanEs - Planificación Estratégica",
  },
];

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <Document>
      <GeneralErrorBoundary />
      <p>Ooops! Something went wrong.</p>
    </Document>
  );
}

function App() {
  return (
    <Document>
      <Outlet />
      <Toaster richColors expand />
    </Document>
  );
}

export default App;

