"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Warning } from "@/components/icons";

export default function Error() {
  const username = usePathname().split("/").pop();

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-20 px-10 py-40">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-lg bg-red-100">
          <Warning className="size-8 fill-red-500" />
        </div>
        <h2 className="text-xl font-semibold">Something went wrong</h2>
        <p className="text-zinc-600">
          Oops! We couldn&apos;t find a user with username{" "}
          <span className="font-medium text-red-500 underline decoration-dotted underline-offset-2">
            {username}
          </span>
          . Please check the username and try again.
        </p>
      </div>
      <Link
        href="/"
        className="w-full max-w-xs rounded-full bg-zinc-100 py-3 text-center text-sm font-semibold text-zinc-600 transition hover:bg-zinc-200"
      >
        Go Back
      </Link>
    </div>
  );
}
