import { FC } from "react";
import { BlocksType } from "store/block/types";
import Avatar from "ui/avatar/Avatar";
import HeadlineBlockItem from "ui/block-item/HeadlineBlockItem";
import LinkBlockItem from "ui/block-item/LinkBlockItem";
import BlockList from "ui/block-list/BlockList";
import Description from "ui/description/Description";
import ProfileLayout from "ui/layout/ProfileLayout";
import Name from "ui/name/Name";

interface Props {
  name: string;
  description: string;
  blocks: BlocksType;
}

const Profile: FC<Props> = ({ name, description, blocks }) => {
  if (!name) return null;

  return (
    <ProfileLayout>
      <Avatar letter={name[0]} />
      <Name className="mt-4">{name}</Name>
      <Description>{description}</Description>
      <BlockList className="mt-8">
        {blocks.map((block) => {
          if (block.type === "link") {
            return (
              <LinkBlockItem
                key={block.id}
                title={block.meta.title}
                url={block.meta.url}
              />
            );
          }
          return <HeadlineBlockItem key={block.id} title={block.meta.title} />;
        })}
      </BlockList>
    </ProfileLayout>
  );
};

export default Profile;
