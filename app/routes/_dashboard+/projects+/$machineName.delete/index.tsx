import { invariant } from "@epic-web/invariant";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
import { graphql } from "gql.tada";
import { useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { graphqlClient } from "~/graphql/client.server";

export async function action({ params }: ActionFunctionArgs) {
  invariant(params.machineName, "Machine name is required");

  const machineName = params.machineName;

  async function recursiveDelete(machineName: string) {
    const deleteQuery = graphql(`
      mutation DeleteAssignmentArea($machineName: String!) {
        deleteOneAssignmentArea(where: { machineName: $machineName }) {
          id
          machineName
          ChildAreas {
            machineName
          }
        }
      }
    `);

    const { data, error } = await graphqlClient.mutation(deleteQuery, {
      machineName,
    });

    if (error || !data?.deleteOneAssignmentArea) {
      console.error(error);
      return { error: "Failed to delete assigment area" };
    }

    Promise.all(
      data.deleteOneAssignmentArea.ChildAreas.map((area) =>
        recursiveDelete(area.machineName)
      )
    );
  }

  const result = await recursiveDelete(machineName);

  if (result?.error) {
    return json({ error: result.error }, { status: 500 });
  }

  return redirect("/assignment-areas");
}

export default function DeleteUserConfirmation() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  return (
    <ClientOnly fallback={<div></div>}>
      {() => (
        <AlertDialog
          open={open}
          defaultOpen={true}
          onOpenChange={() => {
            navigate("/assignment-areas");
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                assignment area.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Form method="delete" onSubmit={() => setOpen(false)}>
                <AlertDialogAction type="submit">Continue</AlertDialogAction>
              </Form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </ClientOnly>
  );
}
