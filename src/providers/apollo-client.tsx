"use client";

import client from "@/services/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
