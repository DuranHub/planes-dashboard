import { Await, defer, useLoaderData, useNavigate } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { Schema } from "~/components/FormGenerator/types";
import Modal from "~/components/ui/modal";
import { graphqlClient } from "~/graphql/client.server";
import {
  findAssignmentAreasQuery,
  listAssignmentAreasQuery,
} from "~/graphql/models/assignmentArea/queries.server";
import { ComposeSchema } from "~/lib/composeSchema";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { validateFormJsonSchema } from "~/lib/validateFormAjv.server";
import { createUserMutation } from "~/graphql/models/user/mutations";
import { useFormGenerator } from "~/components/FormGenerator";
import { Button } from "~/components/ui/button";
import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";

const createUserSchema = [
  {
    kind: "alphabetic",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    kind: "select",
    label: "Assignment Area",
    name: "assignmentArea",
    options: [],
    required: true,
  },
  {
    kind: "email",
    label: "Email",
    name: "email",
    required: true,
  },
  {
    kind: "alphanumeric",
    label: "Identification",
    name: "identification",
    required: true,
    helpText: "The identification of the user",
  },
  {
    kind: "alphabetic",
    label: "Position",
    name: "position",
    required: true,
    helpText: "The position of the user",
  },
] as const satisfies Schema;

export async function loader() {
  async function getSchema() {
    const { data } = await graphqlClient.query(listAssignmentAreasQuery, {});

    const assignmentAreas = data?.findManyAssignmentArea || [];
    const composeSchema = new ComposeSchema(createUserSchema);
    composeSchema.setOptions(
      "assignmentArea",
      assignmentAreas.map((area) => ({
        label: area.name,
        value: area.machineName,
      }))
    );

    return composeSchema.getSchema();
  }

  return defer({
    schema: getSchema(),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  // Format the validator
  const { data } = await graphqlClient.query(findAssignmentAreasQuery, {});
  const assignmentAreas = data?.findManyAssignmentArea || [];
  const validatorSchema = new ComposeSchema(createUserSchema);
  validatorSchema.setOptions(
    "assignmentArea",
    assignmentAreas.map((area) => ({
      label: area.name,
      value: area.machineName,
    }))
  );

  // Validation of form data
  const result = validateFormJsonSchema(
    await request.formData(),
    validatorSchema.getSchema()
  );

  if (!result.success) {
    return json(result.errors, {
      status: 400,
    });
  }

  // Extract variables
  const { assignmentArea, email, identification, name, position } = result.data;

  // Buisness logic
  const { data: user, error } = await graphqlClient.mutation(
    createUserMutation,
    {
      input: {
        email,
        name,
        avatar: `https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${name}`,
        identification,
        position,
        assignmentArea: {
          connect: {
            id: assignmentArea,
          },
        },
      },
    }
  );

  if (error || !user) {
    return json({ error: "Error creating user" }, { status: 500 });
  }

  return json({ success: true });
}

export default function AddUser() {
  const { schema } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <ClientOnly fallback={<div />}>
      {() => (
        <Modal
          showTrigger={false}
          triggerLabel="Add User"
          title="Register a new user"
          description="Fill in the form below to add a new user."
          openByDefault
          controls={{
            open: true,
            onOpenChange: (open) => {
              if (!open) {
                navigate("/users");
              }
            },
          }}
        >
          {({ closeModal }) => (
            <Suspense fallback={<Skeleton className="h-96" />}>
              <Await resolve={schema}>
                {(schema) => (
                  <AddForm schema={schema} closeModal={closeModal} />
                )}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}

function AddForm({
  schema,
  closeModal,
}: {
  schema: Schema;
  closeModal: () => void;
}) {
  const { FormGenerated } = useFormGenerator({
    schema,
  });

  return (
    <FormGenerated
      actions={
        <Button type="button" variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
      }
    />
  );
}
