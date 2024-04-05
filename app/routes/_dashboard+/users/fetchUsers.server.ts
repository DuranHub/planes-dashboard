import { graphql } from "gql.tada";
import { graphqlClient } from "~/graphql/client.server";

export async function fetchUser() {
    const usersQuery = graphql(`
    query Users {
      users {
        id
        name
        username: email
      }
    }
  `);

    const users = (await graphqlClient.query(usersQuery, {})).data
    return users;
}

export function searchUserByQuery(query: string) {
    return new Promise<any>((resolve) => {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            });
    });
}