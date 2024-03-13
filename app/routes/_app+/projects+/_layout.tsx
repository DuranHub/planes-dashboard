import { NavLink, Outlet } from "@remix-run/react";
import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";
import { Heading } from "~/components/ui/heading";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

export default function Layout() {
  const tags = Array.from({ length: 50 }).map((_, i, a) => ({
    name: `Tag ${i + 1}`,
    id: i + 1,
  }));

  return (
    <Fragment>
      <PageHeader
        title="Projects"
        description="A workflow is a sequence of tasks that processes a set of data."
      />
      <div className="flex">
        <aside className="basis-1/4">
          <Heading level="h3" className="mb-4 px-2">
            Search
          </Heading>
          <ScrollArea className="h-[80vh] w-full rounded-md">
            <ul className="w-full h-full">
              {tags.map((tag) => (
                <li key={tag.id}>
                  <NavLink
                    to={`/projects/${tag.id}`}
                    className={({ isActive }) =>
                      "w-full text-left block h-full transition-colors py-2 px-2 " +
                      (isActive ? " bg-red-300 border-0" : "hover:bg-red-200")
                    }
                    key={tag.id}
                  >
                    <div className="text-sm">{tag.name}</div>
                  </NavLink>
                  {/* <Separator /> */}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </aside>
        <article className="w-full border-l-2 border-foreground px-4">
          <Outlet />
        </article>
      </div>
    </Fragment>
  );
}
