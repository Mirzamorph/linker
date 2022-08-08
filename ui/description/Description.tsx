import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
}

const Description: FC<Props> = ({ children, className }) => {
  return <div className={classNames(className, "text-center")}>{children}</div>;
};

export default Description;
