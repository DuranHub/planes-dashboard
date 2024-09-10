import { Fragment, memo } from "react";
import { NodeProps } from "@xyflow/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export const CommentNode = memo(function CommentNode({ data }: NodeProps) {
  return (
    <Fragment>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={data.avatar || "https://github.com/shadcn.png"}
                alt={data.author || "Comment author"}
              />
              <AvatarFallback>{data.author?.[0] || "C"}</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">{data.author || "Anonymous"}</h4>
            <p className="text-sm text-muted-foreground">{data.comment}</p>
          </div>
        </PopoverContent>
      </Popover>
    </Fragment>
  );
});
