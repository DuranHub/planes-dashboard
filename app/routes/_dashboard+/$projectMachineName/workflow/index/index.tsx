import { Fragment } from "react";
import { ActionFunctionArgs, LinksFunction, json } from "@remix-run/node";

import reacflowStyles from "reactflow/dist/style.css?url";
import WorkflowBuilder from "~/components/Blocks/WorkflowBuilder";
import { useLoaderData } from "@remix-run/react";
import { fetchWorkflows } from "./query.server";
import { createEdge, createNode, updateNode } from "./mutations.server";
import PageHeader from "~/components/PageHeader";

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
      <PageHeader title="Workflow Builder" description="Drag and drop nodes to build your workflow." />
      <WorkflowBuilder
        initialNodes={workflow.nodes}
        initialEdges={workflow.edges}
      />
    </Fragment>
  );
}
