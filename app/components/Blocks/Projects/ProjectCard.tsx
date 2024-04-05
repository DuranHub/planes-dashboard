import { Form, Link } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { SearchUserCombobox } from "~/routes/resources+/search-user";

interface Props {
  projectName: string;
  isCreate?: boolean;
}

export default function ProjectCard({ projectName, isCreate = false }: Props) {
  return (
    <Card className="mt-4 max-w-4xl">
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Creating a new project"
            : `Configuration for ${projectName} project`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isCreate && (
          <div className="flex flex-col gap-6 mb-4">
            <Button variant="default" asChild>
              <Link to="/workflows/create">Configure Workflow</Link>
            </Button>
            <Button variant="secondary">View Workflow</Button>
          </div>
        )}
        <Form method="post">
          <fieldset className="mb-4">
            <legend className="text-2xl font-semibold leading-none tracking-tight">
              Project Settings
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="goal">Goal</Label>
                <Input type="text" id="goal" />
              </div>
              <div>
                <SearchUserCombobox />
              </div>
            </div>
          </fieldset>
          <div>
            <Button type="submit" variant="default">
              {isCreate ? "Configure workflow" : "Save Changes"}
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
