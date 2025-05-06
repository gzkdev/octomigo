import { GitBranch, Star } from "../icons";

type RepositoryListItemProps = {
  username?: string;
  name?: string;
  description?: string | null;
  primaryLanguage?: string;
  stargazerCount?: number;
  forkCount?: number;
};

function RepositoryListItem({
  username,
  name,
  description,
  primaryLanguage,
  stargazerCount,
  forkCount,
}: RepositoryListItemProps) {
  return (
    <div className="relative space-y-4 rounded-lg border border-zinc-300 px-3 py-2 transition-opacity hover:opacity-50">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/${username}/${name}`}
        className="truncate text-sm font-semibold after:absolute after:inset-0"
      >
        {name}
      </a>
      <div className="line-clamp-2 text-zinc-500">{description}</div>
      <div className="flex items-center gap-4 text-xs">
        {primaryLanguage && <span>{primaryLanguage}</span>}
        <div className="flex items-center gap-1">
          <Star aria-label="Stars" className="size-4 fill-zinc-500" />
          <span>{stargazerCount}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitBranch aria-label="Forks" className="size-4 fill-zinc-500" />
          <span>{forkCount}</span>
        </div>
      </div>
    </div>
  );
}

export default RepositoryListItem;
