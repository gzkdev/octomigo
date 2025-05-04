import { useRouter } from "next/navigation";
import { useProfile } from "@/hooks/useProfile";

import Image from "next/image";
import { Command } from "cmdk";
import { Spinner } from "../icons";

type SearchResultProps = {
  data: ReturnType<typeof useProfile>;
};

export default function SearchResult({ data }: SearchResultProps) {
  const router = useRouter();

  if (data.error) {
    return (
      <Command.Empty className="flex items-center justify-center p-4 text-xs !text-red-500 sm:text-sm">
        Couldn&apos;t find user with username: {data?.variables?.username}
      </Command.Empty>
    );
  }

  if (data.loading) {
    return (
      <Command.Loading className="flex items-center justify-center p-4">
        <Spinner
          aria-hidden="true"
          className="size-6 animate-spin fill-zinc-400"
        />
        <span className="sr-only">Searching for GitHub user</span>
      </Command.Loading>
    );
  }

  if (!data.data) return null;

  return (
    <Command.List>
      <Command.Group className="p-4 text-sm">
        <Command.Item
          value={data?.variables?.username}
          onSelect={() => {
            router.push(`/${data?.data?.username}`);
          }}
          className="-m-2 flex items-center gap-2 rounded p-2 hover:bg-zinc-200 data-[selected=true]:bg-zinc-200"
        >
          <div className="size-12 overflow-hidden rounded-full bg-zinc-100">
            {data?.data?.avatarUrl && (
              <Image
                src={data?.data?.avatarUrl}
                alt="Profile picture"
                width={48}
                height={48}
                className="size-full object-cover"
              />
            )}
          </div>
          <div className="text-sm">
            <p className="font-medium">{data?.data?.name}</p>
            <p className="text-zinc-500">@{data.data?.username}</p>
          </div>
        </Command.Item>
      </Command.Group>
    </Command.List>
  );
}
