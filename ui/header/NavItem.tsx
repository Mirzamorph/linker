import classNames from "classnames";
import Link from "next/link";
import { memo } from "react";

interface Props {
  children: string;
  href: string;
  isActive: boolean;
}

const NavItem = memo<Props>(({ href, isActive, children }) => {
  const activeClass =
    "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500";
  return (
    <Link href={href}>
      <a className={classNames("text-xl", { [activeClass]: isActive })}>
        {children}
      </a>
    </Link>
  );
});

export default NavItem;
