import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import { HeaderRoutes } from "../Header/Header";

type NavLinkProps = {
  route: HeaderRoutes;
  isCurrent: boolean;
};

const NavLink = ({ route, isCurrent }: NavLinkProps) => {
  return (
    <Link
      href={route.href}
      className={cn(
        "text-sm text-muted-foreground transition-colors hover:text-primary",
        isCurrent && "text-primary",
      )}
    >
      {route.label}
    </Link>
  );
};

export default NavLink;
