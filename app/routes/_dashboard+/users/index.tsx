import { useLoaderData, Await } from "@remix-run/react";
import { ActionFunctionArgs, defer, json } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

import { fetchUsers } from "./users.server";
import { Fragment, Suspense } from "react";
import { DataTable } from "~/components/data-table";
import { columns } from "./datatable/columns";
import { Skeleton } from "~/components/ui/skeleton";
import PageHeader from "~/components/PageHeader";
import { Button } from "~/components/ui/button";
import CreateUserModal from "./components/CreateUserModal";
import { useFormGenerator } from "~/components/FormGenerator";

import { validateFormJsonSchema } from "~/lib/validateFormAjv.server";
import { Schema } from "~/components/FormGenerator/types";

const createUserSchema = [
  {
    kind: "alphabetic",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    kind: "email",
    label: "Email",
    name: "email",
    required: true,
  },
  {
    kind: "password",
    name: "password",
    label: "Password",
    required: true,
    minLength: 3,
  },
] as const satisfies Schema;

export async function loader() {
  return defer({
    users: fetchUsers(),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = validateFormJsonSchema(formData, createUserSchema);
  if (!result.success) {
    return json(result.errors, {
      status: 400,
    });
  }

  // const data = result.data;
  // await createUser(data);

  return "Dashboard";
}

export default function UserIndex() {
  const { users } = useLoaderData<typeof loader>();
  const { Form } = useFormGenerator({
    schema: createUserSchema,
  });

  return (
    <Fragment>
      <PageHeader
        title="Users"
        description="List of collaborators in the system."
      />
      <Suspense
        fallback={
          <div className="flex flex-col space-y-3 px-4 mt-4">
            <Skeleton className="h-[50px] w-full rounded-xl" />
            <Skeleton className="h-[225px] w-full rounded-xl" />
          </div>
        }
      >
        <Await resolve={users}>
          {(users) => {
            return (
              <div className="px-4 mt-4">
                <DataTable
                  columns={columns}
                  data={users}
                  externalActions={
                    <ClientOnly
                      fallback={
                        <CreateUserModal.Trigger>
                          Edit Profile
                        </CreateUserModal.Trigger>
                      }
                    >
                      {() => (
                        <CreateUserModal>
                          {({ closeModal }) => (
                            <Form
                              actions={
                                <Button
                                  type="button"
                                  variant="secondary"
                                  onClick={closeModal}
                                >
                                  Cancel
                                </Button>
                              }
                            />
                          )}
                        </CreateUserModal>
                      )}
                    </ClientOnly>
                  }
                />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </Fragment>
  );
}
