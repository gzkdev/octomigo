import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $username: String!
    $orderBy: RepositoryOrder
    $first: Int
    $after: String
  ) {
    user(login: $username) {
      repositories(first: $first, after: $after, orderBy: $orderBy) {
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
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
      }
    }
  }
`;
