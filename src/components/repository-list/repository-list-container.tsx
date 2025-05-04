import { Spinner } from "../icons";
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
  const { data, loading, error } = useRepositories(repositoriesOrder, username);
  const noPublicRepositories = data?.user?.repositories?.nodes.length === 0;

  if (loading) {
    return (
      <div className="flex min-h-28 items-center justify-center">
        <Spinner className="size-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-28 items-center justify-center">
        <span className="text-sm text-red-500">Error: {error.message}</span>
      </div>
    );
  }

  if (!data) return null;

  if (noPublicRepositories) {
    return (
      <div className="flex min-h-28 items-center justify-center">
        <span className="text-sm text-gray-500">
          {username} has no public repositories
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data?.user?.repositories?.nodes.map((repository) => (
        <div key={repository.name} className="rounded bg-zinc-100 p-4">
          <div className="space-y-2 text-sm">
            <div className="text-xs font-semibold"> {repository.name}</div>
            <div>{repository.description}</div>
            <div>{repository.stargazerCount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
