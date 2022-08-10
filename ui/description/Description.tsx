import classNames from "classnames";
import { memo } from "react";

interface Props {
  children: string;
  className?: string;
}

const Description = memo<Props>(({ children, className }) => {
  return (
    <p className={classNames(className, "text-center break-all")}>{children}</p>
  );
});

export default Description;
