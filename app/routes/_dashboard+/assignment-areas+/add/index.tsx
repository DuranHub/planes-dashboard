import {
  Await,
  defer,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";
import { graphql, graphqlClient } from "~/graphql/client.server";
import {
  findAssignmentAreasQuery,
  listAssignmentAreasQuery,
} from "~/graphql/models/assignmentArea/queries.server";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { validateFormJsonSchema } from "~/components/FormGenerator/lib/validateFormAjv.server";
import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { formatMachineName } from "~/lib/utils.server";
import { JSONSchema7 } from "json-schema";
import { FormGenerator } from "~/components/FormGenerator";

const json7Schema = {
  type: "object",
  title: "Create a new assignment area",
  description: "Fill in the form below to create a new assignment area.",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    description: {
      type: "string",
      title: "Description",
    },
    assignmentArea: {
      type: "string",
      title: "Assignment Area",
      default: "",
      oneOf: [] as { title: string; const: string }[],
    },
  },
} satisfies JSONSchema7;

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const parentArea = url.searchParams.get("selected-area");
  async function getSchema() {
    const { data } = await graphqlClient.query(listAssignmentAreasQuery, {});

    const assignmentAreas = data?.findManyAssignmentArea || [];
    json7Schema.properties.assignmentArea.oneOf = assignmentAreas.map(
      (area) => ({
        title: area.name,
        const: area.machineName,
      })
    );

    if (parentArea) {
      json7Schema.properties.assignmentArea.default = parentArea;
    }

    return json7Schema;
  }

  return defer({
    schema: getSchema(),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  // Format the validator
  const { data } = await graphqlClient.query(findAssignmentAreasQuery, {});
  const assignmentAreas = data?.findManyAssignmentArea || [];
  console.log(assignmentAreas);

  const schemaWithAreas = json7Schema;
  schemaWithAreas.properties.assignmentArea.oneOf = assignmentAreas.map(
    (area) => ({
      title: area.name,
      const: area.machineName,
    })
  );

  // // Validation of form data
  const result = validateFormJsonSchema(
    await request.formData(),
    schemaWithAreas
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

  const input = {
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
  };

  const { data: user, error } = await graphqlClient.mutation(
    createAssignmentAreaMutation,
    input
  );

  if (error || !user) {
    console.error(JSON.stringify(input, null, 2));
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
          {() => (
            <Suspense fallback={<Skeleton className="h-96" />}>
              <Await resolve={schema}>
                {(schema) => <FormGenerator schema={schema} />}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}
