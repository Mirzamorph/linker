import Constructor from "components/constructor/Constructor";
import Preview from "components/preview/Preview";
import type { GetStaticProps, NextPage } from "next";
import BasicLayout from "ui/layout/BasicLayout";

const Home: NextPage = () => {
  return (
    <BasicLayout className="bg-slate-100">
      <div className="grid grid-cols-2 h-full">
        <Constructor />
        <Preview />
      </div>
    </BasicLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
