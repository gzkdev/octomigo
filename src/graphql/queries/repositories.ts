import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories($username: String!, $orderBy: RepositoryOrder) {
    user(login: $username) {
      repositories(first: 10, orderBy: $orderBy) {
        nodes {
          name
          description
          stargazerCount
          forkCount
          updatedAt
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;
