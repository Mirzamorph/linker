import { ChangeEventHandler, memo } from "react";
import { getFileInfo, InputBase64Return } from "utils/fileInputUtils";

export interface BasicFileInputProps {
  onChange: (file: InputBase64Return) => void;
  onError?: () => void;
}

interface Props extends BasicFileInputProps {
  id: string;
}

const BasicFileInput = memo<Props>(({ id, onChange, onError }) => {
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = async ({
    target,
  }) => {
    const fileInfo = await getFileInfo(target.files);
    if (fileInfo) {
      onChange(fileInfo);
      return;
    }
    onError?.();
  };

  return (
    <input id={id} type="file" onChange={onChangeHandle} className="hidden" />
  );
});

export default BasicFileInput;
