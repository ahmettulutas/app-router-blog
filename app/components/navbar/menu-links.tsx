import { MenuLink } from "@/actions/get-menu-items";

export default async function NavbarLinks({
  menuItems,
}: {
  menuItems: MenuLink[];
}) {
  return (
    <ul className="flex items-center gap-4">
      {menuItems.map((link) => (
        <li key={link.url}>{link.label}</li>
      ))}
    </ul>
  );
}
