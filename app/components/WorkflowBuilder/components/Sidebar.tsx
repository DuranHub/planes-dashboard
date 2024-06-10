import { useFetcher } from "@remix-run/react";
import { DragEvent, Fragment } from "react";
import { ReactFlowInstance } from "reactflow";
import { Button } from "~/components/ui/button";

interface Props {
  reactFlowInstance: ReactFlowInstance | null | undefined;
}

function InsertMenu() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <Fragment>
      <div
        className="w-32 h-12 border border-stone-500 bg-rose-50 flex items-center justify-center"
        onDragStart={(event) => onDragStart(event, "node")}
        draggable
      >
        Input Node
      </div>
      <div
        className="w-32 h-12 border border-stone-500 bg-rose-50 flex items-center justify-center"
        onDragStart={(event) => onDragStart(event, "comment")}
        draggable
      >
        Comment Node
      </div>
    </Fragment>
  );
}

export default function Toolbar({ reactFlowInstance }: Props) {
  const fetcher = useFetcher();
  return (
    <aside className="flex flex-col gap-4 w-36 max-w-36">
      <InsertMenu />
      <Button
        onClick={() => {
          fetcher.submit(
            {
              workflow: JSON.stringify(reactFlowInstance?.toObject()),
              _intent: "saveWorkflow",
            },
            {
              method: "POST",
            }
          );
        }}
      >
        Save
      </Button>
    </aside>
  );
}
