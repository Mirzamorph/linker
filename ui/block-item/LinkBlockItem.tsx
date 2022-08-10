import { memo } from "react";

interface Props {
  url: string;
  title: string;
  icon?: string;
}

const LinkBlockItem = memo<Props>(({ title, url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex justify-center items-center w-full h-16 border-2 border-white bg-white hover:bg-transparent text-gray-400 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-none"
      rel="noreferrer"
    >
      {title}
    </a>
  );
});

export default LinkBlockItem;
