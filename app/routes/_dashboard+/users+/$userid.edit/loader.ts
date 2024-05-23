import { Schema } from "~/components/FormGenerator/types";
import { graphql, graphqlClient } from "~/graphql/client.server";
import { findAssignmentAreasQuery } from "~/graphql/models/assignmentArea/queries.server";
import { ComposeSchema } from "~/components/FormGenerator/lib/composeSchema";

export async function getUserSchema(userId: string, schema: Schema) {
  const findUserByIdQuery = graphql(`
      query findUserByIdQuery($id: String!) {
        findUniqueUser(where: { id: $id }) {
          id
          name
          email
          identification
          position
          assignmentArea {
            machineName
            name
          }
        }
      }
    `);
  const { data: findUserById, error } = await graphqlClient.query(
    findUserByIdQuery,
    {
      id: userId,
    }
  );
  if (error || !findUserById?.findUniqueUser) {
    throw new Error("User not found");
  }

  const user = findUserById.findUniqueUser;

  const composeSchema = new ComposeSchema(schema);
  composeSchema.setDefaultValues({
    name: user.name,
    email: user.email,
    identification: user.identification,
    position: user.position,
    assignmentArea: (user.assignmentArea?.machineName as string) || "",
  });

  const { data: findAssignmentAreas } = await graphqlClient.query(
    findAssignmentAreasQuery,
    {}
  );

  const assignmentAreas = findAssignmentAreas?.findManyAssignmentArea || [];
  composeSchema.setOptions(
    "assignmentArea",
    assignmentAreas.map((area) => ({
      label: area.name,
      value: area.machineName,
    }))
  );

  return composeSchema.getSchema();
}