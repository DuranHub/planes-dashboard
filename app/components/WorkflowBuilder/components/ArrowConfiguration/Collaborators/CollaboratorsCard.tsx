import { Fragment, useState } from "react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { PermissionTable } from "./PermissionsTable";

export function CollaboratorsCard({
  labelX,
  labelY,
}: {
  labelX: number;
  labelY: number;
}) {
  const [open, setOpen] = useState(false);
  const [collaborators, setCollaborators] = useState([
    "John Doe",
    "Mary Jane",
    "Peter Parker",
  ]);

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
          <form
            className="grid items-start gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              //@ts-expect-error This shoudl not be needed once we have a form library
              const email = e.target.requirement.value;
              setCollaborators((prev) => [...prev, email]);
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Requerimiento:</Label>
              <Input type="text" id="requirement" />
            </div>
            <Button type="submit">Save changes</Button>
          </form>
          <PermissionTable collaborators={collaborators} />
        </DialogContent>
      </Dialog>
      <Card
        style={{
          position: "absolute",
          transform: `translate(-110%, 20%) translate(${labelX}px,${labelY}px)`,
          pointerEvents: "all",
        }}
        className="nodrag nopan z-50 h-80 w-72 flex flex-col"
      >
        <CardHeader>
          <CardTitle>Responsables</CardTitle>
          <CardDescription>
            Colaboradores responsables de la tarea
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-bold mb-2">
            Lider: <span className="text-gray-700">John Doe</span>
          </p>
          <p className="text-sm font-bold mb-2">Colaboradores:</p>
          <div className="flex">
            {collaborators.slice(0, 3).map((collaborator, index) => (
              <Avatar
                key={index}
                className="w-8 h-8 bg-gray-300 rounded-full mr-2"
              >
                <AvatarFallback className="text-xs">
                  {collaborator.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ))}

            {collaborators.length > 3 && (
              <Avatar className="w-8 h-8 bg-gray-300 rounded-full mr-2">
                <AvatarFallback className="text-xs">
                  +{collaborators.length - 3}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
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
