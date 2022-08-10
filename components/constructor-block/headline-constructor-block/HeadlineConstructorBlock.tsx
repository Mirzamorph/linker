import { memo, useCallback } from "react";
import { useChangeBlockField, useRemoveBlock } from "store/block/hooks";
import { IHeadLineBlock } from "store/block/types";
import BaseConstructorBlock from "ui/constructor-block/BaseConstructorBlock";
import Input from "ui/field/Input";
import TrashButton from "ui/icons/Trash";

interface Props {
  block: IHeadLineBlock;
}

const HeadlineConstructorBlock = memo<Props>(({ block }) => {
  const updateField = useChangeBlockField(block);
  const removeBlock = useRemoveBlock(block.id);

  const updateTitleHandle = useCallback(
    (value: string) => updateField("title", value, true),
    [updateField]
  );

  return (
    <BaseConstructorBlock>
      <div className="flex flex-grow gap-x-3 items-center">
        <div className="w-full">
          <Input
            value={block.meta.title}
            onChange={updateTitleHandle}
            className="bg-slate-100"
            placeholder="Headline title"
          />
        </div>
        <div>
          <TrashButton onClick={removeBlock} />
        </div>
      </div>
    </BaseConstructorBlock>
  );
});

export default HeadlineConstructorBlock;
