import {
  OrderField,
  OrderDirection,
  RepositoriesOrderFieldOption,
  RepositoriesOrderDirectionOption,
} from "./types";

export const BASE_URL = "https://api.github.com/graphql";
export const GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export const REPOSITORIES_ORDER_FIELD_OPTIONS: RepositoriesOrderFieldOption[] =
  [
    { value: OrderField.CREATED_AT, label: "Created" },
    { value: OrderField.NAME, label: "Name" },
    { value: OrderField.PUSHED_AT, label: "Pushed" },
    { value: OrderField.STARGAZERS, label: "Stargazers" },
    { value: OrderField.UPDATED_AT, label: "Updated" },
  ];

export const REPOSITORIES_ORDER_DIRECTION_OPTIONS: RepositoriesOrderDirectionOption[] =
  [
    { value: OrderDirection.ASC, label: "Asc" },
    { value: OrderDirection.DESC, label: "Desc" },
  ];
