import {
  Background,
  ReactFlow,
  BackgroundVariant,
  Controls,
  ReactFlowProvider,
  ConnectionLineType,
  addEdge,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { Workflow } from "~/routes/_dashboard+/projects_+/$projectMachineName/workflow/_layout/query.server";
import { CommentNode } from "./components/Nodes";
import { InputNode } from "./components/Nodes/InputNode";
import { Arrow } from "./components/Edge";
import { getInitialDataForNewNode, isAllowedType } from "./utils";
import { Toolbar } from "./components/Toolbar";
interface WorkflowBuilderProps {
  workflow: Workflow;
  onMoveNode: (node: Workflow["nodes"][0]) => void;
  onNodeAdd: (node: Workflow["nodes"][0]) => void;
  onConnectSave: (edge: Workflow["edges"][0]) => void;
  onNodeDelete: (nodeId: string) => void;
}

export default function WorkflowBuilder(props: WorkflowBuilderProps) {
  return (
    <ReactFlowProvider>
      <WorkflowBuilderPlanes {...props} />
    </ReactFlowProvider>
  );
}

function WorkflowBuilderPlanes({
  workflow,
  onMoveNode,
  onNodeAdd,
  onConnectSave,
  onNodeDelete,
}: WorkflowBuilderProps) {
  const [nodes, setNodes] = useState<Workflow["nodes"]>(workflow.nodes);
  const [edges, setEdges] = useState<Workflow["edges"]>(workflow.edges);
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  // This useEffect updates the nodes and edges when the workflow from the server changes
  useEffect(() => {
    setNodes(workflow.nodes);
    setEdges(workflow.edges);
  }, [workflow]);

  const onNodesChange = useCallback<OnNodesChange<any>>(
    (changes) => {
      const updatedNodes = applyNodeChanges(changes, nodes);
      setNodes(updatedNodes);

      // Find the moved node, if any
      const movedNode = changes.find((change) => change.type === "position");
      if (movedNode && "id" in movedNode) {
        const updatedNode = updatedNodes.find(
          (node) => node.id === movedNode.id
        );
        if (updatedNode) {
          onMoveNode(updatedNode);
        }
      }
    },
    [nodes, edges, onMoveNode]
  );

  const onEdgesChange = useCallback<
    OnEdgesChange<(typeof workflow)["edges"][0]>
  >(
    (changes) => {
      const updatedEdges = applyEdgeChanges(changes, edges);
      setEdges(updatedEdges);
    },
    [nodes, edges]
  );

  const onConnect = useCallback(
    (params: Parameters<OnConnect>[0]) => {
      const newEdge = {
        ...params,
        type: "arrow",
      };
      const updatedEdges = addEdge(newEdge, edges);
      setEdges(updatedEdges);
      onConnectSave(newEdge);
    },
    [edges, onConnectSave]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!isAllowedType(type)) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: getInitialDataForNewNode(type),
      };

      setNodes((nds) => nds.concat(newNode as Workflow["nodes"][0]));
      onNodeAdd(newNode as Workflow["nodes"][0]);
    },
    [screenToFlowPosition]
  );

  const nodeTypes = useMemo(
    () => ({
      input: InputNode,
      node: InputNode,
      comment: CommentNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      custom: Arrow,
    }),
    []
  );

  const [isDragging, setIsDragging] = useState(false);
  const [draggedType, setDraggedType] = useState<string | null>(null);

  const handleNodeAdd = useCallback(
    (type: string, event: React.MouseEvent | React.TouchEvent) => {
      const position = screenToFlowPosition({
        x: "touches" in event ? event.touches[0].clientX : event.clientX,
        y: "touches" in event ? event.touches[0].clientY : event.clientY,
      });

      const newNode = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode as Workflow["nodes"][0]));
      onNodeAdd(newNode as Workflow["nodes"][0]);
    },
    [screenToFlowPosition, onNodeAdd]
  );

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      connectionLineType={ConnectionLineType.Straight}
      edgeTypes={edgeTypes}
      edges={edges}
      fitView
      maxZoom={2}
      minZoom={0.5}
      nodes={nodes}
      onConnect={onConnect}
      onDragOver={onDragOver}
      multiSelectionKeyCode={["Meta", "Shift"]}
      onDrop={onDrop}
      deleteKeyCode={["Delete", "Backspace"]}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      onBeforeDelete={async () => {
        const confirm = await window.confirm(
          "Are you sure you want to delete this node?"
        );
        return confirm;
      }}
      onNodesDelete={(nodes) => {
        nodes.forEach((node) => {
          onNodeDelete(node.id);
        });
      }}
      ref={reactFlowWrapper}
      onPaneClick={(event) => {
        if (isDragging && draggedType) {
          handleNodeAdd(draggedType, event);
          setIsDragging(false);
          setDraggedType(null);
        }
      }}
    >
      <Background color="#94a3b8" variant={BackgroundVariant.Dots} />
      <Controls showInteractive />
      <Toolbar />
    </ReactFlow>
  );
}
