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
    <div className="space-y-4">
      <div className="font-medium">Profile Stats</div>
      <div className="space-y-2 bg-zinc-100 px-4 py-2">
        <div className="flex items-center gap-2">
          <Users aria-hidden="true" className="size-5 fill-blue-500" />
          <span>
            <span className="font-medium">{followersCount}</span>{" "}
            <span className="text-zinc-500">Followers</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserPlus aria-hidden="true" className="size-5 fill-blue-500" />
          <span>
            <span className="font-medium">{followingCount}</span>{" "}
            <span className="text-zinc-500">Following</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Folder aria-hidden="true" className="size-5 fill-blue-500" />
          <span>
            <span className="font-medium">{repositoriesCount}</span>{" "}
            <span className="text-zinc-500">Repositories</span>
          </span>
        </div>
      </div>
    </div>
  );
}
