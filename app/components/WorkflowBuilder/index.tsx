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
import { DragEventHandler, useCallback, useState } from "react";
import Toolbar from "./components/Sidebar";
import useRequestActions from "./useRequestActions";
import { edgeTypes } from "./components/Edge";

const initial = {
  nodes: [
    {
      width: 160,
      height: 50,
      id: "0.5070981859355164",
      type: "custom",
      position: {
        x: 0,
        y: -120,
      },
      data: {
        label: "custom node",
      },
      selected: false,
      positionAbsolute: {
        x: 0,
        y: -120,
      },
      dragging: false,
    },
    {
      width: 160,
      height: 50,
      id: "0.2933712536487305",
      type: "custom",
      position: {
        x: 435,
        y: -90,
      },
      data: {
        label: "custom node",
      },
      selected: true,
      positionAbsolute: {
        x: 435,
        y: -90,
      },
      dragging: false,
    },
    {
      width: 160,
      height: 50,
      id: "0.4515740083546298",
      type: "custom",
      position: {
        x: 15,
        y: 30,
      },
      data: {
        label: "custom node",
      },
      positionAbsolute: {
        x: 15,
        y: 30,
      },
    },
  ],
  edges: [
    {
      source: "0.5070981859355164",
      sourceHandle: null,
      target: "0.2933712536487305",
      targetHandle: null,
      type: "custom",
      id: "reactflow__edge-0.5070981859355164-0.2933712536487305",
    },
  ],
  viewport: {
    x: 204.56638897701248,
    y: 175.8682518737749,
    zoom: 1.1680862808012318,
  },
};

export default function WorkflowBuilder({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initial.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initial.edges);
  const [selectedNode] = useState<string | null>(null);

  const { createEdge, createNode } = useRequestActions();

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>();

  const onConnect = useCallback<OnConnect>((params) => {
    const edge = { ...params, type: "custom" };
    setEdges((eds) => addEdge(edge, eds));
    createEdge(edge);
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

        createNode(newNode);
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [reactFlowInstance]
  );

  return (
    <div className="px-4 mt-4 flex gap-2">
      <Toolbar
        selectedNode={selectedNode}
        deselectNode={() =>
          setNodes((nodes) => nodes.map((n) => ({ ...n, selected: false })))
        }
      />
      <div className="h-[800px] w-full border border-stone-500">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes) => {
            onNodesChange(changes);
            for (const change of changes) {
              if (change.type === "dimensions" || change.type === "remove") {
                console.log(reactFlowInstance?.toObject());
              }
            }
          }}
          onNodeDragStop={() => {
            console.log("drag stop");
            console.log(reactFlowInstance?.toObject());
          }}
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
  );
}
