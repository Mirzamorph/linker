import Profile from "components/profile/Profile";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { BlocksType } from "store/block/types";
import BasicLayout from "ui/layout/BasicLayout";

const blocks: BlocksType = [
  {
    id: "1",
    enabled: true,
    order: 1,
    type: "link",
    meta: {
      title: "Some link",
      url: "https://yandex.ru",
    },
  },
  {
    id: "2",
    enabled: true,
    order: 2,
    type: "link",
    meta: {
      title: "YouTube",
      url: "https://youtube.com",
    },
  },
  {
    id: "3",
    enabled: true,
    order: 3,
    type: "headline",
    meta: {
      title: "Other links",
    },
  },
  {
    id: "4",
    enabled: true,
    order: 4,
    type: "link",
    meta: {
      title: "Напиши как тебе",
      url: "https://telegram.me/mirzamorph",
    },
  },
  {
    id: "4",
    enabled: true,
    order: 4,
    type: "link",
    meta: {
      title: "Patrick Bateman",
      url: "https://www.youtube.com/watch?v=_bIz-NLajco&list=LL&index=3",
    },
  },
];

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const name = router.query.name as string;

  return (
    <BasicLayout>
      <Profile
        name={name}
        description="Lorem ipsum dolor sit amet consectetur."
        blocks={blocks}
      />
    </BasicLayout>
  );
};

export default ProfilePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
