import { Panel } from "@xyflow/react";
import { SplitIcon, Square } from "lucide-react";

export function Toolbar() {
  return (
    <Panel
      position="bottom-center"
      className="bg-background border w-3/4 border-border p-4 flex justify-center items-center space-x-4"
    >
      <h2 className="text-lg font-semibold mr-4">Add Nodes:</h2>
      <div className="flex space-x-4">
        <DraggableNodeType
          type="input"
          label="Input"
          icon={<Square className="w-6 h-6" />}
        />
        <DraggableNodeType
          type="decision"
          label="Decision"
          icon={<SplitIcon className="w-6 h-6" />}
        />
      </div>
    </Panel>
  );
}

interface DraggableNodeTypeProps {
  type: string;
  label: string;
  icon: React.ReactNode;
}

const DraggableNodeType: React.FC<DraggableNodeTypeProps> = ({
  type,
  label,
  icon,
}) => {
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="flex flex-col items-center cursor-move hover:bg-accent rounded p-2 transition-colors"
      onDragStart={handleDragStart}
      draggable
    >
      {icon}
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
};
