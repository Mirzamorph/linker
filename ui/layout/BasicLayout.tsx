import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const BasicLayout: FC<Props> = ({ className, children }) => {
  return <div className={classNames(className, "h-screen")}>{children}</div>;
};

export default BasicLayout;
