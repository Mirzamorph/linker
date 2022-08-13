import Preview from "components/preview/Preview";
import { FC, ReactNode } from "react";
import AdminLayout from "ui/layout/AdminLayout";
import BasicLayout from "ui/layout/BasicLayout";

interface Props {
  children: ReactNode;
}

export const ConstructorLayout: FC<Props> = ({ children }) => {
  return (
    <BasicLayout className="bg-slate-100">
      <div className="grid grid-cols-3 h-full">
        <AdminLayout>{children}</AdminLayout>
        <Preview />
      </div>
    </BasicLayout>
  );
};
