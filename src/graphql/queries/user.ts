import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($username: String!) {
    user(login: $username) {
      login
      name
      avatarUrl
      bio
      company
      location
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`;
