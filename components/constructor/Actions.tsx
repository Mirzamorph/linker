import { memo } from "react";
import { useAddHeadlineBlock, useAddLinkBlock } from "store/block/hooks";
import Button from "ui/button/Button";

const Actions = memo(() => {
  const addLink = useAddLinkBlock();
  const addHeadline = useAddHeadlineBlock();

  return (
    <div className="flex gap-x-3">
      <Button variant="indigo" onClick={addLink}>
        Add a link
      </Button>
      <Button variant="pink" onClick={addHeadline}>
        Add a headline
      </Button>
    </div>
  );
});

export default Actions;
