import { graphql } from "gql.tada";
import { graphqlClient } from "~/graphql/client.server";

export async function fetchUsers() {
  const usersQuery = graphql(`
    query Users {
      users {
        id
        name
        email
      }
    }
  `);

  const users = (await graphqlClient.query(usersQuery, {})).data?.users;
  if (!users) {
    return [];
  }

  return users.filter(Boolean).map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email as string,
  }));
}

export async function createUser() {
  const createUserMutation = graphql(`
  mutation CreateUser($input: post_users_request_Input!) {
    post_users(input: $input) {
      id
      name
      email
    }
  }
`);

  const user = {
    name: "Test User",
    email: "aa@aaa.aa",
  };

  return graphqlClient.mutation(createUserMutation, {
    input: {
      email: user.email,
      name: user.name,
      password: "password",
    },
  });
}