import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { graphql } from "gql.tada";
import Navigation from "~/components/navigation/Navigation";
import { graphqlClient } from "~/graphql/client.server";
import { authenticator } from "~/services/auth/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const findAllProjectsQuery = graphql(`
    query FindAllProjects {
      findManyProject {
        id
        machineName
        name
        nodes {
          id
          fromArrows {
            id
            label
          }
        }
      }
    }
  `);

  const { data, error } = await graphqlClient.query(findAllProjectsQuery, {});
  if (error) {
    throw new Response("Error fetching projects", { status: 500 });
  }

  return {
    procedures: data?.findManyProject.map((project) => ({
      label: project.name,
      links: project.nodes.flatMap((node) =>
        node.fromArrows.map((arrow) => ({
          to: `/projects/${project.machineName}/${node.id}/${arrow.id}`,
          text: arrow.label,
        }))
      ),
    })),
  };
}

export default function Layout() {
  const { procedures } = useLoaderData<typeof loader>();
  return (
    <main className="flex-auto flex flex-col lg:flex-row overflow-hidden min-h-screen">
      <Navigation procedures={procedures} />
      <article className="w-full bg-background h-full py-4">
        <Outlet />
      </article>
    </main>
  );
}
