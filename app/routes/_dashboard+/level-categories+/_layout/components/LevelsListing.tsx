import { DndContext, useDraggable } from "@dnd-kit/core";

interface LevelD {
  name: string;
  id: string | number;
  description: string;
}

interface Props {
  levels: LevelD[];
}
export default function LevelsListing({ levels }: Props) {
  return (
    <DndContext>
      <div className="grid grid-cols-1 gap-4">
        {levels.map((level) => (
          <Level key={level.id} level={level} />
        ))}
      </div>
    </DndContext>
  );
}

function Level({ level }: { level: LevelD }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: level.id,
  });

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
      }}
      {...attributes}
      {...listeners}
    >
      <h2>{level.name}</h2>
      <p>{level.description}</p>
    </button>
  );
}
