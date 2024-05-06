import { graphql } from "~/graphql/client.server";

export const createUserMutation = graphql(`
  mutation CreateUser($input: UserCreateInput!) {
    createOneUser(data: $input) {
      id
      name
      email
    }
  }
`);

export const updateUserMutation = graphql(`
  mutation UpdateUser($input: UserUpdateInput! $id: String!) {
    updateOneUser(data: $input, where: {id: $id }) {
      id
    }
  }
`);