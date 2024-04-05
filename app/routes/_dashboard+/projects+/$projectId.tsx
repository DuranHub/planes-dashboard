import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProjectCard from "~/components/Blocks/Projects/ProjectCard";
import { invariant } from "@epic-web/invariant";

export function loader({ params }: LoaderFunctionArgs) {
  invariant(params.projectId, "projectId is required");

  return { projectName: params.projectId };
}

export default function ProjectId() {
  const { projectName } = useLoaderData<typeof loader>();

  return <ProjectCard projectName={projectName} />;
}
