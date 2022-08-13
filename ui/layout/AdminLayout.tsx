import { FC, ReactNode } from "react";
import Header from "ui/header/Header";

interface Props {
  children: ReactNode;
  className?: string;
}

const AdminLayout: FC<Props> = ({ className, children }) => {
  return (
    <div className="border-r border-stone-200 overflow-y-auto col-span-2">
      <Header />
      <div className="px-28 py-16">{children}</div>
    </div>
  );
};

export default AdminLayout;
