import {
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useSearchParams,
  Outlet,
  Link,
} from "@remix-run/react";
import { ActionFunctionArgs, defer, json } from "@remix-run/node";
import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";
import { graphqlClient } from "~/graphql/client.server";

import { findAssignmentAreasQuery } from "~/graphql/models/assignmentArea/queries.server";
import { TreeView } from "./components/TreeView";
import { DataTable } from "~/components/DataTable";
import { columns } from "./components/datatable/columns";
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

  return defer({
    assignmentAreas: data.findManyAssignmentArea,
    rootAssignmentAreas,
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
  const { assignmentAreas, rootAssignmentAreas } =
    useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const areaByParam = assignmentAreas.find(
    (area) => area.machineName === searchParams.get("selected-area")
  );
  const selectedArea = areaByParam || rootAssignmentAreas[0];

  const addLinkWithArea = selectedArea
    ? `/assignment-areas/add?selected-area=${selectedArea.machineName}`
    : "/dashboard/assignment-areas/add";

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
          currentAreaMachineName={selectedArea?.machineName}
        />
        <div className="flex flex-col flex-1 mt-4 lg:mt-0 lg:ml-4 w-full">
          <h2 className="text-lg font-semibold">Area: {selectedArea?.name}</h2>
          <DataTable
            columns={columns}
            data={selectedArea?.ChildAreas || []}
            externalActions={
              <Button asChild>
                <Link to={addLinkWithArea}>Add Area</Link>
              </Button>
            }
          />
        </div>
      </section>
      <Outlet />
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
