import React from "react";
import {Col, Row} from "antd";

const HeroInfo: React.FC = () => {
    return (
        <Row type="flex" justify="space-around" className={'about_hero_text'}>
            <Col span={11} className={"text_center"}>
                <img src="https://avay.vn/shared/images/about/about-logo.svg" alt="Logo Avay" className={"about_logo"}/>
                <h1 className={"about_h1"}>AVAY - Vay tín chấp siêu tốc</h1>
                <p>Dịch vụ cung cấp các khoản vay tiền mặt tín chấp từ các ngân hàng và công ty tài chính uy tín với khả
                    năng duyệt vay tự động, cho biết kết quả phê duyệt ngay trong vài phút.</p>
            </Col>
        </Row>
    );
};
export default HeroInfo