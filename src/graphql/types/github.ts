export interface Language {
  name: string;
  color: string;
}

export interface Repository {
  name: string;
  description: string | null;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage: Language | null;
}

export interface Followers {
  totalCount: number;
}

export interface User {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  websiteUrl: string | null;
  followers: Followers;
  following: Followers;
  repositories: {
    totalCount: number;
  };
}

export type TransformedUser = {
  username: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  stats: {
    followers: number;
    following: number;
    repositories: number;
  };
};

export interface RepositoriesResponse {
  user: {
    repositories: {
      nodes: Repository[];
      totalCount: number;
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
    };
  };
}

export interface GetUserResponse {
  user: User | null;
}

export type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
};

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface ContributionsResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    };
  } | null;
}
