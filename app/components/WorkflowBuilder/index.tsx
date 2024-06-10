import {
  addEdge,
  Background,
  ReactFlow,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  OnConnect,
  ReactFlowInstance,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { nodeTypes } from "./components/Nodes";
import { DragEventHandler, Fragment, useCallback, useState } from "react";
import Toolbar from "./components/Sidebar";
import { edgeTypes } from "./components/Edge";

export default function WorkflowBuilder({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>();

  const onConnect = useCallback<OnConnect>((params) => {
    const { source, target } = params;
    const edgeId = `${source}-{TO}-${target}`;
    const edge = { ...params, type: "custom", id: edgeId };
    setEdges((eds) => addEdge(edge, eds));
  }, []);

  const onDragOver = useCallback<DragEventHandler<HTMLDivElement>>((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback<DragEventHandler<HTMLDivElement>>(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      if (reactFlowInstance) {
        const position = reactFlowInstance?.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });
        const newNode = {
          id: Math.random().toString(),
          type,
          position,
          data: { label: `${type} node` },
        };
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [reactFlowInstance]
  );

  return (
    <Fragment>
      <div className="px-4 mt-4 flex gap-2">
        <Toolbar reactFlowInstance={reactFlowInstance} />
        <div className="h-[800px] w-full border border-stone-500">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={(changes) => {
              onNodesChange(changes);
            }}
            onNodeDragStop={() => {}}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onDragOver={onDragOver}
            fitView
            snapToGrid
          >
            <Controls></Controls>
            <MiniMap pannable zoomable />
            <Background
              id="1"
              gap={10}
              color="#f1f1f1"
              variant={BackgroundVariant.Lines}
            />
            <Background
              id="2"
              gap={100}
              color="#ccc"
              variant={BackgroundVariant.Lines}
            />
          </ReactFlow>
        </div>
      </div>
    </Fragment>
  );
}
