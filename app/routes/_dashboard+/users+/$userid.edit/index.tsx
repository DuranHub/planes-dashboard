import {
  Await,
  defer,
  useFetcher,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { Schema } from "~/components/FormGenerator/types";
import Modal from "~/components/ui/modal";
import { graphqlClient } from "~/graphql/client.server";
import { findAssignmentAreasQuery } from "~/graphql/models/assignmentArea/queries.server";
import { ComposeSchema } from "~/lib/composeSchema";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { validateFormJsonSchema } from "~/lib/validateFormAjv.server";
import { updateUserMutation } from "~/graphql/models/user/mutations";
import { useFormGenerator } from "~/components/FormGenerator";
import { Button } from "~/components/ui/button";
import { invariant } from "@epic-web/invariant";
import { Suspense, useEffect } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { getUserSchema } from "./loader";

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

export async function loader({ params }: LoaderFunctionArgs) {
  const userId = params.userid;
  invariant(userId, "User ID is required");

  return defer({
    createUserSchema: getUserSchema(userId, createUserSchema),
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.userid, "User ID is required");
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
    updateUserMutation,
    {
      input: {
        email: {
          set: email,
        },
        name: {
          set: name,
        },
        // avatar: `https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${name}`,
        identification: {
          set: identification,
        },
        position: {
          set: position,
        },
        assignmentArea: {
          connect: {
            machineName: assignmentArea,
          },
        },
      },
      id: params.userid,
    }
  );

  if (error || !user) {
    return json({ error: "Error creating user" }, { status: 500 });
  }

  return json({ success: true });
}

export default function Edit() {
  const { createUserSchema } = useLoaderData<typeof loader>();
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
              <Await resolve={createUserSchema}>
                {(schema) => (
                  <EditForm schema={schema} closeModal={closeModal} />
                )}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}

function EditForm({
  schema,
  closeModal,
}: {
  schema: Schema;
  closeModal: () => void;
}) {
  const { FormGenerated } = useFormGenerator({
    schema,
  });
  const fetcher = useFetcher<{ success: boolean }>();

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data?.success) {
      closeModal();
    }
  }, [fetcher.state, fetcher.data, closeModal]);

  return (
    <FormGenerated
      fetcher={fetcher}
      actions={
        <Button type="button" variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
      }
    />
  );
}
