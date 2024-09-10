import { Fragment, useCallback, useEffect, useState } from "react";
import { ActionFunctionArgs, LinksFunction, json } from "@remix-run/node";
import debounce from "lodash-es/debounce";

import reacflowStyles from "@xyflow/react/dist/base.css?url";
import WorkflowBuilder from "~/components/WorkflowBuilder";
import {
  Outlet,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Workflow, fetchWorkflows } from "./query.server";
import PageHeader from "~/components/PageHeader";
import {
  addArrow,
  addNode,
  deleteNodeAndArrows,
  hasArrows,
  updateArrowData,
  updateNodeLabel,
  updateNodePosition,
} from "./mutations.server";
import { invariant } from "@epic-web/invariant";
import { parseRequest } from "~/lib/utils.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: reacflowStyles },
];

export async function loader() {
  const workflow = await fetchWorkflows();
  console.log(JSON.stringify(workflow, null, 2));
  return json({
    workflow: workflow?.workflow as Workflow,
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const projectMachineName = params.projectMachineName;
  invariant(projectMachineName, "projectMachineName is required");
  const formData = (await parseRequest(request)) as
    | { node: Workflow["nodes"][0]; _intent: "node-move" | "node-add" }
    | { workflow: Workflow; _intent: "workflow-update" }
    | { params: Workflow["edges"][0]; _intent: "edge-add" }
    | { id: string; _intent: "node-delete" }
    | { id: string; label: string; _intent: "update-node-label" }
    | {
        id: string;
        label: string;
        _intent: "update-arrow-data";
      };

  const intent = formData._intent;
  if (intent === "node-move") {
    const { node } = formData;
    invariant(node, "node is required for node-move intent");

    const result = await updateNodePosition({
      id: node.id,
      position: {
        x: node.position.x,
        y: node.position.y,
      },
    });

    if (!result || "errors" in result) {
      return json({ success: false, errors: result?.errors }, { status: 400 });
    }

    return json({ success: true });
  }

  if (intent === "node-add") {
    const { id, type, position, data } = formData.node!;

    const result = await addNode(
      {
        id,
        type,
        position: {
          x: position.x,
          y: position.y,
        },
        data,
      },
      projectMachineName
    );

    if ("errors" in result) {
      return json({ success: false, errors: result.errors }, { status: 400 });
    }

    return json({ success: true });
  }

  if (intent === "edge-add") {
    const { params } = formData;
    invariant(params, "params are required for edge-add intent");

    const result = await addArrow(params);

    if ("errors" in result) {
      return json({ success: false, errors: result.errors }, { status: 400 });
    }

    return json({ success: true });
  }

  if (intent === "node-delete") {
    const { id } = formData;
    invariant(id, "id is required for node-delete intent");

    const arrows = await hasArrows(id);
    if ("errors" in arrows) {
      return json({ success: false, errors: arrows.errors }, { status: 400 });
    }

    const result = await deleteNodeAndArrows(
      id,
      arrows.map((arrow) => arrow.id)
    );

    if ("errors" in result) {
      return json({ success: false, errors: result.errors }, { status: 400 });
    }

    return json({ success: true });
  }

  if (intent === "update-node-label") {
    const { label, id } = formData;
    invariant(label, "label is required for update-node-label intent");

    const result = await updateNodeLabel(id, label);

    if (!result || "errors" in result) {
      return json({ success: false, errors: result?.errors }, { status: 400 });
    }

    return json({ success: true });
  }

  if (intent === "update-arrow-data") {
    const { id, label } = formData;
    invariant(id, "id is required for update-arrow-data intent");

    const result = await updateArrowData(id, {
      label,
    });

    console.log(result);

    if (!result || "errors" in result) {
      return json({ success: false, errors: result?.errors }, { status: 400 });
    }

    return json({ success: true });
  }

  return null;
}

export default function WorkflowIndex() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();

  const [workflow, setWorkflow] = useState(loaderData.workflow);

  useEffect(() => {
    setWorkflow(loaderData.workflow);
  }, [loaderData.workflow]);

  const onMoveNode = useCallback(
    debounce((node: Workflow["nodes"][0]) => {
      submit({ node, _intent: "node-move" } as any, {
        method: "post",
        encType: "application/json",
      });
    }, 300),
    [submit]
  );

  const onNodeAdd = useCallback(
    (node: Workflow["nodes"][0]) => {
      submit({ node, _intent: "node-add" } as any, {
        method: "post",
        encType: "application/json",
      });
    },
    [submit]
  );

  const onConnectSave = useCallback(
    (params: Workflow["edges"][0]) => {
      submit({ params, _intent: "edge-add" } as any, {
        method: "post",
        encType: "application/json",
      });
    },
    [submit]
  );

  const onNodeDelete = useCallback(
    (nodeId: string) => {
      submit({ id: nodeId, _intent: "node-delete" } as any, {
        method: "post",
        encType: "application/json",
      });
    },
    [submit]
  );

  return (
    <Fragment>
      <PageHeader
        title="Workflow Builder"
        description="Drag and drop nodes to build your workflow."
      />
      <div className="flex h-[calc(100vh-140px)]">
        <WorkflowBuilder
          workflow={workflow as any}
          onMoveNode={onMoveNode}
          onNodeAdd={onNodeAdd}
          onConnectSave={onConnectSave}
          onNodeDelete={onNodeDelete}
        />
      </div>
      <Outlet />
    </Fragment>
  );
}
