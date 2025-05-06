import { useId } from "react";
import useRepositories from "@/hooks/useRepositories";
import { RepositoriesOrderState } from "@/hooks/reducers";

import { Spinner } from "../icons";
import RepositoryListItem from "./repository-list-item";

export default function RepositoryListContainer({
  username,
  repositoriesOrder,
}: {
  username?: string;
  repositoriesOrder: RepositoriesOrderState;
}) {
  const id = useId();
  const { data, error, loadMore, hasMore, isPending, loading } =
    useRepositories(repositoriesOrder, username);

  const noPublicRepositories = data?.user?.repositories?.nodes?.length === 0;
  const showLoadMoreButton = hasMore && data;

  if (isPending) {
    return <RepositoryListLoading />;
  }

  if (error) {
    return <RepositoryListError />;
  }

  if (!data) return null;

  if (noPublicRepositories) {
    return <RepositoryListEmpty username={username} />;
  }

  return (
    <>
      <div className="grid gap-4 pt-4">
        {data?.user?.repositories?.nodes?.map((repository, index) => (
          <RepositoryListItem
            key={`${id}-${index}`}
            username={username}
            name={repository?.name}
            description={repository?.description}
            primaryLanguage={repository?.primaryLanguage?.name}
            stargazerCount={repository?.stargazerCount}
            forkCount={repository?.forkCount}
          />
        ))}
      </div>

      {showLoadMoreButton && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="cursor-pointer rounded-lg border border-zinc-300 px-4 py-2 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center gap-1 text-zinc-500">
                <Spinner className="size-4 animate-spin fill-current" />
                <span>Loading...</span>
              </div>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </>
  );
}

function RepositoryListLoading() {
  return (
    <div className="flex h-16 items-center justify-center">
      <Spinner className="size-6 animate-spin fill-zinc-500" />
    </div>
  );
}

function RepositoryListError() {
  return (
    <div className="flex min-h-28 items-center justify-center">
      <span className="text-red-500">Error loading repositories</span>
    </div>
  );
}

function RepositoryListEmpty({ username }: { username?: string }) {
  return (
    <div className="flex min-h-28 items-center justify-center">
      <p>
        {username}
        <span className="text-zinc-500"> has no public repositories</span>
      </p>
    </div>
  );
}
