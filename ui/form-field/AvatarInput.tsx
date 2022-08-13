import classNames from "classnames";
import Image from "next/image";
import { memo, useId, useState } from "react";
import { InputBase64Return } from "utils/fileInputUtils";
import BasicFileInput, { BasicFileInputProps } from "./BasicFileInput";

interface Props extends Omit<BasicFileInputProps, "value" | "onChange"> {
  initialValue?: string;
  letter?: string;
  className?: string;
  onChange: (value: string) => void;
}

const AvatarInput = memo<Props>(
  ({ initialValue, letter, onChange, onError, className }) => {
    const [inputValue, setInputValue] = useState<InputBase64Return | null>(
      null
    );

    const id = useId();
    const showLetter = !inputValue && letter;
    const labelClass =
      "flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl rounded-full w-24 h-24 cursor-pointer p-1";

    const onChangeHandle = (value: InputBase64Return) => {
      setInputValue(value);
      onChange(value.fileString);
    };

    return (
      <div className="mx-auto">
        <label htmlFor={id} className={classNames(className, labelClass)}>
          <div
            className={classNames(
              "w-full h-full rounded-full bg-white overflow-hidden",
              {
                "bg-gradient-to-r from-purple-500 to-pink-500": !inputValue,
              }
            )}
          >
            {showLetter && (
              <div className="flex justify-center items-center w-full h-full">
                {letter.toLocaleUpperCase()}
              </div>
            )}
            {initialValue ||
              (inputValue?.fileBase64 && (
                <div className="relative w-full h-full object-fill">
                  <Image
                    src={inputValue.fileBase64 || initialValue || ""}
                    alt="avatar"
                    layout="fill"
                  />
                </div>
              ))}
            <BasicFileInput
              id={id}
              onChange={onChangeHandle}
              onError={onError}
            />
          </div>
        </label>
      </div>
    );
  }
);

export default AvatarInput;
