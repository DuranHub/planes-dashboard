import { useFetcher } from "@remix-run/react";
import { Connection, Edge, Node } from "reactflow";

const INTENTS = {
    create: "create",
    update: "update",
    connect: "connect",
} as const;

const workflowAction = "/workflows/create";

export default function useRequestActions() {
    const fetcher = useFetcher();

    const createNode = (node: Node) => {
        fetcher.submit(
            {
                _intent: INTENTS.create,
                node: JSON.stringify(node),
            },
            {
                method: "post",
                action: workflowAction,
            }
        );
    };

    const updateNode = (node: Node) => {
        fetcher.submit(
            {
                _intent: INTENTS.update,
                node: JSON.stringify(node),
            },
            {
                method: "post",
                action: workflowAction,
            }
        );
    };

    const createEdge = (edge: Connection) => {
        fetcher.submit(
            {
                _intent: INTENTS.connect,
                edge: JSON.stringify(edge),
            },
            {
                method: "post",
                action: workflowAction,
            }
        );
    };

    return {
        createNode,
        updateNode,
        createEdge,
    };
}