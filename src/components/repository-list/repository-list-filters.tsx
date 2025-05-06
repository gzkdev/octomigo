import CustomSelect from "../custom/select";
import { OrderDirection, OrderField } from "@/lib/types";
import { RepositoriesOrderState } from "@/hooks/reducers";
import {
  REPOSITORIES_ORDER_DIRECTION_OPTIONS,
  REPOSITORIES_ORDER_FIELD_OPTIONS,
} from "@/lib/constants";

type RepositoryListFiltersProps = {
  repositoriesOrder: RepositoriesOrderState;
  handleFieldChange: (field: OrderField) => void;
  handleDirectionChange: (direction: OrderDirection) => void;
};

export default function RepositoryListFilters({
  repositoriesOrder,
  handleFieldChange,
  handleDirectionChange,
}: RepositoryListFiltersProps) {
  function handleOrderFieldChange(value: string) {
    handleFieldChange(value as OrderField);
  }

  function handleOrderDirectionChange(value: string) {
    handleDirectionChange(value as OrderDirection);
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="text-xs">Sort:</div>
      <CustomSelect
        options={REPOSITORIES_ORDER_FIELD_OPTIONS}
        value={repositoriesOrder.field}
        onChange={handleOrderFieldChange}
      />

      <CustomSelect
        options={REPOSITORIES_ORDER_DIRECTION_OPTIONS}
        value={repositoriesOrder.direction}
        onChange={handleOrderDirectionChange}
      />
    </div>
  );
}
