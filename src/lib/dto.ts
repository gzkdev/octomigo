import { GetUserResponse, TransformedUser } from "@/graphql/types/github";

export function transformGetUser(
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
