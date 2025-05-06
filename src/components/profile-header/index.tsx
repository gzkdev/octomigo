import Image from "next/image";
import { Suspense } from "react";
import { Spinner } from "../icons";
import { useProfile } from "@/hooks/useProfile";
import { ErrorBoundary } from "react-error-boundary";

function ProfileHeaderContent({ username }: { username: string }) {
  const { data } = useProfile(username);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
          {data?.avatarUrl && (
            <Image
              src={data.avatarUrl}
              alt="Profile picture"
              width={48}
              height={48}
              className="size-full object-cover"
            />
          )}
        </div>

        <div>
          <div className="text-lg font-semibold">{data?.name}</div>
          <div className="text-sm font-semibold text-zinc-400">
            @{data?.username}
          </div>
        </div>
      </div>

      <p>{data?.bio}</p>

      <div className="flex gap-2">
        <p>
          <span className="font-medium">{data?.stats.followers}</span>
          <span className="text-zinc-500"> Followers</span>
        </p>
        <span aria-hidden="true">•</span>
        <p>
          <span className="font-medium">{data?.stats.following}</span>
          <span className="text-zinc-500"> Following</span>
        </p>
      </div>
    </div>
  );
}

function ProfileHeaderError() {
  return (
    <div className="flex items-center justify-center">
      <p className="text-red-500">Error loading profile. Please try again.</p>
    </div>
  );
}

function ProfileHeaderSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <Spinner className="size-6 animate-spin fill-zinc-500" />
    </div>
  );
}

export default function ProfileHeader({ username }: { username: string }) {
  return (
    <ErrorBoundary fallback={<ProfileHeaderError />}>
      <Suspense fallback={<ProfileHeaderSkeleton />}>
        <ProfileHeaderContent username={username} />
      </Suspense>
    </ErrorBoundary>
  );
}
