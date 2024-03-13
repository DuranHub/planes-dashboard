import { ScrollArea } from "@radix-ui/react-scroll-area";

interface Props {
  collaborators: string[];
}

export function PermissionTable({ collaborators }: Props) {
  return (
    <ScrollArea type="scroll" className="h-[200px] mt-4">
      <ul>
        {collaborators.map((requirement, index) => (
          <li key={index} className="text-sm">
            {requirement}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
