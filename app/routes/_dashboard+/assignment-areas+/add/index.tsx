import {
  Await,
  defer,
  useFetcher,
  useLoaderData,
  useNavigate,
  useSearchParams,
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
import { Suspense, useEffect } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { formatMachineName } from "~/lib/utils.server";

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
    name: "assignmentArea",
    options: [],
    required: true,
  },
] as const satisfies Schema;

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const parentArea = url.searchParams.get("selected-area");
  async function getSchema() {
    const { data } = await graphqlClient.query(listAssignmentAreasQuery, {});

    const assignmentAreas = data?.findManyAssignmentArea || [];
    const composeSchema = new ComposeSchema(createAssigmentAreaSchema);
    composeSchema.setOptions(
      "assignmentArea",
      assignmentAreas.map((area) => ({
        label: area.name,
        value: area.machineName,
      }))
    );
    if (parentArea) {
      composeSchema.setDefaultValue("assignmentArea", parentArea);
    }

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
  const validatorSchema = new ComposeSchema(createAssigmentAreaSchema);
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
  const { assignmentArea, name, description } = result.data;
  const machineName = formatMachineName(name);
  // Buisness logic
  const createAssignmentAreaMutation = graphql(`
    mutation CreateAssignmentArea($input: AssignmentAreaCreateInput!) {
      createOneAssignmentArea(data: $input) {
        id
      }
    }
  `);

  const { data: user, error } = await graphqlClient.mutation(
    createAssignmentAreaMutation,
    {
      input: {
        name,
        description,
        ParentArea: {
          connect: {
            machineName: assignmentArea,
          },
        },
        machineName,
      },
    }
  );

  if (error || !user) {
    return json({ error: "Error creating assignment area" }, { status: 500 });
  }

  return json({ success: true });
}

export default function AddUser() {
  const { schema } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const parentArea = searchParams.get("selected-area");

  return (
    <ClientOnly fallback={<div />}>
      {() => (
        <Modal
          showTrigger={false}
          triggerLabel="Create Assignment Area"
          title="Create a new assignment area"
          description="Fill in the form below to create a new assignment area."
          openByDefault
          controls={{
            open: true,
            onOpenChange: (open) => {
              if (!open) {
                navigate(
                  `/assignment-areas${
                    parentArea ? `?selected-area=${parentArea}` : ""
                  }`
                );
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
