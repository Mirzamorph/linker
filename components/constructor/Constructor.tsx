import HeadlineConstructorBlock from "components/constructor-block/headline-constructor-block/HeadlineConstructorBlock";
import LinkConstructorBlock from "components/constructor-block/link-constructor-block/LinkConstructorBlock";
import { FC } from "react";
import { useAppSelector } from "store/hooks";
import { useSettingsCredentials } from "store/settings/hooks";
import Input from "ui/field/Input";
import TextArea from "ui/field/TextArea";
import Actions from "./Actions";

interface Props {}

const Constructor: FC<Props> = () => {
  const { blocks } = useAppSelector((state) => state.blocks);
  const { name, description, onChangeName, onChangeDescription } =
    useSettingsCredentials();

  return (
    <div className="p-20 border-r border-stone-200 overflow-y-auto">
      <h1 className="text-3xl mb-2">Settings</h1>

      <div className="flex flex-col gap-y-2">
        <Input label="Username" value={name} onChange={onChangeName} />
        <TextArea
          label="Description"
          value={description}
          onChange={onChangeDescription}
        />
      </div>

      <div className="flex items-center mt-8 mb-6">
        <h1 className="text-3xl mr-auto">Blocks</h1>
        <Actions />
      </div>

      <div className="flex flex-col gap-y-4">
        {blocks.map((block) => {
          if (block.type === "link") {
            return <LinkConstructorBlock key={block.id} block={block} />;
          }
          return <HeadlineConstructorBlock key={block.id} block={block} />;
        })}
      </div>
    </div>
  );
};

export default Constructor;
