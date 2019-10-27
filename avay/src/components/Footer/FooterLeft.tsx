import React from "react";
import {Col, Layout, Row} from 'antd';
import {Link} from "react-router-dom";

const FooterLeft: React.FC = () => {
    return (
        <Col span={10}>
            <h3>Hỗ trợ khách hàng</h3>
            <ul>
                <li>
                    <Link to={'/'}>Câu hỏi thường gặp</Link>
                </li>
                <li>
                    <Link to={'tell:'}>028 710 82829</Link>
                </li>
                <li>
                    <Link to={'mailto:'}>hotro@avay.vn</Link>
                </li>
                <li>
                    <Link to={'mailto:'}>AVAY.VN</Link>
                </li>
            </ul>
        </Col>
    );
};
export default FooterLeft;
