import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const LinkList: FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames(className, "flex flex-col w-full gap-y-5")}>
      {children}
    </div>
  );
};

export default LinkList;
