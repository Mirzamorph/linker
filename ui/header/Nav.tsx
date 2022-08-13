import { useRouter } from "next/router";
import { memo } from "react";
import NavItem from "./NavItem";

const links = [
  {
    title: "Links",
    uri: "/admin",
  },
  {
    title: "Appearance",
    uri: "/admin/appearance",
  },
];

const Nav = memo(() => {
  const pathname = useRouter().pathname;

  return (
    <div className="flex items-center gap-x-4">
      {links.map(({ title, uri }) => (
        <NavItem key={uri} href={uri} isActive={pathname === uri}>
          {title}
        </NavItem>
      ))}
    </div>
  );
});

export default Nav;
