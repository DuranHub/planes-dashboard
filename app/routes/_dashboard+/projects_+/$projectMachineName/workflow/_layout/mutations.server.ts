import { graphqlClient, graphql } from "~/graphql/client.server";
import { Workflow } from "./query.server";

export async function addNode(
  node: Workflow["nodes"][0],
  projectMachineName: string
) {
  const addNodeMutation = graphql(`
    mutation AddNode($node: NodeCreateInput!) {
      createOneNode(data: $node) {
        id
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(addNodeMutation, {
    node: {
      label: node.data.label,
      type: node.type === "comment" ? "COMMENT" : "NODE",
      meta: {
        position: {
          x: node.position.x,
          y: node.position.y,
        },
      },
      description: "TODO",
      Project: {
        connect: {
          machineName: projectMachineName,
        },
      },
    },
  });

  if (error || !data) {
    return {
      errors: error,
    };
  }

  return data.createOneNode;
}

export async function updateNodePosition({
  id,
  position,
}: {
  id: string;
  position: { x: number; y: number };
}) {
  const updateNodeMutation = graphql(`
    mutation UpdateNodePosition($id: String!, $x: Float!, $y: Float!) {
      updateOneNode(
        data: { meta: { position: { x: $x, y: $y } } }
        where: { id: $id }
      ) {
        id
        meta
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(updateNodeMutation, {
    id,
    x: position.x,
    y: position.y,
  });

  if (error) {
    return { errors: error };
  }

  return data?.updateOneNode;
}

export async function addArrow(arrow: { source: string; target: string }) {
  const addArrowMutation = graphql(`
    mutation AddArrow($arrow: ArrowCreateInput!) {
      createOneArrow(data: $arrow) {
        id
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(addArrowMutation, {
    arrow: {
      label: `arrow`,
      target: {
        connect: {
          id: arrow.target,
        },
      },
      source: {
        connect: {
          id: arrow.source,
        },
      },
      arrowData: {
        create: {
          indicators: {},
          procedure: {},
          responsability: {
            create: {},
          },
          requirements: {
            create: [],
          },
        },
      },
    },
  });
  console.log(error);

  if (error || !data) {
    return {
      errors: error,
    };
  }

  console.log(data);

  return data.createOneArrow;
}

export async function deleteNode(id: string) {
  const DELETE_NODE = graphql(`
    mutation DeleteNode($id: String!) {
      deleteOneNode(where: { id: $id }) {
        id
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(DELETE_NODE, {
    id,
  });

  if (error || !data) {
    console.log(error?.message);
    return { errors: error };
  }

  return data;
}

export async function deleteArrows(ids: string[]) {
  const DELETE_ARROWS = graphql(`
    mutation DeleteArrows($ids: [String!]!) {
      deleteManyArrow(where: { id: { in: $ids } }) {
        count
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(DELETE_ARROWS, {
    ids,
  });

  if (error || !data) {
    return { errors: error };
  }

  return data;
}

export async function hasArrows(id: string) {
  const hasArrowsQuery = graphql(`
    query HasArrows($id: String!) {
      findManyArrow(
        where: {
          OR: [
            { source: { id: { equals: $id } } }
            { target: { id: { equals: $id } } }
          ]
        }
      ) {
        id
      }
    }
  `);

  const { data, error } = await graphqlClient.query(hasArrowsQuery, {
    id,
  });

  if (error || !data) {
    return { errors: error };
  }

  return data.findManyArrow;
}

export async function deleteNodeAndArrows(id: string, arrows: string[]) {
  if (arrows.length > 0) {
    const arrowsResult = await deleteArrows(arrows);
  }

  const nodeResult = await deleteNode(id);
  console.log(nodeResult);

  if ("errors" in nodeResult) {
    return { errors: nodeResult.errors };
  }

  return { ...nodeResult };
}

export async function updateNodeLabel(id: string, label: string) {
  const updateNodeLabelMutation = graphql(`
    mutation UpdateNodeLabel($id: String!, $label: String!) {
      updateOneNode(where: { id: $id }, data: { label: { set: $label } }) {
        id
        label
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(
    updateNodeLabelMutation,
    {
      id,
      label,
    }
  );

  if (error || !data) {
    return { errors: error };
  }

  return data.updateOneNode;
}

export async function updateArrowData(
  id: string,
  arrowData: {
    label: string;
    [key: string]: any;
  }
) {
  // @TODO: Add all the arrow data
  const updateArrowDataMutation = graphql(`
    mutation UpdateArrowData($id: String!, $label: String!) {
      updateOneArrow(where: { id: $id }, data: { label: { set: $label } }) {
        id
        label
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(
    updateArrowDataMutation,
    {
      id,
      label: arrowData.label,
    }
  );

  if (error || !data) {
    return { errors: error };
  }

  return data.updateOneArrow;
}
