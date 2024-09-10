import { Client, ssrExchange, fetchExchange } from "@urql/core";

export const graphqlClient = new Client({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    headers: {
      connection: "keep-alive",
    },
  },
  exchanges: [
    fetchExchange,
    ssrExchange({
      isClient: false,
    }),
  ],
  requestPolicy: "network-only",
});

export { graphql } from "gql.tada";
