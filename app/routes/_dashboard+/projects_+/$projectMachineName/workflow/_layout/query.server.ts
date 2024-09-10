import { graphql } from "gql.tada";
import { Edge, Node, isNode, isEdge } from "@xyflow/react";
import { graphqlClient } from "~/graphql/client.server";

type NodeWithData = Node<{ label: string }>;

export type Workflow = {
  nodes: NodeWithData[];
  edges: Edge[];
};

export async function fetchWorkflows() {
  const workflowQuery = graphql(`
    query workflow {
      findFirstProject {
        workflow
      }
    }
  `);

  const { data, error } = await graphqlClient.query(workflowQuery, {});
  if (error || !data?.findFirstProject) {
    throw new Error("Failed to fetch workflows");
  }
  const { workflow } = data.findFirstProject;
  const { nodes, edges } = workflow as Workflow;

  const validatedNodes = nodes.every((node) => isNode(node));
  const validatedEdges = edges.every((edge) => isEdge(edge));

  if (!validatedNodes || !validatedEdges) {
    throw new Error("Invalid nodes or edges");
  }

  return { workflow };
}
