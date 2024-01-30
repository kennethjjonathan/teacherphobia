"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

const dummyData = [
  {
    uuid: 1,
    university_name: "Universitas Pelita Harapan",
    address: "Jalan M.H. Thamrin Boulevard No.1100",
  },
];

const SearchBar = () => {
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
  return (
    <Command label="Search a school" className="bg-red-500">
      <Command.Input
        value={searchInput}
        onValueChange={(value) => handleSearchInput(value)}
      />
      <Command.List>
        {dummyData.map((item, index) => (
          <Command.Item key={index}>{item.university_name}</Command.Item>
        ))}
      </Command.List>
    </Command>
  );
};
export default SearchBar;
