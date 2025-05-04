import { Users, UserPlus, Folder } from "../icons";

export default function ProfileStats({
  followersCount,
  followingCount,
  repositoriesCount,
}: {
  followersCount?: number;
  followingCount?: number;
  repositoriesCount?: number;
}) {
  return (
    <div className="space-y-2 rounded-lg bg-zinc-100 p-3 text-sm font-medium">
      <div className="flex items-center gap-2">
        <Users aria-hidden="true" className="size-5 fill-green-500" />
        <span>{followersCount} • Followers</span>
      </div>
      <div className="flex items-center gap-2">
        <UserPlus aria-hidden="true" className="size-5 fill-purple-500" />
        <span>{followingCount} • Following</span>
      </div>
      <div className="flex items-center gap-2">
        <Folder aria-hidden="true" className="size-5 fill-blue-500" />
        <span>{repositoriesCount} • Repositories</span>
      </div>
    </div>
  );
}
