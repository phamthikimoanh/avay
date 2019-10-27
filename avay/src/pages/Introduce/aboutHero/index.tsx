import React from "react";
import { Layout } from "antd";
import HeroInfo from "./HeroInfo";

const AboutHero: React.FC = () => {
  return (
    <div>
      <Layout className={"about_hero"}>
        <HeroInfo />
      </Layout>
    </div>
  );
};

export default AboutHero;
