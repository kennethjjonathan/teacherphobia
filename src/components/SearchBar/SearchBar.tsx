"use client";

import CONSTANTS from "@/constants/constants";
import { useDebounce } from "@/hooks/useDebounce";
import { ISchoolSuggestion } from "@/interface/ISchool";
import { supabase } from "@/lib/supabase-client/supabase";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../shadcn/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "../shadcn/ui/command";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestionList, setSuggestionList] = useState<ISchoolSuggestion[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const searchDebounce = useDebounce<string>(searchInput, 500);
  const router = useRouter();

  const getSuggestion = useCallback(async () => {
    if (CONSTANTS.ONLY_WHITESPACE.test(searchDebounce)) {
      setIsLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from("schools")
        .select("uuid, name, address")
        .textSearch("name", searchDebounce, {
          type: "websearch",
          config: "english",
        })
        .limit(5);
      if (error) throw error;
      setSuggestionList([...data]);
      console.log(suggestionList);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchDebounce]);

  function handleSearchInput(input: string) {
    if (!isLoading) setIsLoading(true);
    setSearchInput(input);
  }
  function handleOpen() {
    setIsOpen(true);
  }

  function handleOnSelect(school_uuid: string) {
    router.push(`/${school_uuid}`);
  }

  useEffect(() => {
    getSuggestion();
  }, [getSuggestion]);
  return (
    <>
      <Button onClick={handleOpen}>Search a school</Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          value={searchInput}
          onValueChange={handleSearchInput}
          placeholder="Type in a school name..."
        />
        <CommandList>
          {isLoading ? (
            <CommandLoading>Loading...</CommandLoading>
          ) : suggestionList ? (
            <>
              {suggestionList.map((suggestion) => (
                <CommandItem
                  key={suggestion.uuid}
                  value={suggestion.name}
                  onSelect={() => handleOnSelect(suggestion.uuid)}
                >
                  {suggestion.name}
                </CommandItem>
              ))}
            </>
          ) : (
            <CommandEmpty>No suggestion</CommandEmpty>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};
export default SearchBar;
