import { memo } from "react";

interface Props {
  letter: string;
}

const Avatar = memo<Props>(({ letter }) => {
  return (
    <div className="flex justify-center items-center bg-black text-white text-2xl rounded-full w-24 h-24">
      {letter.toLocaleUpperCase()}
    </div>
  );
});

export default Avatar;
