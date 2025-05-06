import { Suspense, useId } from "react";
import useContributions from "@/hooks/useContributions";

import { Spinner } from "../icons";
import { ErrorBoundary } from "react-error-boundary";
import { ContributionDay as ContributionDayType } from "@/graphql/types/github";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function ContributionDay({ day }: { day: ContributionDayType }) {
  return (
    <Tooltip>
      <TooltipTrigger
        className="size-2.5 rounded-xs"
        style={{ backgroundColor: day.color }}
      />
      <TooltipContent>
        {day.contributionCount} contributions on {day.date}
      </TooltipContent>
    </Tooltip>
  );
}

function ContributionGraphContent({ username }: { username: string }) {
  const id = useId();
  const { data } = useContributions(username);

  if (!data) return null;

  return (
    <TooltipProvider>
      <div className="space-y-2">
        <p>{data.totalContributions} contributions in the last year</p>

        <div className="rounded-lg border border-zinc-300 p-4">
          <div className="overflow-x-auto">
            <div className="flex gap-0.5 whitespace-nowrap">
              {data.weeks.map((week, weekIndex) => (
                <div
                  className="flex flex-col gap-0.5"
                  key={`${id}-${weekIndex}`}
                >
                  {week.contributionDays.map((day, dayIndex) => (
                    <ContributionDay key={`${id}-${dayIndex}`} day={day} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

function ContributionGraphSkeleton() {
  return (
    <div className="flex h-28 items-center justify-center rounded-lg border border-zinc-300 p-4">
      <Spinner className="size-6 animate-spin fill-zinc-500" />
    </div>
  );
}

function ContributionGraphError({ username }: { username: string }) {
  return (
    <div className="flex min-h-28 items-center justify-center">
      <span className="text-red-500">
        Couldn&apos;t get contributions data for {username}
      </span>
    </div>
  );
}

export default function ContributionGraph({ username }: { username: string }) {
  return (
    <ErrorBoundary fallback={<ContributionGraphError username={username} />}>
      <Suspense fallback={<ContributionGraphSkeleton />}>
        <ContributionGraphContent username={username} />
      </Suspense>
    </ErrorBoundary>
  );
}
