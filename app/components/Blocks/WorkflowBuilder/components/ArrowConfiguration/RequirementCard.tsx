import { Fragment, useState } from "react";
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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";

export function RequirementsCard({
  labelX,
  labelY,
}: {
  labelX: number;
  labelY: number;
}) {
  const [open, setOpen] = useState(false);
  const [requirements, setRequirements] = useState([
    "Recurso 1",
    "Recurso 2",
    "Recurso 3",
  ]);

  return (
    <Fragment>
      <Dialog modal={true} open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <form
            className={cn("grid items-start gap-4")}
            onSubmit={(e) => {
              e.preventDefault();
              //@ts-expect-error This shoudl not be needed once we have a form library
              const email = e.target.requirement.value;
              setRequirements((prev) => [...prev, email]);
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Requerimiento:</Label>
              <Input type="text" id="requirement" />
            </div>
            <Button type="submit">Save changes</Button>
          </form>
          <ScrollArea type="scroll" className="h-[200px] mt-4">
            <ul>
              {requirements.map((requirement, index) => (
                <li key={index} className="text-sm">
                  {requirement}
                </li>
              ))}
            </ul>
          </ScrollArea>
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
              {requirements.map((requirement, index) => (
                <li key={index} className="text-sm flex items-center">
                  <Checkbox className="mr-2" />
                  {requirement}
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
