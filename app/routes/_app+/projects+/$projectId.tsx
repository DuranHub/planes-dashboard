import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function loader({ params }: LoaderFunctionArgs) {
  return { title: params.projectId };
}

export default function ProjectId() {
  const { title } = useLoaderData<typeof loader>();

  return (
    <Card className="mt-4">
      <CardHeader className="mb-8">
        <CardTitle>Configuration for {title} project</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <Button variant="default" asChild>
            <Link to="/workflows/create">Configure Workflow</Link>
          </Button>
          <Button variant="secondary">View Workflow</Button>
        </div>
        <Form className="mt-4">
          <fieldset>
            <legend className="text-3xl mb-2">Project Settings</legend>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="goal">Goal</Label>
                <Input type="text" id="goal" />
              </div>
              <div>
                <Label htmlFor="projectName">Goal</Label>
                <Input type="text" id="projectName" />
              </div>
              <div>
                <Button variant="default">Save</Button>
              </div>
            </div>
          </fieldset>
        </Form>
      </CardContent>
    </Card>
  );
}
