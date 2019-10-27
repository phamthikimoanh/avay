import React from "react";
import {Layout, Row} from 'antd';
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const {Header} = Layout;
const FooterApp: React.FC = () => {
    return (
        <Header className={'app_header'}>
            <Row type="flex" justify="space-around">
                <FooterLeft/>
                <FooterRight/>
            </Row>
        </Header>
    );
};
export default FooterApp;
