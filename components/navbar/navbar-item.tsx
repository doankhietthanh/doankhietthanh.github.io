import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItem = ({ href, title }: MainNavItem) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href || "/"}
      className={cn(
        "transition-colors hover:text-primary/80",
        isActive ? "text-primary" : "text-foreground/60",
      )}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
