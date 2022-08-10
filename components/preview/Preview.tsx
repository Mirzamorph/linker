import Profile from "components/profile/Profile";
import { FC } from "react";
import { useAppSelector } from "store/hooks";
import PhoneScaffold from "ui/phone-scaffold/PhoneScaffold";

const Preview: FC = () => {
  const { name, description } = useAppSelector((state) => state.settings);
  const { blocks } = useAppSelector((state) => state.blocks);

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="scale-[0.6]">
        <PhoneScaffold>
          <Profile name={name} description={description} blocks={blocks} />
        </PhoneScaffold>
      </div>
    </div>
  );
};

export default Preview;
