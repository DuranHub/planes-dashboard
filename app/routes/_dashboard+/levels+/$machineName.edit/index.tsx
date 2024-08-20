import { Await, defer, useLoaderData, useNavigate } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";
import { graphql, graphqlClient } from "~/graphql/client.server";
import {
  findAssignmentAreasQuery,
  listAssignmentAreasQuery,
} from "~/graphql/models/assignmentArea/queries.server";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { FormGenerator } from "~/components/FormGenerator";
import { invariant } from "@epic-web/invariant";
import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { JSONSchema7 } from "json-schema";

const createAssigmentAreaSchema = {
  type: "object",
  title: "Edit Assignment Area",
  description: "Fill in the form below to edit an assignment area.",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    description: {
      type: "string",
      title: "Description",
    },
    parentArea: {
      type: "string",
      title: "Parent Area",
      default: "",
      oneOf: [] as { title: string; const: string }[],
    },
  },
} satisfies JSONSchema7;

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

    //@TODO: Update the schema with the fetched data

    return createAssigmentAreaSchema;
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
  // const validatorSchema = new ComposeSchema(createAssigmentAreaSchema);
  // validatorSchema.setOptions(
  //   "parentArea",
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
  // const { parentArea, description, name } = result.data;

  // // Buisness logic
  // const updateAssignmentAreaMutation = graphql(`
  //   mutation updateAssignmentAreaMutation(
  //     $input: AssignmentAreaUpdateInput!
  //     $machineName: String!
  //   ) {
  //     updateOneAssignmentArea(
  //       where: { machineName: $machineName }
  //       data: $input
  //     ) {
  //       id
  //     }
  //   }
  // `);

  // const { data: area, error } = await graphqlClient.mutation(
  //   updateAssignmentAreaMutation,
  //   {
  //     input: {
  //       name: {
  //         set: name,
  //       },
  //       description: {
  //         set: description,
  //       },
  //       // avatar: `https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${name}`,
  //       ParentArea: {
  //         connect: {
  //           machineName: parentArea,
  //         },
  //       },
  //     },
  //     machineName: params.machineName,
  //   }
  // );

  // if (error || !area) {
  //   return json({ error: "Error creating Assignment Area" }, { status: 500 });
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
                {(schema) => <FormGenerator schema={schema} />}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}
