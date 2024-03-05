import { useLoaderData, Await } from "@remix-run/react";
import { defer } from "@remix-run/node";
import { fetchUser } from "./fetchUsers.server";
import { Fragment, Suspense } from "react";
import { DataTable } from "~/components/data-table";
import { columns } from "./datatable/columns";
import { Skeleton } from "~/components/ui/skeleton";
import { Heading } from "~/components/ui/heading";
import { Separator } from "~/components/ui/separator";
import PageHeader from "~/components/PageHeader";

export function loader() {
  return defer({
    data: fetchUser(),
  });
}

export default function UserIndex() {
  const { data } = useLoaderData<typeof fetchUser>();
  return (
    <Fragment>
      <PageHeader
        title="Users"
        description="List of collaborators in the system."
      />
      <Suspense
        fallback={
          <div className="flex flex-col space-y-3 px-4 mt-4">
            <Skeleton className="h-[225px] w-full rounded-xl" />
          </div>
        }
      >
        <Await resolve={data}>
          {(users) => (
            <div className="px-4 mt-4">
              <DataTable columns={columns} data={users} />
            </div>
          )}
        </Await>
      </Suspense>
    </Fragment>
  );
}
