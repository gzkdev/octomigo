"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CaretLeft } from "@/components/icons";
import ProfileHeader from "@/components/profile-header";
import RepositoryList from "@/components/repository-list";
import ContributionGraph from "@/components/contributions-graph";

export default function ProfileLayout() {
  const username = usePathname().split("/").pop() ?? "";

  return (
    <div className="min-h-full w-full max-w-2xl text-sm">
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

        <ProfileHeader username={username} />
        <ContributionGraph username={username} />
        <RepositoryList username={username} />
      </div>
    </div>
  );
}
