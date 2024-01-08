"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");


  function handleSearchInput(input: string) {
    setSearchInput(input);
  }
  return (
    null
  );
};
export default SearchBar;
