"use client";

import { useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useDebounce } from "@/hooks/useDebounce";

import { Command } from "cmdk";
import { Search } from "../icons";
import SearchResult from "./search-result";

export default function SearchBox() {
  const [userName, setUserName] = useState("");
  const debouncedUserName = useDebounce(userName, 500);
  const searchResult = useProfile(debouncedUserName);

  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center">
      <Command className="w-full overflow-hidden rounded-lg border border-zinc-200 shadow-2xl">
        <div className="relative flex w-full items-center border-b border-transparent border-b-zinc-300">
          <Search className="pointer-events-none absolute right-4 fill-zinc-400" />
          <Command.Input
            value={userName}
            onValueChange={(value) => setUserName(value)}
            placeholder="Enter Github username..."
            className="w-full px-4 py-2 text-base outline-none hover:outline-none focus-visible:outline-none"
          />
        </div>

        <SearchResult data={searchResult} />
      </Command>
    </div>
  );
}
