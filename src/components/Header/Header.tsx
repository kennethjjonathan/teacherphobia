"use client";

import { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import NavLink from "../NavLink/NavLink";
import TeacherPhobiaLogo from "../TeacherPhobiaLogo/TeacherPhobiaLogo";

export type HeaderRoutes = {
  href: string;
  label: string;
};

const unsignedRoutes: HeaderRoutes[] = [
  {
    href: "/signin",
    label: "Sign In",
  },
  {
    href: "/signup",
    label: "Sign Up",
  },
];

type HeaderProps = {
  user: User | null;
};
const Header = ({ user }: HeaderProps) => {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/signup") {
    return (
      <header className="flex w-full items-center justify-center border-b-[0.5px] border-input py-3.5">
        <TeacherPhobiaLogo />
      </header>
    );
  }

  return (
    <header className="w-full border-b-[0.5px] border-input py-3.5">
      <div className="container flex items-center justify-between">
        <TeacherPhobiaLogo />
        <nav className="flex items-center justify-end gap-10">
          {unsignedRoutes.map((route) => (
            <NavLink
              key={route.href}
              route={route}
              isCurrent={pathname === route.href}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
