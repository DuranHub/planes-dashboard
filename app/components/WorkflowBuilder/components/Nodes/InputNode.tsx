import { Handle, Position } from "@xyflow/react";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button"; // Add this import
import { Trash2 } from "lucide-react"; // Add this import for the trash icon
import { useFetcher } from "@remix-run/react";

export function InputNode({
  data,
  isConnectable,
  id,
}: {
  data: { label: string; onDelete: (id: string) => void }; // Add onDelete to data
  isConnectable: boolean;
  id: string;
}) {
  const [label, setLabel] = useState(data.label);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const fetcher = useFetcher();

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Card className="w-[350px]">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="flex-grow">
            {isEdit ? (
              <fetcher.Form
                method="post"
                onSubmit={() => {
                  setIsEdit(false);
                }}
              >
                <input type="hidden" name="_intent" value="update-node-label" />
                <input type="hidden" name="id" value={id} />
                <Input
                  type="text"
                  value={label}
                  name="label"
                  onChange={(e) => setLabel(e.target.value)}
                  className="text-sm font-bold"
                />
              </fetcher.Form>
            ) : (
              <button onClick={() => setIsEdit(true)}>{label}</button>
            )}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => data.onDelete(id)}
            className="ml-4 h-8 w-8"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
}
