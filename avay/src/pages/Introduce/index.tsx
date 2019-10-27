import React from "react";
import {Layout} from 'antd';
import AboutHero from "./aboutHero";
import IntroFeature from "../../components/Block/Feature/HomeFeature";
import IntroCard from "../../components/Block/Card";
import About from "./team/AboutTeam"

const {Content} = Layout;

const IntroduceApp: React.FC = () => {
    return (<Content className={'main'}>
        <AboutHero/>
        <div className="about-feature">
        <IntroFeature />
      </div>
      <div className="about-single">
        <IntroCard />
      </div>
      <About/>
    </Content>)
};
export default IntroduceApp