import { memo, useCallback } from "react";
import { useChangeBlockField, useRemoveBlock } from "store/block/hooks";
import { ILinkBlock } from "store/block/types";
import BaseConstructorBlock from "ui/constructor-block/BaseConstructorBlock";
import TextInput from "ui/form-field/TextInput";
import TrashButton from "ui/icons/Trash";

interface Props {
  block: ILinkBlock;
}

const LinkConstructorBlock = memo<Props>(({ block }) => {
  const updateField = useChangeBlockField(block);
  const removeBlock = useRemoveBlock(block.id);

  const updateTitleHandle = useCallback(
    (value: string) => updateField("title", value, true),
    [updateField]
  );
  const updateUrlHandle = useCallback(
    (value: string) => updateField("url", value, true),
    [updateField]
  );

  return (
    <BaseConstructorBlock>
      <div className="flex flex-grow gap-x-3 items-center">
        <div className="grid flex-grow grid-cols-2 gap-x-3">
          <TextInput
            value={block.meta.title}
            onChange={updateTitleHandle}
            className="bg-slate-100"
            placeholder="Title"
          />
          <TextInput
            value={block.meta.url}
            onChange={updateUrlHandle}
            className="bg-slate-100"
            placeholder="Url"
          />
        </div>
        <div>
          <TrashButton onClick={removeBlock} />
        </div>
      </div>
    </BaseConstructorBlock>
  );
});

export default LinkConstructorBlock;
