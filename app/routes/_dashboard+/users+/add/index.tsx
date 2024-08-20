import { Await, defer, useLoaderData, useNavigate } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";
import { graphqlClient } from "~/graphql/client.server";
import {
  findAssignmentAreasQuery,
  listAssignmentAreasQuery,
} from "~/graphql/models/assignmentArea/queries.server";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { JSONSchema7 } from "json-schema";
import { FormGenerator } from "~/components/FormGenerator";

const createUserSchema = {
  type: "object",
  title: "Create a new user",
  description: "Fill in the form below to create a new user.",
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

export async function loader() {
  async function getSchema() {
    const { data } = await graphqlClient.query(listAssignmentAreasQuery, {});

    const assignmentAreas = data?.findManyAssignmentArea || [];
    // @TODO: Add data to schema

    return createUserSchema;
  }

  return defer({
    schema: getSchema(),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  // Format the validator
  const { data } = await graphqlClient.query(findAssignmentAreasQuery, {});
  const assignmentAreas = data?.findManyAssignmentArea || [];
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
  //   createUserMutation,
  //   {
  //     input: {
  //       email,
  //       name,
  //       avatar: `https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${name}`,
  //       identification,
  //       position,
  //       assignmentArea: {
  //         connect: {
  //           machineName: assignmentArea,
  //         },
  //       },
  //     },
  //   }
  // );

  // if (error || !user) {
  //   return json({ error: "Error creating user" }, { status: 500 });
  // }

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
                {(schema) => <FormGenerator schema={schema} />}
              </Await>
            </Suspense>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}
