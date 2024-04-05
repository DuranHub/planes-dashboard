import { Link, Outlet, useLoaderData } from "@remix-run/react";
import LinkList from "~/components/navigation/LinkList";
import { systemRoutes } from "~/components/navigation/system-routes";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export async function loader() {
  const procedures: unknown[] = [];

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    procedures: [...procedures].map((procedure: any) => ({
      icon: procedure.icon,
      text: procedure.name,
      to: `/procedures/${procedure.id}`,
    })),
  };
}

export default function Layout() {
  const { procedures } = useLoaderData<typeof loader>();
  return (
    <main className="flex-auto flex overflow-hidden min-h-screen">
      <aside className="min-h-full w-[270px] p-4 bg-stone-50 border-r">
        <LinkList links={systemRoutes} />
        <Separator className="my-4" />
        {procedures.length > 0 ? (
          <LinkList links={procedures} />
        ) : (
          <div>
            <p className="text-sm text-gray-500 mb-4">No procedures available</p>
            <Button asChild variant="default" size="sm">
              <Link to="/projects/new">Create Procedure</Link>
            </Button>
          </div>
        )}
      </aside>
      <div className="w-full bg-background h-full py-4">
        <Outlet />
      </div>
    </main>
  );
}
