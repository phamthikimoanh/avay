import React from "react";
import {Layout, Row} from 'antd';
import NavBar from "./NavBar";
import Logo from "./Logo";

const {Header} = Layout;
const HeaderApp: React.FC = () => {
    return (
        <Header className={'app_header'}>
            <Row type="flex" justify="space-around">
                <Logo/>
                <NavBar/>
            </Row>
        </Header>
    );
};
export default HeaderApp;
