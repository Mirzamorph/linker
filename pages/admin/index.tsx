import { ConstructorLayout } from "components/constructor-layout/ConstructorLayout";
import Constructor from "components/constructor/Constructor";
import type { GetStaticProps, NextPage } from "next";

const AdminConstructor: NextPage = () => {
  return (
    <ConstructorLayout>
      <Constructor />
    </ConstructorLayout>
  );
};

export default AdminConstructor;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
