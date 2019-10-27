import React from "react";
import FormRegister from "./register/FormRegister";
import HomeFeature from "./../../components/Block/Feature/HomeFeature";
import HomeTestimonials from "../Home/Testimonials/homeTestimonials";
import HomeTestimonialSlider from "../Home/Testimonials/homeTestimonialSlider"
import {Layout} from 'antd';

const {Content} = Layout;

const HomeApp: React.FC = () => {
    return (<Content className={'main'}>
        <FormRegister/>
        <HomeFeature/>
        <HomeTestimonials/>
        <HomeTestimonialSlider/>
    </Content>);
};
export default HomeApp;
