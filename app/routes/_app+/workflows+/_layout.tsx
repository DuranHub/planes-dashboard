import { Link, Outlet } from "@remix-run/react";
import { ReactFlowProvider } from "reactflow";
import PageHeader from "~/components/PageHeader";
import { buttonVariants } from "~/components/ui/button";

export default function Layout() {
  return (
    <ReactFlowProvider>
      <PageHeader
        title="Workflows"
        description="A workflow is a sequence of tasks that processes a set of data."
      />
      <ul className="px-4 py-2 flex gap-4">
        <li>
          <Link to="create" className={buttonVariants()}>
            Create Workflow
          </Link>
        </li>
      </ul>
      <Outlet />
    </ReactFlowProvider>
  );
}
