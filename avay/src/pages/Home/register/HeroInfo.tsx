import React from "react";
import {Col, Row} from "antd";
const HeroInfo: React.FC = () => {
    return (
        <Row  type="flex" justify="space-around" className={'main_hero_info'}>
            <Col span={11} className={'text_center'}>
                <h1>Vay tín chấp siêu tốc tới 70 triệu đồng</h1>
                <p>Để đăng ký vay, bạn vui lòng cung cấp các thông tin cá nhân dưới đây, sau đó nhập mã bảo mật như
                    trong hình và ấn nút "Đăng ký". AVAY sẽ gửi tin nhắn xác nhận đến SĐT của bạn.</p>
            </Col>
        </Row>
    );
}
export  default HeroInfo