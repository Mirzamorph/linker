import Profile from "components/profile/Profile";
import { FC } from "react";
import { useAppSelector } from "store/hooks";
import PhoneScaffold from "ui/phone-scaffold/PhoneScaffold";

const Preview: FC = () => {
  const { name, description, avatar } = useAppSelector(
    (state) => state.settings
  );
  const { blocks } = useAppSelector((state) => state.blocks);

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="scale-[0.6]">
        <PhoneScaffold>
          {/* <iframe
            src="/mirzamorph"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe> */}
          <Profile
            name={name}
            description={description}
            avatar={avatar}
            blocks={blocks}
          />
        </PhoneScaffold>
      </div>
    </div>
  );
};

export default Preview;
