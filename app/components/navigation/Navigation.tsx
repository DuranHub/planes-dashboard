import { Fragment } from "react";
import { Link } from "@remix-run/react";
import LinkList from "~/components/navigation/LinkList";
import { systemRoutes } from "~/components/navigation/system-routes";
import { Button } from "~/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { Separator } from "~/components/ui/separator";

interface Props {
  procedures: any[];
}

export default function Navigation({ procedures }: Props) {
  return (
    <Fragment>
      <aside className="hidden lg:block min-h-full w-[270px] p-4 bg-stone-50 border-r">
        <LinkList links={systemRoutes} />
        <Separator className="my-4" />
        {procedures.length > 0 ? (
          <LinkList links={procedures} />
        ) : (
          <div>
            <p className="text-sm text-gray-500 mb-4">
              No procedures available
            </p>
            <Button asChild variant="default" size="sm">
              <Link to="/projects/new">Create Procedure</Link>
            </Button>
          </div>
        )}
      </aside>

      {/* Mobile navigation */}
      <Drawer direction="right" shouldScaleBackground={false}>
        <aside className="lg:hidden p-4">
          <DrawerTrigger asChild>
            <Button variant="default" size="sm">
              Menu
            </Button>
          </DrawerTrigger>
        </aside>
        <DrawerContent
          showBar={false}
          className="h-screen top-0 right-0 p-4 left-auto mt-0 rounded-none"
        >
          <LinkList links={systemRoutes} />
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
