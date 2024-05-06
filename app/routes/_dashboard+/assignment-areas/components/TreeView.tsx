import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { buttonVariants } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import clsx from "clsx";
import { useState } from "react";

interface AssignmentArea {
  id: string | number;
  name: string;
  machineName: string;
  ChildAreas: AssignmentArea[];
  ParentArea: AssignmentArea | null;
}

interface Props {
  assignmentAreas: AssignmentArea[];
  iteration?: number;
  className?: string;
  onAreaSelect?: (area: AssignmentArea) => void;
}

export function TreeView({
  assignmentAreas,
  iteration = 0,
  className,
  onAreaSelect = () => {},
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <ul
      className={clsx(
        "lg:pl-4 text-lg text-foreground",
        iteration !== 0 && "border-l-2 border-border",
        className
      )}
    >
      {assignmentAreas.map((area) => {
        const hasChildAreas = area.ChildAreas && area.ChildAreas.length > 0;
        const leftMargin = { marginLeft: `${iteration === 0 ? 0 : 0.5}rem` };

        if (hasChildAreas) {
          return (
            <li key={area.id} style={leftMargin}>
              <Collapsible className="" open={open} onOpenChange={setOpen}>
                <div className="flex items-center h-full hover:bg-secondary">
                  <CollapsibleTrigger
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      }),
                      "h-fit w-fit py-4"
                    )}
                  >
                    <ChevronRight
                      className={clsx(
                        "w-4 h-4 transition-transform",
                        open && "rotate-90"
                      )}
                    />
                  </CollapsibleTrigger>
                  <button
                    onClick={() => onAreaSelect(area)}
                    className="text-left w-full h-full py-4"
                  >
                    {area.name}
                  </button>
                </div>
                <CollapsibleContent>
                  <TreeView
                    assignmentAreas={area.ChildAreas}
                    iteration={iteration + 1}
                    onAreaSelect={onAreaSelect}
                  />
                </CollapsibleContent>
              </Collapsible>
            </li>
          );
        }

        return (
          <li key={area.id} style={leftMargin} className="hover:bg-secondary">
            <button onClick={() => onAreaSelect(area)} className="pl-4 py-4 text-left">
              {area.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
