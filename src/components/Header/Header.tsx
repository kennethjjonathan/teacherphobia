"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TeacherPhobiaLogo from "../TeacherPhobiaLogo/TeacherPhobiaLogo";

type HeaderProps = {
  user: User | null;
};

const Header = ({ user }: HeaderProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (pathname === "/signin" || pathname === "/signup") {
    return (
      <Navbar maxWidth="full" className="container px-0">
        <NavbarContent justify="center">
          <NavbarBrand>
            <TeacherPhobiaLogo />
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    );
  }
  return (
    <Navbar
      maxWidth="full"
      className="container px-0"
      isMenuOpen={isOpen}
      onMenuOpenChange={setIsOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <TeacherPhobiaLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden gap-4 sm:flex sm:text-small lg:text-medium"
        justify="center"
      >
        <NavbarItem className="cursor-pointer">
          <Link color="foreground" href="/">
            Search
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="hidden items-center justify-center gap-2 sm:flex"
      >
        {user ? (
          <>
            <Button as={Link} href="/profile">
              Profile
            </Button>
            <Button>Sign Out</Button>
          </>
        ) : (
          <>
            <Button as={Link} href="/signin">
              Sign In
            </Button>
            <Button as={Link} href="/signup">
              Sign Up
            </Button>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {user ? (
          <>
            <NavbarMenuItem>
              <Link className="text-default-foreground" href="/profile">
                Profile
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link className="text-default-foreground">Sign Out</Link>
            </NavbarMenuItem>
          </>
        ) : (
          <>
            <NavbarMenuItem>
              <Link className="text-default-foreground" href="/signin">
                Sign In
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link className="text-default-foreground" href="/signup">
                Sign Up
              </Link>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
