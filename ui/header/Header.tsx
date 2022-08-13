import { memo } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = memo(() => {
  return (
    <div className="sticky top-0 z-10 flex items-center h-20 px-6 border-b border-stone-200 bg-slate-100 shadow-sm drop-shadow-sm">
      <div className="flex gap-x-6">
        <Logo />
        <Nav />
      </div>
    </div>
  );
});

export default Header;
