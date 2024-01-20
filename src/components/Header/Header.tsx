import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { User } from "@supabase/supabase-js";
import TeacherPhobiaLogo from "../TeacherPhobiaLogo/TeacherPhobiaLogo";

type HeaderProps = {
  user: User | null;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <Navbar isBordered maxWidth="full">
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
      <NavbarContent justify="end" className="hidden sm:flex">
        <Avatar size="sm" />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
