import { memo } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextArea = memo<Props>(({ label, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <textarea
          id={label}
          name={label}
          rows={5}
          className="p-2 shadow-sm mt-1 block w-full sm:text-sm rounded-md resize-none"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
});

export default TextArea;
