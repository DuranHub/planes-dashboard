import { DragEvent, Fragment } from "react";

interface Props {
  selectedNode: string | null;
  deselectNode: () => void;
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
        onDragStart={(event) => onDragStart(event, "custom")}
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

export default function Toolbar({ selectedNode, deselectNode }: Props) {
  return (
    <aside className="flex flex-col gap-4 w-36 max-w-36">
      <InsertMenu />
    </aside>
  );
}
