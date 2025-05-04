import { useQuery } from "@apollo/client";

import { RepositoriesOrderState } from "./reducers";
import { GET_REPOSITORIES } from "@/graphql/queries/repositories";
import { RepositoriesResponse } from "@/graphql/types/github";

export default function useRepositories(
  repositoriesOrder: RepositoriesOrderState,
  username?: string,
) {
  return useQuery<RepositoriesResponse>(GET_REPOSITORIES, {
    variables: { username, orderBy: repositoriesOrder },
    skip: !username,
    returnPartialData: true,
    notifyOnNetworkStatusChange: true,
  });
}
