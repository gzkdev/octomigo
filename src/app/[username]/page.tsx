"use client";

import Link from "next/link";

import { useProfile } from "@/hooks/useProfile";
import { usePathname } from "next/navigation";

import { ArrowLeft, Spinner } from "@/components/icons";
import ProfileBio from "@/components/profile/profile-bio";
import ProfileStats from "@/components/profile/profile-stats";
import RepositoryList from "@/components/repository-list";
import ProfileHeader from "@/components/profile/profile-header";

export default function ProfileLayout() {
  const username = usePathname().split("/").pop() ?? "";
  const { data, loading, error } = useProfile(username);

  return (
    <div className="min-h-full w-full max-w-xl">
      <div className="space-y-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 fill-current text-sm font-semibold text-zinc-500"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span>Back</span>
          </Link>
        </div>

        {loading && (
          <div className="flex h-12 items-center justify-center">
            <Spinner className="size-6 animate-spin fill-zinc-500" />
          </div>
        )}

        {error && (
          <div className="flex h-12 items-center justify-center">
            <p className="text-sm text-red-500">
              Error loading profile. Please try again.
            </p>
          </div>
        )}

        <ProfileHeader
          username={data?.username}
          avatarUrl={data?.avatarUrl}
          name={data?.name}
        />

        <ProfileBio bio={data?.bio} />

        <ProfileStats
          followersCount={data?.stats.followers}
          followingCount={data?.stats.following}
          repositoriesCount={data?.stats.repositories}
        />

        <RepositoryList username={data?.username} />
      </div>
    </div>
  );
}
