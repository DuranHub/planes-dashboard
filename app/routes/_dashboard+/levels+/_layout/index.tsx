import type { ActionFunctionArgs } from "@remix-run/node";
import {
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useSearchParams,
  Outlet,
  useFetcher,
  Link,
} from "@remix-run/react";
import { LoaderFunctionArgs, defer, json } from "@remix-run/node";
import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";
import { graphql, graphqlClient } from "~/graphql/client.server";

import { DataTable } from "~/components/DataTable";
import { columns } from "./components/datatable/columns";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tree } from "~/components/ui/tree";
import { Folder, PresentationIcon, Workflow } from "lucide-react";
import { FormGenerator } from "~/components/FormGenerator";
import { invariant } from "@epic-web/invariant";
import { validateFormJsonSchema } from "~/components/FormGenerator/lib/validateFormAjv.server";
import { formatMachineName } from "~/lib/utils.server";
import { recursiveTree } from "./utils";
import { JSONSchema7 } from "json-schema";

const updateProjectSchema = {
  type: "object",
  title: "Edit project",
  description: "Fill in the form below to edit the project.",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    description: {
      type: "string",
      title: "Description",
    },
    leader: {
      type: "string",
      title: "Leader",
    },
    goal: {
      type: "number",
      title: "Goal",
    },
    account: {
      type: "string",
      title: "Account",
    },
    archiveBox: {
      type: "string",
      title: "Archive Box",
    },
    progressUnit: {
      type: "string",
      title: "Progress Unit",
    },
    machineName: {
      type: "string",
      title: "Machine Name",
    },
  },
} satisfies JSONSchema7;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const listLevelQuery = graphql(`
    query ListLevel {
      findManyLevel {
        __typename
        name
        machineName
        Category {
          machineName
        }
        ParentLevel {
          name
          machineName
        }
        ChildLevels {
          name
          machineName
          description
          percentage
        }
      }
      findManyProject {
        __typename
        name
        description
        account
        archiveBox
        goal
        progressUnit
        machineName
        level {
          name
          machineName
        }
        leader {
          name
          id
        }
      }
    }
  `);
  const { data, error } = await graphqlClient.query(listLevelQuery, {});

  if (!data || error) {
    console.error(error, "Error getting level categories");
    throw json({ error: "Error getting level categories" }, { status: 500 });
  }

  const projects = data.findManyProject;
  const levels = data.findManyLevel;

  const rootLevels = data?.findManyLevel.filter((level) => !level.ParentLevel);
  const selectedLevel =
    searchParams.get("selected-level") || rootLevels[0].machineName;

  const levelTree = recursiveTree(rootLevels, levels, projects);

  const levelsWithProjects = levels.map((level) => {
    const prj = projects.filter(
      (project) => project.level.machineName === level.machineName
    );
    if (prj.length === 0) {
      return {
        ...level,
      };
    }
    return {
      ...level,
      ChildLevels: prj.map((project) => ({
        ...project,
      })),
    };
  });

  const levelsAndProjects = [...levelsWithProjects, ...projects];

  const activeLevel = levelsAndProjects.find(
    ({ machineName }) => machineName === selectedLevel
  );
  const isProject = activeLevel?.__typename === "Project";

  if (isProject) {
    // const composeSchema = new ComposeSchema(updateProjectSchema);
    // composeSchema.setOptions("leader", [
    //   {
    //     label: activeLevel.leader.name,
    //     value: activeLevel.leader.id as string,
    //   },
    // ]);
    // composeSchema.setDefaultValues({
    //   ...activeLevel,
    //   goal: String(activeLevel.goal),
    //   leader: activeLevel.leader.id as string,
    // });
    updateProjectSchema.properties.leader = {
      type: "string",
      title: "Leader",
      default: activeLevel.leader.id,
    };
    updateProjectSchema.properties.name.default = activeLevel.name;
    updateProjectSchema.properties.description.default =
      activeLevel.description;
    updateProjectSchema.properties.account.default = activeLevel.account;
    updateProjectSchema.properties.archiveBox.default = activeLevel.archiveBox;
    updateProjectSchema.properties.goal.default = activeLevel.goal;
    updateProjectSchema.properties.progressUnit.default =
      activeLevel.progressUnit;
    updateProjectSchema.properties.machineName.default =
      activeLevel.machineName;

    return json({
      levelTree,
      activeLevel,
      isProject,
      datatableData: [],
      projectSchema: updateProjectSchema,
    });
  }

  const isLevel = activeLevel && "ChildLevels" in activeLevel;
  const datatableData =
    isLevel &&
    activeLevel.ChildLevels.map((level) => ({
      ...level,
      percentage: "percentage" in level ? level.percentage : 0,
    }));

  return defer({
    levelTree,
    activeLevel,
    isProject,
    datatableData: datatableData || [],
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  // Format the validator
  // const composeSchema = new ComposeSchema(updateProjectSchema);

  // // Since this is a project, we need to set the leader options loading the query
  // const findUserByIdQuery = graphql(`
  //   query findU($id: String!) {
  //     findUniqueUser(where: { id: $id }) {
  //       id
  //       name
  //     }
  //   }
  // `);

  // const leaderId = formData.get("leader");
  // invariant(leaderId?.toString(), "Leader is required");

  // const { data: leaderQuery, error: leaderError } = await graphqlClient.query(
  //   findUserByIdQuery,
  //   {
  //     id: leaderId as string,
  //   }
  // );

  // if (!leaderQuery?.findUniqueUser || leaderError) {
  //   throw json({ error: "Error getting leader" }, { status: 500 });
  // }
  // const leaderData = leaderQuery.findUniqueUser;
  // composeSchema.setOptions("leader", [
  //   {
  //     label: leaderData.name,
  //     value: leaderData?.id as string,
  //   },
  // ]);

  // const result = validateFormJsonSchema(formData, composeSchema.getSchema());

  // if (!result.success) {
  //   return json(result.errors, {
  //     status: 400,
  //   });
  // }
  // const {
  //   account,
  //   archiveBox,
  //   description,
  //   goal,
  //   leader,
  //   name,
  //   progressUnit,
  //   machineName,
  // } = result.data;
  // const newMachineName = formatMachineName(name);

  // const updateProjectMutation = graphql(`
  //   mutation UpdateProject($input: ProjectUpdateInput!, $id: String!) {
  //     updateOneProject(where: { machineName: $id }, data: $input) {
  //       id
  //     }
  //   }
  // `);

  // const { data: project, error } = await graphqlClient.mutation(
  //   updateProjectMutation,
  //   {
  //     input: {
  //       name: {
  //         set: name,
  //       },
  //       description: {
  //         set: description,
  //       },
  //       account: {
  //         set: account,
  //       },
  //       archiveBox: {
  //         set: archiveBox,
  //       },
  //       goal: {
  //         set: Number(goal),
  //       },
  //       progressUnit: {
  //         set: progressUnit,
  //       },
  //       machineName: {
  //         set: newMachineName,
  //       },
  //       leader: {
  //         connect: {
  //           id: leader,
  //         },
  //       },
  //     },
  //     id: machineName,
  //   }
  // );

  // if (error) {
  //   console.error(error, "Error updating project");
  //   throw json({ error: "Error updating project" }, { status: 500 });
  // }

  return json({ project: {} });
};

export default function Index() {
  const { levelTree, activeLevel, datatableData, isProject } =
    useLoaderData<typeof loader>();
  const [, setSearchParams] = useSearchParams();

  return (
    <Fragment>
      <PageHeader title="Levels" description="Manage the levels and projects" />
      <section className="flex flex-col lg:flex-row flex-1 w-full px-4 min-h-[80vh] mt-4">
        <Tree
          data={levelTree}
          className="flex-shrink-0 border-[1px] w-1/4"
          initialSlelectedItemId={activeLevel?.machineName}
          onSelectChange={(item) =>
            setSearchParams({ "selected-level": item?.id || "" })
          }
          folderIcon={Folder}
          itemIcon={Workflow}
        />
        <div className="flex flex-col flex-1 mt-4 lg:mt-0 lg:ml-4 w-full">
          {isProject ? (
            <ProjectConfiguration />
          ) : (
            <Fragment>
              <h2 className="text-lg font-semibold">
                Area: {activeLevel?.name}
              </h2>
              <DataTable
                columns={columns}
                data={datatableData}
                externalActions={
                  <Button asChild>
                    {/* <Link to={addLinkWithArea}>Add Area</Link> */}
                  </Button>
                }
              />
            </Fragment>
          )}
        </div>
      </section>
      <Outlet />
    </Fragment>
  );
}

function ProjectConfiguration() {
  const loaderData = useLoaderData<typeof loader>();
  const { activeLevel, isProject } = loaderData;

  if (!activeLevel || activeLevel.__typename !== "Project" || !isProject) {
    return null;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="mb-2 flex w-full justify-between">
          <span>Project Configuration</span>
          <Button variant="default" asChild>
            <Link
              to={`/${activeLevel.machineName}/workflow`}
              className="flex items-center gap-4"
            >
              <PresentationIcon className="w-6 h-6" />
              View Workflow
            </Link>
          </Button>
        </CardTitle>
        <CardDescription>Configure the project</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <FormGenerator schema={loaderData.projectSchema} />
      </CardContent>
    </Card>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.status} <pre>{JSON.stringify(error.data)}</pre>
      </div>
    );
  }
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>There was an error loading the assignment areas</p>
    </div>
  );
}
