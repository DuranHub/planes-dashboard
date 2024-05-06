import { graphql } from "gql.tada";
import { graphqlClient } from "~/graphql/client.server";

export async function fetchUsers() {
  const usersQuery = graphql(`
    query Users {
      findManyUser {
        id
        name
        email
        assignmentArea {
          id
          name
        }
        position
        identification
      }
    }
  `);

  const users = (await graphqlClient.query(usersQuery, {})).data?.findManyUser;
  if (!users) {
    return [];
  }

  return users.filter(Boolean)
}

export type UserQuery = Awaited<ReturnType<typeof fetchUsers>> extends (infer U)[] ? U : never
