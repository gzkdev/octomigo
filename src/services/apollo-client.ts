import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
  FetchPolicy,
} from "@apollo/client";

import { BASE_URL, GITHUB_AUTH_TOKEN } from "@/lib/constants";

const httpLink = new HttpLink({
  uri: BASE_URL,
  fetchOptions: {
    retry: 3,
  },
});

const errorLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (response.errors) {
      // Prevent retries on GraphQL errors
      response.data = null;
    }
    return response;
  });
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: { authorization: `Bearer ${GITHUB_AUTH_TOKEN}` },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: from([errorLink, authMiddleware, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "none",
      fetchPolicy: "cache-and-network" as FetchPolicy,
    },
    query: {
      errorPolicy: "none",
      fetchPolicy: "cache-and-network" as FetchPolicy,
    },
  },
});

export default client;
