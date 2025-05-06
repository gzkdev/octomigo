import { useSuspenseQuery } from "@apollo/client";
import { GET_CONTRIBUTIONS } from "@/graphql/queries/contributions";
import { ContributionsResponse } from "@/graphql/types/github";

export default function useContributions(username?: string) {
  const { data } = useSuspenseQuery<ContributionsResponse>(GET_CONTRIBUTIONS, {
    variables: { username },
    skip: !username,
  });

  return {
    data: data?.user?.contributionsCollection?.contributionCalendar,
  };
}
