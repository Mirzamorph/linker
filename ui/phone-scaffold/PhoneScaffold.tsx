import { memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PhoneScaffold = memo<Props>(({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-2 flex justify-center w-full h-8">
        <div className="h-full w-[200px] rounded-xl bg-black" />
      </div>
      <div className=" w-[390px] h-[844px] overflow-y-auto box-content bg-gradient-to-b from-purple-500 to-pink-500 border-[22px] border-black rounded-[60px] overflow-x-hidden">
        {children}
      </div>
    </div>
  );
});

export default PhoneScaffold;
