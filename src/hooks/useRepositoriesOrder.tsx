import { useCallback, useReducer } from "react";
import { OrderDirection, OrderField } from "@/lib/types";
import { repositoriesOrderReducer } from "./reducers";

const INITIAL_REPOSITORIES_ORDER_STATE = {
  field: OrderField.UPDATED_AT,
  direction: OrderDirection.DESC,
};

export const useRepositoriesOrder = () => {
  const [repositoriesOrder, dispatch] = useReducer(
    repositoriesOrderReducer,
    INITIAL_REPOSITORIES_ORDER_STATE,
  );

  const handleFieldChange = useCallback(
    (field: OrderField) => {
      dispatch({ type: "SET_ORDER_FIELD", payload: field });
    },
    [dispatch],
  );

  const handleDirectionChange = useCallback(
    (direction: OrderDirection) => {
      dispatch({ type: "SET_ORDER_DIRECTION", payload: direction });
    },
    [dispatch],
  );

  return { repositoriesOrder, handleFieldChange, handleDirectionChange };
};
