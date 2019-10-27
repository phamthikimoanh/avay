import {Link} from "react-router-dom";
import React from "react";
import {Col, Icon} from "antd";

const Logo: React.FC = () => {
    return (<Col span={7}>
        <Link to={'/'} className={'logo'}>
            <img src={require("../../public/img/logo-white.png")} alt="Avay logo"/>
        </Link>
        <Link className={'text_white logo_phone'} to={'tel:02871082829'}><Icon type={'phone'}/> 028 710 82829</Link>
    </Col>)
};
export default Logo;