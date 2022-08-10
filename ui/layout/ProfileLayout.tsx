import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProfileLayout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-pink-500 h-max min-h-full">
      <div className="flex items-center flex-col w-full px-4 max-w-[720px] mx-auto py-10 text-white">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
