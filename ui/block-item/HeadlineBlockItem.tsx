import { memo } from "react";

interface Props {
  title: string;
}

const HeadlineBlockItem = memo<Props>(({ title }) => {
  return <div className="text-2xl text-center mt-4 first:mt-0">{title}</div>;
});

export default HeadlineBlockItem;
