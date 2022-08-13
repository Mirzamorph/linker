import { FC } from "react";
import { useSettingsCredentials } from "store/settings/hooks";
import AvatarInput from "ui/form-field/AvatarInput";

import TextArea from "ui/form-field/TextArea";
import TextInput from "ui/form-field/TextInput";

const Settings: FC = () => {
  const {
    name,
    description,
    avatar,
    onChangeName,
    onChangeDescription,
    onChangeAvatar,
  } = useSettingsCredentials();

  return (
    <div>
      <h1 className="text-3xl">Settings</h1>

      <div className="flex flex-col gap-y-6 mt-6">
        <AvatarInput onChange={onChangeAvatar} letter={name[0]} />
        <TextInput label="Username" value={name} onChange={onChangeName} />
        <TextArea
          label="Description"
          value={description}
          onChange={onChangeDescription}
        />
      </div>
    </div>
  );
};

export default Settings;
