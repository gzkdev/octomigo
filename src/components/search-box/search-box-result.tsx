import { useRouter } from "next/navigation";
import { useProfile } from "@/hooks/useProfile";

import Image from "next/image";
import { Command } from "cmdk";
import { Spinner } from "../icons";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

type SearchResultProps = {
  userName: string;
};

function SearchBoxContent({ userName }: SearchResultProps) {
  const router = useRouter();
  const { data } = useProfile(userName);

  if (!data) return null;

  return (
    <Command.List>
      <Command.Group className="border-t border-t-zinc-300 p-2 text-sm">
        <Command.Item
          value={data?.username}
          onSelect={(value) => router.push(`/${value}`)}
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-zinc-200 data-[selected=true]:bg-zinc-200"
        >
          <div className="size-10 overflow-hidden rounded-full bg-zinc-100">
            {data?.avatarUrl && (
              <Image
                src={data?.avatarUrl}
                alt="Profile picture"
                width={48}
                height={48}
                className="size-full object-cover"
              />
            )}
          </div>
          <div className="text-sm">
            <p className="font-medium">{data?.name}</p>
            <p className="text-zinc-500">@{data?.username}</p>
          </div>
        </Command.Item>
      </Command.Group>
    </Command.List>
  );
}

function SearchBoxLoading() {
  return (
    <Command.Loading className="flex items-center justify-center border-t border-t-zinc-300 p-4">
      <Spinner
        aria-hidden="true"
        className="size-6 animate-spin fill-zinc-400"
      />
      <span className="sr-only">Searching for GitHub user</span>
    </Command.Loading>
  );
}

function SearchBoxError({ userName }: { userName: string }) {
  return (
    <Command.Empty className="flex items-center justify-center border-t border-t-zinc-300 p-4 text-xs !text-red-500 sm:text-sm">
      Couldn&apos;t find user with username: {userName}
    </Command.Empty>
  );
}

export default function SearchBoxResult({ userName }: SearchResultProps) {
  return (
    <ErrorBoundary
      key={userName}
      fallback={<SearchBoxError userName={userName} />}
    >
      <Suspense fallback={<SearchBoxLoading />}>
        <SearchBoxContent userName={userName} />
      </Suspense>
    </ErrorBoundary>
  );
}
