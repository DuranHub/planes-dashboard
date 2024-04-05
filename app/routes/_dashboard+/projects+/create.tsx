import type { ActionFunctionArgs } from "@remix-run/node";
import { graphql } from "gql.tada";
import ProjectCard from "~/components/Blocks/Projects/ProjectCard";
import { graphqlClient } from "~/graphql/client.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const createProjectQuery = graphql(`
    mutation CreateProject($input: post_projects_request_Input!) {
      post_projects(input: $input) {
        id
      }
    }
  `);

  const result = await graphqlClient.mutation(createProjectQuery, {
    input: {
      name: "New Project 2",
      description: "This is a new project",
      leaderId: "clu4wnu0w0000tj4px6ummufe"
    },
  });
  console.log(JSON.stringify(result, null, 2));

  return null;
};

export default function CreateProject() {
  return <ProjectCard projectName="Create Project" isCreate />;
}
