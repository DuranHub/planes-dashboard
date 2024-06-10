import { useFetcher } from "@remix-run/react";
import { Fragment, useState } from "react";
import { FormGenerate } from "~/components/FormGenerator";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scroll-area";

type requirements = {
  label: string;
  machineName: string;
  value: boolean;
}[];

export function RequirementsCard({
  edgeId,
  labelX,
  labelY,
  requirements,
}: {
  edgeId: string;
  labelX: number;
  labelY: number;
  requirements: requirements;
}) {
  const [open, setOpen] = useState(false);
  const fetcher = useFetcher();

  return (
    <Fragment>
      <Dialog modal={true} open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FormGenerate
            callback={() => {
              setOpen(false);
            }}
            fetcher={fetcher}
            schema={[
              {
                kind: "alphanumeric",
                name: "requirement",
                label: "Requerimiento",
                helpText: "Recurso necesario para completar la tarea",
                required: true,
              },
              {
                kind: "free-text",
                label: "_intent",
                name: "_intent",
                hidden: true,
                defaultValue: "requirement-create",
              },
              {
                kind: "free-text",
                label: "edgeId",
                name: "edgeId",
                hidden: true,
                defaultValue: edgeId,
              },
            ]}
          />
        </DialogContent>
      </Dialog>
      <Card
        style={{
          position: "absolute",
          transform: `translate(-110%, -120%) translate(${labelX}px,${labelY}px)`,
          pointerEvents: "all",
        }}
        className="nodrag nowheel nopan z-50 h-80 w-72 flex flex-col"
      >
        <CardHeader>
          <CardTitle>Requerimientos</CardTitle>
          <CardDescription>
            Recursos necesarios para completar la tarea
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea type="scroll" className="h-[100px]">
            <ul>
              {requirements.map((requirement) => (
                <li
                  key={requirement.machineName}
                  className="text-sm flex items-center"
                >
                  <Checkbox
                    defaultChecked={requirement.value}
                    className="mr-2"
                  />
                  {requirement.label}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button
            onClick={() => {
              setOpen(true);
            }}
            className="w-full"
          >
            Configurar
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
}
