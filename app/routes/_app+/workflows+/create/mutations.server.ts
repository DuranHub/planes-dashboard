import { Edge, Node } from "reactflow";
import { workflows, edges } from "./query.server";

export const createNode = (node: Node) => {
    workflows.push({
        id: node.id,
        type: node.type || "custom",
        position: node.position,
        data: node.data,
        width: node.width || 120,
        height: node.height || 42,
    });
    return node;
}

export const updateNode = (node: Node) => {
    const index = workflows.findIndex((n) => n.id === node.id);
    workflows[index] = node;
    return node;
}

export const createEdge = (edge: Edge) => {
    edges.push(edge);
    return edge;
}