"use client";

import { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import TeacherPhobiaLogo from "../TeacherPhobiaLogo/TeacherPhobiaLogo";

type HeaderProps = {
  user: User | null;
};
const Header = () => {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/signup") {
    return (
      <header className="flex w-full items-center justify-center border-b-[0.5px] border-input py-3.5">
        <TeacherPhobiaLogo />
      </header>
    );
  }

  return (
    <header className="flex w-full items-center justify-center border-b-[0.5px] border-input py-3.5">
      <TeacherPhobiaLogo />
    </header>
  );
};

export default Header;
