import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";

export default function Index() {
  return (
    <Fragment>
      <PageHeader title="Welcome to Planes!" />
      <main className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Stadistics</h2>
        <p>Here you can see the stadistics of the projects.</p>
      </main>
    </Fragment>
  );
}
