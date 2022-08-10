import classNames from "classnames";
import { memo } from "react";

interface Props {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

const Input = memo<Props>(
  ({ label, value, placeholder, onChange, className }) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={label}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          type="text"
          name={label}
          id={label}
          className={classNames(
            "mt-1 h-10 p-2 block w-full shadow-sm sm:text-sm rounded-md",
            className
          )}
          value={value}
          autoComplete="off"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default Input;
