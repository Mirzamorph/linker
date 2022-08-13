import classNames from "classnames";
import { memo } from "react";
import { useAddHeadlineBlock, useAddLinkBlock } from "store/block/hooks";
import Button from "ui/button/Button";

interface Props {
  className?: string;
}

const Actions = memo<Props>(({ className }) => {
  const addLink = useAddLinkBlock();
  const addHeadline = useAddHeadlineBlock();

  return (
    <div
      className={classNames(
        "grid grid-flow-col auto-cols-max gap-x-3 overflow-x-auto pb-4",
        className
      )}
    >
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
