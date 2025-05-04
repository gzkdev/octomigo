import { Spinner, Star, GitBranch } from "../icons";
import { RepositoriesOrderState } from "@/hooks/reducers";
import useRepositories from "@/hooks/useRepositories";

type RepositoryListContainerProps = {
  username?: string;
  repositoriesOrder: RepositoriesOrderState;
};

export default function RepositoryListContainer({
  username,
  repositoriesOrder,
}: RepositoryListContainerProps) {
  const { data, loading, error, loadMore, hasMore, isPending } =
    useRepositories(repositoriesOrder, username);
  const noPublicRepositories = data?.user?.repositories?.nodes.length === 0;
  const showLoadMoreButton = hasMore && data;

  if (isPending) {
    return (
      <div className="flex h-16 items-center justify-center">
        <Spinner className="size-6 animate-spin fill-zinc-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-28 items-center justify-center">
        <span className="text-red-500">
          Error: {error.message}
          <br />
          Please try again.
        </span>
      </div>
    );
  }

  if (!data) return null;

  if (noPublicRepositories) {
    return (
      <div className="flex min-h-28 items-center justify-center">
        <span className="text-gray-500">
          {username} has no public repositories
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data?.user?.repositories?.nodes.map((repository) => (
        <div
          key={repository.name}
          className="relative space-y-2 bg-zinc-100 p-4 hover:bg-zinc-200"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${username}/${repository.name}`}
            className="text-xs font-semibold after:absolute after:inset-0"
          >
            {repository.name}
          </a>
          <div className="line-clamp-2">{repository.description}</div>
          <div className="flex items-center gap-4">
            <span className="text-xs">{repository.primaryLanguage?.name}</span>
            <div className="flex items-center gap-1">
              <Star aria-label="Stars" className="size-4 fill-zinc-500" />
              <span>{repository.stargazerCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitBranch aria-label="Forks" className="size-4 fill-zinc-500" />
              <span>{repository.forkCount}</span>
            </div>
          </div>
        </div>
      ))}

      {showLoadMoreButton && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-zinc-200 px-4 py-2 text-xs font-medium hover:bg-zinc-300 focus-visible:bg-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
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
    </div>
  );
}
