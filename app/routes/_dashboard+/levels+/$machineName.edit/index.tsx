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
import { graphql, graphqlClient } from "~/graphql/client.server";
import {
  findAssignmentAreasQuery,
  listAssignmentAreasQuery,
} from "~/graphql/models/assignmentArea/queries.server";
import { ComposeSchema } from "~/components/FormGenerator/lib/composeSchema";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { validateFormJsonSchema } from "~/components/FormGenerator/lib/validateFormAjv.server";
import { useFormGenerator } from "~/components/FormGenerator";
import { Button } from "~/components/ui/button";
import { invariant } from "@epic-web/invariant";
import { Suspense, useEffect } from "react";
import { Skeleton } from "~/components/ui/skeleton";

const createAssigmentAreaSchema = [
  {
    kind: "alphabetic",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    kind: "alphanumeric",
    label: "Description",
    name: "description",
    required: true,
  },
  {
    kind: "select",
    label: "Assignment Area",
    name: "parentArea",
    options: [],
    required: true,
  },
] as const satisfies Schema;

export async function loader({ params }: LoaderFunctionArgs) {
  const machineName = params.machineName;
  const findAssigmentAreaByMachineNameQuery = graphql(`
    query findAssigmentAreaByMachineNameQuery($machineName: String!) {
      findUniqueAssignmentArea(where: { machineName: $machineName }) {
        id
        name
        description
        ParentArea {
          machineName
          name
        }
      }
    }
  `);

  async function getEditAssignmentAreaSchema() {
    invariant(machineName, "Machine Name is required");

    const { data: findAssigmentAreaByMachineName, error } =
      await graphqlClient.query(findAssigmentAreaByMachineNameQuery, {
        machineName,
      });
    const { data } = await graphqlClient.query(listAssignmentAreasQuery, {
      filter: {
        machineName: {
          not: {
            equals: machineName,
          },
        },
      },
    });

    const assigmentAreaList = data?.findManyAssignmentArea || [];

    if (error || !findAssigmentAreaByMachineName?.findUniqueAssignmentArea) {
      throw new Error("Assignment Area not found");
    }

    const { findUniqueAssignmentArea } = findAssigmentAreaByMachineName;

    const composeSchema = new ComposeSchema(createAssigmentAreaSchema);
    composeSchema.setDefaultValues({
      name: findUniqueAssignmentArea.name,
      description: findUniqueAssignmentArea.description,
      parentArea: findUniqueAssignmentArea.ParentArea?.machineName || "",
    });
    composeSchema.setOptions(
      "parentArea",
      assigmentAreaList.map((area) => ({
        label: area.name,
        value: area.machineName,
      }))
    );

    return composeSchema.getSchema();
  }

  return defer({
    editUserSchema: getEditAssignmentAreaSchema(),
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.machineName, "Machine Name is required");
  // Format the validator
  const { data } = await graphqlClient.query(findAssignmentAreasQuery, {});
  const assignmentAreas = data?.findManyAssignmentArea || [];
  const validatorSchema = new ComposeSchema(createAssigmentAreaSchema);
  validatorSchema.setOptions(
    "parentArea",
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
  const { parentArea, description, name } = result.data;

  // Buisness logic
  const updateAssignmentAreaMutation = graphql(`
    mutation updateAssignmentAreaMutation(
      $input: AssignmentAreaUpdateInput!
      $machineName: String!
    ) {
      updateOneAssignmentArea(
        where: { machineName: $machineName }
        data: $input
      ) {
        id
      }
    }
  `);

  const { data: area, error } = await graphqlClient.mutation(
    updateAssignmentAreaMutation,
    {
      input: {
        name: {
          set: name,
        },
        description: {
          set: description,
        },
        // avatar: `https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${name}`,
        ParentArea: {
          connect: {
            machineName: parentArea,
          },
        },
      },
      machineName: params.machineName,
    }
  );

  if (error || !area) {
    return json({ error: "Error creating Assignment Area" }, { status: 500 });
  }

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
                navigate("/assignment-areas");
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
