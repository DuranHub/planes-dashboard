import { useFetcher } from "@remix-run/react";
import { Fragment, memo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Handle, NodeProps, Position } from "reactflow";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";

import { cn } from "~/lib/utils";

export const inputNode = memo(function InputNode({
  data,
  isConnectable,
}: NodeProps) {
  const [isEditing, setIsEditing] = useState(false);
  const fetcher = useFetcher();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const optimisticLabel = fetcher.formData?.has("label")
    ? String(fetcher.formData.get("label"))
    : data.label;

  return (
    <Fragment>
      <Handle
        position={Position.Left}
        className={cn("!bg-rose-500")}
        type="target"
        isConnectable={isConnectable}
      />
      <div className="flex gap-4">
        <div className="peer border border-stone-500 bg-rose-50 flex items-center justify-center">
          {isEditing ? (
            <fetcher.Form
              method="post"
              onSubmit={() => {
                flushSync(() => {
                  setIsEditing(false);
                });
                buttonRef.current?.focus();
              }}
            >
              <Input
                ref={inputRef}
                name="label"
                defaultValue={data.label}
                required
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    flushSync(() => {
                      setIsEditing(false);
                    });
                    buttonRef.current?.focus();
                  }
                }}
                onBlur={(event) => {
                  if (inputRef.current?.value !== data.label) {
                    fetcher.submit(event.currentTarget.form);
                  }
                  setIsEditing(false);
                }}
              />
            </fetcher.Form>
          ) : (
            <button
              className="px-3 py-2 text-2xl"
              ref={buttonRef}
              onClick={() => {
                flushSync(() => {
                  setIsEditing(true);
                });
                inputRef.current?.focus();
              }}
            >
              {optimisticLabel}
            </button>
          )}
        </div>
      </div>
      <Handle
        position={Position.Right}
        className={cn("!bg-sky-500")}
        type="source"
        isConnectable={isConnectable}
      />
    </Fragment>
  );
});

export const commentNode = memo(function CommentNode() {
  return (
    <Fragment>
      <Card className="">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
});

export const nodeTypes = {
  custom: inputNode,
  comment: commentNode,
};
