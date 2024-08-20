import {
  Await,
  defer,
  useFetcher,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { invariant } from "@epic-web/invariant";
import { Suspense, useEffect } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { getUserSchema } from "./loader";
import { JSONSchema7 } from "json-schema";
import { FormGenerator } from "~/components/FormGenerator";

const createUserSchema = {
  type: "object",
  title: "Edit user",
  description: "Fill in the form below to edit the user.",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    assignmentArea: {
      type: "string",
      title: "Assignment Area",
      default: "",
      oneOf: [] as { title: string; const: string }[],
    },
    email: {
      type: "string",
      title: "Email",
    },
    identification: {
      type: "string",
      title: "Identification",
    },
    position: {
      type: "string",
      title: "Position",
    },
  },
} satisfies JSONSchema7;

export async function loader({ params }: LoaderFunctionArgs) {
  const userId = params.userid;
  invariant(userId, "User ID is required");

  return defer({
    editUserSchema: getUserSchema(userId, createUserSchema),
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.userid, "User ID is required");
  // Format the validator
  // const { data } = await graphqlClient.query(findAssignmentAreasQuery, {});
  // const assignmentAreas = data?.findManyAssignmentArea || [];
  // const validatorSchema = new ComposeSchema(createUserSchema);
  // validatorSchema.setOptions(
  //   "assignmentArea",
  //   assignmentAreas.map((area) => ({
  //     label: area.name,
  //     value: area.machineName,
  //   }))
  // );

  // // Validation of form data
  // const result = validateFormJsonSchema(
  //   await request.formData(),
  //   validatorSchema.getSchema()
  // );

  // if (!result.success) {
  //   return json(result.errors, {
  //     status: 400,
  //   });
  // }

  // // Extract variables
  // const { assignmentArea, email, identification, name, position } = result.data;

  // // Buisness logic
  // const { data: user, error } = await graphqlClient.mutation(
  //   updateUserMutation,
  //   {
  //     input: {
  //       email: {
  //         set: email,
  //       },
  //       name: {
  //         set: name,
  //       },
  //       // avatar: `https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${name}`,
  //       identification: {
  //         set: identification,
  //       },
  //       position: {
  //         set: position,
  //       },
  //       assignmentArea: {
  //         connect: {
  //           machineName: assignmentArea,
  //         },
  //       },
  //     },
  //     id: params.userid,
  //   }
  // );

  // if (error || !user) {
  //   return json({ error: "Error creating user" }, { status: 500 });
  // }

  return json({ success: true });
}

export default function Edit() {
  const { editUserSchema } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <ClientOnly fallback={<div />}>
      {() => (
        <Modal
          openByDefault
          controls={{
            open: true,
            onOpenChange: (isOpen) => {
              if (!isOpen) {
                navigate("/users");
              }
            },
          }}
          triggerLabel="Edit Profile"
          showTrigger={false}
          title="Edit Profile"
          description="Update your profile information."
        >
          {({ closeModal }) => (
            <Suspense fallback={<Skeleton className="h-96" />}>
              <Await resolve={editUserSchema}>
                {(schema) => <FormGenerator schema={schema} />}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}
