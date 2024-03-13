import { Fragment } from "react";
import { ActionFunctionArgs, LinksFunction, json } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

import reacflowStyles from "reactflow/dist/style.css?url";
import WorkflowBuilder from "~/components/WorkflowBuilder";
import { useLoaderData } from "@remix-run/react";
import { fetchWorkflows } from "./query.server";
import { createEdge, createNode, updateNode } from "./mutations.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: reacflowStyles },
];

export async function loader() {
  const workflow = await fetchWorkflows();
  return json({
    workflow,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("_intent") as string;

  if (intent === "create") {
    const node = JSON.parse(formData.get("node") as string);
    createNode(node);
  }

  if (intent === "update") {
    const node = JSON.parse(formData.get("node") as string);
    updateNode(node);
  }

  if (intent === "connect") {
    const edge = JSON.parse(formData.get("edge") as string);
    createEdge(edge);
  }

  return null;
}

export default function WorkflowIndex() {
  const { workflow } = useLoaderData<typeof loader>();
  return (
    <Fragment>
      <p className="text-sm text-stone-500 px-4">
        Drag and drop nodes to add them to the canvas, then connect them to
        create a flow.
      </p>
      <WorkflowBuilder
        initialNodes={workflow.nodes}
        initialEdges={workflow.edges}
      />
    </Fragment>
  );
}
