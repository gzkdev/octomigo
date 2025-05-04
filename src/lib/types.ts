export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export enum OrderField {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  NAME = "NAME",
  PUSHED_AT = "PUSHED_AT",
  STARGAZERS = "STARGAZERS",
}

export type RepositoriesOrderFieldOption = {
  value: OrderField;
  label: string;
};

export type RepositoriesOrderDirectionOption = {
  value: OrderDirection;
  label: string;
};
