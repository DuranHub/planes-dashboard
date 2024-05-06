import {
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { ActionFunctionArgs, defer, json } from "@remix-run/node";
import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";
import { graphqlClient } from "~/graphql/client.server";

import { findAssignmentAreasQuery } from "~/graphql/models/assignmentArea/queries.server";
import { TreeView } from "./components/TreeView";
import { DataTable } from "~/components/data-table";
import { columns } from "./components/datatable/columns";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";
import { useFormGenerator } from "~/components/FormGenerator";
import { Schema } from "~/components/FormGenerator/types";
import { Button } from "~/components/ui/button";

export const loader = async () => {
  const { data, error } = await graphqlClient.query(
    findAssignmentAreasQuery,
    {}
  );

  const rootAssignmentAreas = data?.findManyAssignmentArea.filter(
    (area) => !area.ParentArea
  );

  if (!data || error) {
    throw json({ error: "Error getting assignment areas" }, { status: 500 });
  }

  if (!rootAssignmentAreas) {
    throw json(
      { error: "Error getting root assignment areas" },
      { status: 500 }
    );
  }

  const createUserSchema = [
    {
      kind: "alphabetic",
      name: "name",
      label: "Name",
      required: true,
      helpText: "The name of the assignment area",
    },
    {
      kind: "alphanumeric",
      label: "Description",
      name: "description",
      required: true,
      minLength: 5,
    },
    {
      kind: "select",
      label: "Parent Area",
      name: "parentArea",
      options: data.findManyAssignmentArea.map((area) => ({
        label: area.name,
        value: area.machineName,
      })),
      required: true,
    },
    {
      kind: "alphabetic",
      label: "Machine Name",
      name: "machineName",
      defaultValue: "machine-name",
    },
  ] as const satisfies Schema;
  return defer({
    assignmentAreas: data.findManyAssignmentArea,
    rootAssignmentAreas,
    formSchema: createUserSchema,
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  return json({ message: "Assignment area created successfully" });
};

export default function Index() {
  const { assignmentAreas, rootAssignmentAreas, formSchema } =
    useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { FormGenerated } = useFormGenerator({
    schema: formSchema,
  });

  const areaByParam = assignmentAreas.find(
    (area) => area.machineName === searchParams.get("selected-area")
  );
  const selectedArea = areaByParam || rootAssignmentAreas[0];

  return (
    <Fragment>
      <PageHeader
        title="Assignment Areas"
        description="List of assignment areas in the system."
      />
      <section className="flex flex-col lg:flex-row flex-1 w-full px-4 min-h-[80vh] mt-4">
        <TreeView
          assignmentAreas={rootAssignmentAreas}
          className="lg:w-1/3"
          onAreaSelect={({ machineName }) => {
            setSearchParams({ "selected-area": machineName });
          }}
        />
        <div className="flex flex-col flex-1 mt-4 lg:mt-0 lg:ml-4 w-full">
          <h2 className="text-lg font-semibold">Area: {selectedArea?.name}</h2>
          <DataTable
            columns={columns}
            data={selectedArea?.ChildAreas || []}
            externalActions={
              <ClientOnly
                fallback={<Modal.Trigger>Add Assignment Area</Modal.Trigger>}
              >
                {() => (
                  <Modal
                    triggerLabel="Add Assignment Area"
                    title="Register a new user"
                    description="Fill in the form below to add a new user."
                  >
                    {({ closeModal }) => (
                      <FormGenerated
                        onSubmitCallback={closeModal}
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
                  </Modal>
                )}
              </ClientOnly>
            }
          />
        </div>
      </section>
    </Fragment>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div>{error.status}</div>;
  }
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>There was an error loading the assignment areas</p>
    </div>
  );
}
