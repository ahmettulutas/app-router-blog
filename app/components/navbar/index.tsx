import { cn } from "@/utils/tw-utils";
import { UserCircle2Icon } from "lucide-react";

import NavbarLinks from "./menu-links";
import Logo from "../logo";
import { getMenuLinks } from "@/actions/get-menu-items";

export default async function Navbar() {
  const menuLinks = await getMenuLinks();
  return (
    <nav
      className={cn(
        "flex items-center justify-between py-4 max-w-[1440px] m-auto"
      )}
    >
      <Logo />
      <NavbarLinks menuItems={menuLinks} />
      <UserCircle2Icon />
    </nav>
  );
}
