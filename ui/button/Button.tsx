import classNames from "classnames";
import { memo, ReactNode } from "react";
import styles from "./Button.module.scss";

type TButtonStyle = "gradient" | "pink" | "indigo";
type TButtonVariant = {
  [key in TButtonStyle]: string;
};

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  variant?: TButtonStyle;
}

const buttonStyle: TButtonVariant = {
  gradient: styles.gradient,
  indigo: styles.indigo,
  pink: styles.pink,
};

const Button = memo<ButtonProps>(
  ({ onClick, className, children, variant = "gradient" }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={classNames(className, styles.btn, buttonStyle[variant])}
      >
        {children}
      </button>
    );
  }
);

export default Button;
