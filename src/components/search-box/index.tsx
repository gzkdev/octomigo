"use client";

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

import { Command } from "cmdk";
import { Search } from "../icons";
import SearchBoxResult from "./search-box-result";

export default function SearchBox() {
  const [userName, setUserName] = useState("");
  const debouncedUserName = useDebounce(userName, 500);

  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center">
      <Command className="w-full overflow-hidden rounded-lg border border-zinc-200 shadow-2xl">
        <div className="relative flex items-center">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-2 size-5 fill-zinc-400"
          />

          <Command.Input
            value={userName}
            onValueChange={(value) => setUserName(value)}
            placeholder="Enter Github username..."
            className="w-full py-2 pr-4 pl-9 text-base outline-none hover:outline-none focus-visible:outline-none"
          />
        </div>

        <SearchBoxResult userName={debouncedUserName} />
      </Command>
    </div>
  );
}
