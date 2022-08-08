import { FC } from "react";

interface Props {
  url: string;
  title: string;
  icon?: string;
}

const LinkItem: FC<Props> = ({ title, url, icon }) => {
  return (
    <a
      href={url}
      className="flex justify-center items-center w-full h-16 border-2 border-white bg-white hover:bg-transparent text-gray-400 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-none"
    >
      {title}
    </a>
  );
};

export default LinkItem;
