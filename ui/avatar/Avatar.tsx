import Image from "next/image";
import { memo } from "react";
import { addBase64 } from "utils/fileInputUtils";

interface Props {
  letter: string;
  imgSrc?: string;
}

const Avatar = memo<Props>(({ letter, imgSrc }) => {
  return (
    <div className="flex justify-center items-center bg-black text-white text-2xl rounded-full w-24 h-24 p-1">
      {imgSrc ? (
        <div className="relative w-full h-full overflow-hidden rounded-full">
          <Image
            className="block w-full h-full object-fill"
            src={addBase64(imgSrc)}
            alt="avatar"
            layout="fill"
          />
        </div>
      ) : (
        letter.toLocaleUpperCase()
      )}
    </div>
  );
});

export default Avatar;
