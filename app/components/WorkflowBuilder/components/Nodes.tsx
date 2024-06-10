import { useFetcher } from "@remix-run/react";
import { Fragment, memo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Handle, NodeProps, Position } from "reactflow";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

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
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full mt-auto"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGARx09qceP-KQTPCEfL6ob0s1-M4M9wh5MAJvMyegqA&s"
                alt="@shadcn"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          Hit you unexpectedly kitty ipsum dolor sit amet, shed everywhere shed
          everywhere stretching attack your ankles chase the red dot, hairball
          run catnip eat the grass sniff human give me attention meow so spit up
          on light gray carpet instead of adjacent linoleum.
        </PopoverContent>
      </Popover>
    </Fragment>
  );
});

export const nodeTypes = {
  node: inputNode,
  comment: commentNode,
};
