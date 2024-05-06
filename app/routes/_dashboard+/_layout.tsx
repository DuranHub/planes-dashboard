import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Navigation from "~/components/navigation/Navigation";
import { authenticator } from "~/services/auth/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return {
    procedures: [],
  };
}

export default function Layout() {
  const { procedures } = useLoaderData<typeof loader>();
  return (
    <main className="flex-auto flex flex-col lg:flex-row overflow-hidden min-h-screen">
      <Navigation procedures={procedures} />
      <div className="w-full bg-background h-full py-4">
        <Outlet />
      </div>
    </main>
  );
}
