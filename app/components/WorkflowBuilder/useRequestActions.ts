import { useFetcher } from "@remix-run/react";
import { Connection, Node } from "reactflow";

const INTENTS = {
    create: "create",
    update: "update",
    connect: "connect",
} as const;


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
            }
        );
    };

    return {
        createNode,
        updateNode,
        createEdge,
    };
}