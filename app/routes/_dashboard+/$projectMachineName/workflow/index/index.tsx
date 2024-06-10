import { Fragment } from "react";
import { ActionFunctionArgs, LinksFunction, json } from "@remix-run/node";

import reacflowStyles from "reactflow/dist/style.css?url";
import WorkflowBuilder from "~/components/WorkflowBuilder";
import { useLoaderData } from "@remix-run/react";
import { fetchWorkflows } from "./query.server";
import PageHeader from "~/components/PageHeader";
import { createRequirement, saveWorkflow } from "./mutations.server";
import { invariant } from "@epic-web/invariant";
import { formatMachineName } from "~/lib/utils.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: reacflowStyles },
];

export async function loader() {
  const workflow = await fetchWorkflows();
  return json({
    workflow: workflow?.workflow,
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const projectMachineName = params.projectMachineName;
  invariant(projectMachineName, "projectMachineName is required");
  const formData = await request.formData();
  const intent = formData.get("_intent") as string;

  console.log("intent", intent);
  if (intent === "saveWorkflow") {
    const data = await saveWorkflow(
      formData.get("workflow") as string,
      projectMachineName
    );
  }
  if (intent === "requirement-create") {
    const requirementName = formData.get("requirement") as string;
    const machineName = formatMachineName(requirementName);
    const edgeId = formData.get("edgeId") as string;

    const createdRequirement = await createRequirement({
      requirementName,
      edgeId,
      machineName,
    });
    return json({ success: true });
  }

  return null;
}

export default function WorkflowIndex() {
  const { workflow } = useLoaderData<typeof loader>();
  return (
    <Fragment>
      <PageHeader
        title="Workflow Builder"
        description="Drag and drop nodes to build your workflow."
      />
      <WorkflowBuilder
        initialNodes={workflow.nodes}
        initialEdges={workflow.edges}
      />
    </Fragment>
  );
}
