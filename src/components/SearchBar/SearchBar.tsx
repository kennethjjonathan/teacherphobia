"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
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
    e.stopPropagation();
    if (e.key === "Enter") {
      const params = new URLSearchParams();
      params.set("q", searchInput);
      router.push(`/search?${params.toString()}`);
    }
  }
  return (
    <Autocomplete
      label="Search a school"
      size="lg"
      isClearable
      description="Press enter to search"
      disableSelectorIconRotation
      selectorIcon={null}
      fullWidth
      value={searchInput}
      onInputChange={handleSearchInput}
      onKeyDown={onEnter}
      allowsCustomValue
    >
      {dummyData.map((item) => (
        <AutocompleteItem key={item.uuid}>
          {item.university_name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
export default SearchBar;
