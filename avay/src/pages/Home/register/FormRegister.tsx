import React from "react";
import {Layout} from 'antd';
import HeroInfo from "./HeroInfo";
import HeroSignUp from "./HeroSignUp";

const FormRegister: React.FC = () => {
    return (
        <Layout className={'main_hero register_form'}>
            <HeroInfo/>
            <HeroSignUp/>
        </Layout>
    );
};

export default FormRegister;