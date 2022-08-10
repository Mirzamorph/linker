import { useAppDispatch, useAppSelector } from "store/hooks";
import { setDescription, setName } from "./settingsSlice";

export const useSettingsCredentials = () => {
  const { name, description } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const onChangeName = (name: string) => {
    dispatch(setName(name));
  };
  const onChangeDescription = (description: string) => {
    dispatch(setDescription(description));
  };

  return {
    name,
    description,
    onChangeName,
    onChangeDescription,
  };
};
