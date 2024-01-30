"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";
import { Button } from "../shadcn/ui/button";
import { CommandDialog, CommandInput } from "../shadcn/ui/command";

const dummyData = [
  {
    uuid: 1,
    university_name: "Universitas Pelita Harapan",
    address: "Jalan M.H. Thamrin Boulevard No.1100",
  },
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");

  function handleSearchInput(input: string) {
    console.log(input);
    setSearchInput(input);
  }

  function onEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const params = new URLSearchParams();
      params.set("q", searchInput);
      router.push(`/search?${params.toString()}`);
    }
  }

  function handleOpen() {
    setIsOpen(true);
  }
  return (
    <>
      <Button onClick={handleOpen}>
        Search a school
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type in a school name..." />
      </CommandDialog>
    </>
  );
};
export default SearchBar;
