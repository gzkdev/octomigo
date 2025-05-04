import { useCallback, useMemo } from "react";
import { NetworkStatus, useQuery } from "@apollo/client";

import { RepositoriesOrderState } from "./reducers";
import { GET_REPOSITORIES } from "@/graphql/queries/repositories";
import { RepositoriesResponse } from "@/graphql/types/github";

const REPOSITORIES_PER_PAGE = 10;

export default function useRepositories(
  repositoriesOrder: RepositoriesOrderState,
  username?: string,
) {
  const { data, loading, error, fetchMore, networkStatus } =
    useQuery<RepositoriesResponse>(GET_REPOSITORIES, {
      variables: {
        username,
        orderBy: repositoriesOrder,
        first: REPOSITORIES_PER_PAGE,
        after: null,
      },
      skip: !username,
      returnPartialData: true,
      notifyOnNetworkStatusChange: true,
    });

  const hasMore = useMemo(
    () => data?.user?.repositories?.pageInfo.hasNextPage,
    [data],
  );

  const endCursor = useMemo(
    () => data?.user?.repositories?.pageInfo.endCursor,
    [data],
  );

  const isPending = useMemo(() => {
    return (
      networkStatus !== NetworkStatus.refetch &&
      networkStatus !== NetworkStatus.fetchMore &&
      loading
    );
  }, [networkStatus, loading]);

  const loadMore = useCallback(async () => {
    if (!hasMore || !endCursor) return;

    await fetchMore({
      variables: {
        after: endCursor,
        first: REPOSITORIES_PER_PAGE,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const newNodes = fetchMoreResult.user.repositories.nodes;
        const newPageInfo = fetchMoreResult.user.repositories.pageInfo;

        return {
          user: {
            ...prev.user,
            repositories: {
              ...prev.user.repositories,
              nodes: [...prev.user.repositories.nodes, ...newNodes],
              pageInfo: newPageInfo,
            },
          },
        };
      },
    });
  }, [hasMore, endCursor]);

  return { data, loading, error, loadMore, hasMore, isPending };
}
