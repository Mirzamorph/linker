import type { GetStaticProps, NextPage } from "next";
import Avatar from "../ui/avatar/Avatar";
import Description from "../ui/description/Description";
import LinkItem from "../ui/link-item/LinkItem";
import LinkList from "../ui/link-list/LinkList";
import Name from "../ui/name/Name";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="flex items-center flex-col w-full px-4 max-w-[675px] mx-auto py-10 text-white box-content">
        <Avatar />
        <Name className="mt-4">@mirzamorph</Name>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Description>
        <LinkList className="mt-8">
          <LinkItem title="Some link 1" url="https://yandex.ru" />
          <LinkItem title="Some link 2" url="https://yandex.ru" />
          <LinkItem title="Some link 3" url="https://yandex.ru" />
          <LinkItem title="Some link 4" url="https://yandex.ru" />
        </LinkList>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
