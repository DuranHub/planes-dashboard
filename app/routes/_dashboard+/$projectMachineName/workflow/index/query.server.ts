import { Edge, Node } from "reactflow";

type NodeWithData = Node & { data: { label: string } };

export const workflows: Array<NodeWithData> = [
    {
        id: "0.5070981859355164",
        type: "custom",
        position: {
            x: 0,
            y: -30,
        },
        data: {
            label: "custom node 1",
        },
        width: 120,
        height: 42,
    },
    {
        id: "0.2933712536487305",
        type: "custom",
        position: {
            x: 390,
            y: -30,
        },
        data: {
            label: "custom node 2",
        },
        width: 120,
        height: 42,
    },
] satisfies NodeWithData[];

export const edges: Array<Edge> = [] satisfies Edge[];

export function fetchWorkflows() {
    return new Promise<{
        nodes: NodeWithData[]
        edges: Edge[]
    }>((resolve) => {
        resolve({
            nodes: workflows,
            edges,
        });
    });
}