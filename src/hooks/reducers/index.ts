import { produce } from "immer";
import { OrderDirection, OrderField } from "@/lib/types";

export type RepositoriesOrderState = {
  field: OrderField;
  direction: OrderDirection;
};

export type RepositoriesOrderFieldAction = {
  type: "SET_ORDER_FIELD";
  payload: OrderField;
};

export type RepositoriesOrderDirectionAction = {
  type: "SET_ORDER_DIRECTION";
  payload: OrderDirection;
};

type Action = RepositoriesOrderFieldAction | RepositoriesOrderDirectionAction;

export function repositoriesOrderReducer(
  state: RepositoriesOrderState,
  action: Action,
): RepositoriesOrderState {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SET_ORDER_FIELD":
        draft.field = action.payload;
        break;
      case "SET_ORDER_DIRECTION":
        draft.direction = action.payload;
        break;
    }
  });
}
