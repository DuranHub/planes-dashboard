import { Link, NavLink, Outlet, json, useLoaderData } from "@remix-run/react";
import { graphql } from "gql.tada";
import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { graphqlClient } from "~/graphql/client.server";

export const loader = async () => {
  const projectsQuery = graphql(`
    query ProjectList {
      findManyProject {
        id
        name
      }
    }
  `);

  const projects = await graphqlClient.query(projectsQuery, {});

  return json({
    projects: projects.data?.findManyProject ?? [],
  });
};

export default function Layout() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Fragment>
      <PageHeader
        title="Projects"
        description="A workflow is a sequence of tasks that processes a set of data."
      />
      {projects.length === 0 ? (
        <article className="px-4">
          <Outlet />
        </article>
      ) : (
        <div className="flex">
          <aside className="basis-1/4">
            <div className="flex justify-center items-center pt-4 mb-8">
              <Button variant="default" asChild>
                <Link to="/projects/create">Create Project</Link>
              </Button>
            </div>
            <ScrollArea className="h-[80vh] w-full">
              <ul className="w-full h-full">
                {projects.map((project) => (
                  <li key={project?.id}>
                    <NavLink
                      to={`/projects/${project?.id}`}
                      className={({ isActive }) =>
                        "w-full text-left block h-full transition-colors py-2 px-2 " +
                        (isActive ? " bg-red-300 border-0" : "hover:bg-red-200")
                      }
                      key={project?.id}
                    >
                      <div className="text-sm">{project?.name}</div>
                    </NavLink>
                    {/* <Separator /> */}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </aside>
          <article className="w-full px-4">
            <Outlet />
          </article>
        </div>
      )}
    </Fragment>
  );
}
