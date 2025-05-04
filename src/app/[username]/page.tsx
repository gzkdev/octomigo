"use client";

import Link from "next/link";

import { useProfile } from "@/hooks/useProfile";
import { usePathname } from "next/navigation";

import { CaretLeft, Spinner } from "@/components/icons";
import ProfileBio from "@/components/profile/profile-bio";
import ProfileStats from "@/components/profile/profile-stats";
import RepositoryList from "@/components/repository-list";
import ProfileHeader from "@/components/profile/profile-header";

export default function ProfileLayout() {
  const username = usePathname().split("/").pop() ?? "";
  const { data, loading, error } = useProfile(username);

  return (
    <div className="min-h-full w-full max-w-xl text-sm">
      <div className="space-y-10">
        <div className="mb-6 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 fill-current font-semibold text-zinc-500"
          >
            <CaretLeft aria-hidden="true" className="size-4" />
            <span>Back</span>
          </Link>
        </div>

        {loading && (
          <div className="flex items-center justify-center">
            <Spinner className="size-6 animate-spin fill-zinc-500" />
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center">
            <p className="text-red-500">
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
