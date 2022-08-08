import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
}

const Name: FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames(className, "font-bold text-lg")}>{children}</div>
  );
};

export default Name;
