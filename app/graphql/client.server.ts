import { Client, cacheExchange, fetchExchange } from "@urql/core";

export const graphqlClient = new Client({
    url: "http://localhost:4000/graphql",
    exchanges: [fetchExchange],
});

export { graphql } from "gql.tada"