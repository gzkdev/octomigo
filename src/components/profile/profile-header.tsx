import Image from "next/image";

export default function ProfileHeader({
  avatarUrl = "",
  name = "",
  username = "",
}: {
  avatarUrl?: string;
  name?: string | null;
  username?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
        {avatarUrl ? (
          <Image src={avatarUrl} alt="Profile picture" width={48} height={48} />
        ) : null}
      </div>

      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm font-semibold text-zinc-400">@{username}</div>
      </div>
    </div>
  );
}
