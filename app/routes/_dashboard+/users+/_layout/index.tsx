import { useLoaderData, Await, Outlet, Link } from "@remix-run/react";
import { defer } from "@remix-run/node";

import { fetchUsers } from "./users.server";
import { Fragment, Suspense } from "react";
import { DataTable } from "~/components/data-table";
import { columns } from "./components/datatable/columns";
import { Skeleton } from "~/components/ui/skeleton";
import PageHeader from "~/components/PageHeader";
import { Button } from "~/components/ui/button";

export async function loader() {
  return defer({
    users: fetchUsers(),
  });
}

export default function UserIndex() {
  const { users } = useLoaderData<typeof loader>();
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
                    <Button asChild>
                      <Link to="add">Add User</Link>
                    </Button>
                  }
                />
              </div>
            );
          }}
        </Await>
      </Suspense>
      <Outlet />
    </Fragment>
  );
}
