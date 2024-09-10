import {
  Await,
  defer,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";
import { graphqlClient } from "~/graphql/client.server";
import {
  findAssignmentAreasQuery,
  listAssignmentAreasQuery,
} from "~/graphql/models/assignmentArea/queries.server";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { FormGenerator } from "~/components/FormGenerator";
import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { JSONSchema7 } from "json-schema";

const createAssigmentAreaSchema = {
  type: "object",
  title: "Create Assignment Area",
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

    //@TODO: Add data to schema

    return createAssigmentAreaSchema;
  }

  return defer({
    schema: getSchema(),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  // Format the validator
  const { data } = await graphqlClient.query(findAssignmentAreasQuery, {});
  const assignmentAreas = data?.findManyAssignmentArea || [];
  // const validatorSchema = new ComposeSchema(createAssigmentAreaSchema);
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
  // const { assignmentArea, name, description } = result.data;
  // const machineName = formatMachineName(name);
  // // Buisness logic
  // const createAssignmentAreaMutation = graphql(`
  //   mutation CreateAssignmentArea($input: AssignmentAreaCreateInput!) {
  //     createOneAssignmentArea(data: $input) {
  //       id
  //     }
  //   }
  // `);

  // const { data: user, error } = await graphqlClient.mutation(
  //   createAssignmentAreaMutation,
  //   {
  //     input: {
  //       name,
  //       description,
  //       ParentArea: {
  //         connect: {
  //           machineName: assignmentArea,
  //         },
  //       },
  //       machineName,
  //     },
  //   }
  // );

  // if (error || !user) {
  //   return json({ error: "Error creating assignment area" }, { status: 500 });
  // }

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
                {(schema) => <FormGenerator schema={schema} />}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}
