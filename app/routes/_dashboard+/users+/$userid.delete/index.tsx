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
  invariant(params.userid, "User ID is required");

  const userId = params.userid;
  const deleteUserQuery = graphql(`
    mutation DeleteUser($userId: String!) {
      deleteOneUser(where: { id: $userId }) {
        id
      }
    }
  `);

  const { data, error } = await graphqlClient.mutation(deleteUserQuery, {
    userId,
  });

  if (error || !data?.deleteOneUser) {
    console.error(error);
    return json({ error: "Failed to delete user" }, { status: 500 });
  }

  return redirect("/users");
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
            navigate("/users");
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                user account and remove your data from our servers.
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
