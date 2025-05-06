import { useSuspenseQuery } from "@apollo/client";
import { GET_USER } from "@/graphql/queries/user";
import { GetUserResponse, TransformedUser } from "@/graphql/types/github";

function transformUserData(
  data: GetUserResponse | undefined,
): TransformedUser | null {
  if (!data?.user) return null;

  return {
    username: data.user.login,
    name: data.user.name,
    avatarUrl: data.user.avatarUrl,
    bio: data.user.bio,
    stats: {
      followers: data.user.followers.totalCount,
      following: data.user.following.totalCount,
      repositories: data.user.repositories.totalCount,
    },
  };
}

export function useProfile(username: string) {
  const result = useSuspenseQuery<GetUserResponse>(GET_USER, {
    variables: { username },
    skip: !username,
  });

  return { data: transformUserData(result.data) };
}
