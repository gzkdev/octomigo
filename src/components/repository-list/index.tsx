import { useRepositoriesOrder } from "@/hooks/useRepositoriesOrder";
import RepositoryListFilters from "./repository-list-filters";
import RepositoryListContainer from "./repository-list-container";

export default function RepositoryList({ username }: { username?: string }) {
  const { repositoriesOrder, handleFieldChange, handleDirectionChange } =
    useRepositoriesOrder();

  return (
    <div className="space-y-4">
      <h2 className="font-medium">Repositories</h2>
      <RepositoryListFilters
        repositoriesOrder={repositoriesOrder}
        handleFieldChange={handleFieldChange}
        handleDirectionChange={handleDirectionChange}
      />

      <RepositoryListContainer
        repositoriesOrder={repositoriesOrder}
        username={username}
      />
    </div>
  );
}
