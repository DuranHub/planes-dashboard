import * as React from "react";

import { useMediaQuery } from "~/hooks/use-media-query";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Edge } from "@xyflow/react";
import { DataType } from "./Edge";
import { Separator } from "~/components/ui/separator";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { FormGenerator } from "~/components/FormGenerator";

export function EditArrow({
  arrowId,
  data,
  labelX,
  labelY,
}: {
  arrowId: string;
  data: DataType;
  labelX: number;
  labelY: number;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
            variant="outline"
          >
            Configure arrow
          </Button>
        </DialogTrigger>
        <DialogContent className="w-fit">
          <DialogHeader>
            <DialogTitle>Configure arrow</DialogTitle>
            <DialogDescription>
              Configure the arrow to your liking.
            </DialogDescription>
          </DialogHeader>
          <ArrowConfiguration arrowId={arrowId} data={data} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          variant="outline"
        >
          Configure arrow
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Configure arrow</DrawerTitle>
          <DrawerDescription>
            Configure the arrow to your liking.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <ArrowConfiguration arrowId={arrowId} data={data} />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ArrowConfiguration({
  arrowId,
  data,
}: {
  arrowId: string;
  data: DataType;
}) {
  return (
    <Tabs defaultValue="info">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="info">Info</TabsTrigger>
        <TabsTrigger value="procedure">Procedure</TabsTrigger>
        <TabsTrigger value="requirements">Requirements</TabsTrigger>
        <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <Card>
          <CardHeader>
            <CardTitle>Arrow info</CardTitle>
            <CardDescription>Make changes to your arrow here.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormGenerator
              initialData={{
                ...data,
                _intent: "update-arrow-data",
                id: arrowId,
              }}
              schema={{
                type: "object",
                properties: {
                  label: {
                    title: "Label",
                    type: "string",
                    minLength: 1,
                    maxLength: 100,
                  },
                  _intent: {
                    title: "Intent",
                    type: "string",
                    enum: ["update-arrow-data"],
                    uiSchema: {
                      hidden: true,
                    },
                  },
                  id: {
                    title: "ID",
                    type: "string",
                    uiSchema: {
                      hidden: true,
                    },
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="procedure">
        <Card>
          <CardHeader>
            <CardTitle>Procedure</CardTitle>
            <CardDescription>
              Set up the procedure for the arrow here.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="requirements">
        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
            <CardDescription>
              Add requirements to your arrow here.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="collaborators">
        <Card>
          <CardHeader>
            <CardTitle>Collaborators</CardTitle>
            <CardDescription>
              Add collaborators to your arrow here.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
