import { useAppDispatch, useAppSelector } from "store/hooks";
import { setAvatar, setDescription, setName } from "./settingsSlice";

export const useSettingsCredentials = () => {
  const { name, description, avatar } = useAppSelector(
    (state) => state.settings
  );
  const dispatch = useAppDispatch();

  const onChangeName = (name: string) => {
    dispatch(setName(name));
  };
  const onChangeDescription = (description: string) => {
    dispatch(setDescription(description));
  };
  const onChangeAvatar = (avatar: string) => {
    dispatch(setAvatar(avatar));
  };

  return {
    name,
    description,
    avatar,
    onChangeName,
    onChangeDescription,
    onChangeAvatar,
  };
};
