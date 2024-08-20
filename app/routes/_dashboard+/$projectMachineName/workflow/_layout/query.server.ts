import { graphql } from "gql.tada";
import { Edge, Node } from "reactflow";
import { graphqlClient } from "~/graphql/client.server";

type NodeWithData = Node<{ label: string }>

export const edges: Array<Edge> = [] satisfies Edge[];

export async function fetchWorkflows() {
    const workflowQuery = graphql(`
        query workflow {
            findFirstProject {
                workflow
            }
        }
    `)

    const { data, error } = await graphqlClient.query(workflowQuery, {});
    if (error || !data?.findFirstProject) {
        throw new Error("Failed to fetch workflows");
    }
    const { workflow } = data.findFirstProject as {
        workflow: any;
    };

    return { workflow };
}