import { memo, ReactNode } from "react";

interface Props {
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

const BaseIcon = memo<Props>(({ onClick, children, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
});

export default BaseIcon;
