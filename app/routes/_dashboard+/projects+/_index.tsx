import { Link, useRouteLoaderData } from "@remix-run/react";
import { loader as layoutLoader } from "./_layout";
import { Fragment } from "react";
import { Button } from "~/components/ui/button";

export default function ProjectsIndex() {
  const layoutLoaderData = useRouteLoaderData<typeof layoutLoader>(
    "routes/_dashboard+/_layout"
  );

  const hasProjects = layoutLoaderData?.projects;

  return (
    <Fragment>
      {!hasProjects && (
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h2 className="text-2xl text-gray-800">
            Add a project to get started.
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            A project is a collection of tasks that are part of a workflow.
          </p>
          <Button asChild variant="default" className="mt-8">
            <Link to="/projects/create">Create Project</Link>
          </Button>
        </div>
      )}
    </Fragment>
  );
}
