import { ConstructorLayout } from "components/constructor-layout/ConstructorLayout";
import Settings from "components/settings/Settings";
import type { GetStaticProps, NextPage } from "next";

const Appearance: NextPage = () => {
  return (
    <ConstructorLayout>
      <Settings />
    </ConstructorLayout>
  );
};

export default Appearance;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
