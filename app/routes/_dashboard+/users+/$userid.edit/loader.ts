import { JSONSchema7 } from "json-schema";
import { graphql, graphqlClient } from "~/graphql/client.server";
import { findAssignmentAreasQuery } from "~/graphql/models/assignmentArea/queries.server";

export async function getUserSchema(userId: string, schema: JSONSchema7) {
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

  const { data: findAssignmentAreas } = await graphqlClient.query(
    findAssignmentAreasQuery,
    {}
  );

  const assignmentAreas = findAssignmentAreas?.findManyAssignmentArea || [];
  // @TODO: Add data to schema

  return schema;
}
