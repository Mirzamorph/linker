import classNames from "classnames";
import { memo } from "react";

interface Props {
  children: string;
  className?: string;
}

const Name = memo<Props>(({ children, className }) => {
  return (
    <div className={classNames(className, "font-bold text-lg")}>
      @{children}
    </div>
  );
});

export default Name;
