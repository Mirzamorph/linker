import HeadlineConstructorBlock from "components/constructor-block/headline-constructor-block/HeadlineConstructorBlock";
import LinkConstructorBlock from "components/constructor-block/link-constructor-block/LinkConstructorBlock";
import { FC } from "react";
import { useAppSelector } from "store/hooks";
import Actions from "./Actions";

interface Props {}

const Constructor: FC<Props> = () => {
  const { blocks } = useAppSelector((state) => state.blocks);

  return (
    <div className="">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl mr-auto">Blocks</h1>
      </div>

      <Actions className="my-4" />

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
