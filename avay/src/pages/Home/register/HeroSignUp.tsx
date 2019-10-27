import React from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Icon,
  Button,
  Checkbox,
  Select,
  DatePicker,
  Slider,
  InputNumber
} from "antd";
const InputGroup = Input.Group;

const HeroSignUp: React.FC = () => {
  const prefixPhone = <Icon type={"mobile"} />;
  const prefixUsername = <Icon type={"user"} />;
  const prefixIdcard = <Icon type={"idcard"} />;
  const prefixMarker = <Icon type={"heat-map"} />;
  const prefixMail = <Icon type="mail" />;
  const prefixProtect = <Icon type="property-safety" />;
  const { Option } = Select;
  return (
    <Row type={"flex"} justify="space-around">
      <Col span={11} className={"main_hero_signup"}>
        <Form className={"form"}>
          <div className={"pd_15"}>
            <Row type={"flex"} justify="space-around">
              <Col span={11}>
                <Form.Item label="Số di động">
                  <Input placeholder={"Số di động"} addonBefore={prefixPhone} />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Họ và tên">
                  <Input
                    placeholder={"Họ và tên"}
                    addonBefore={prefixUsername}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row type={"flex"} justify="space-around">
              <Col span={11}>
                <Form.Item label="Giới tính">
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="A">Nam</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">Nữ</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Số CMND">
                  <Input placeholder={"Số CMND"} addonBefore={prefixIdcard} />
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
              <Col span={11}>
                <Form.Item label="Tỉnh/Thành phố đang cư trú">
                  <Select defaultValue="lucy" suffixIcon={prefixMarker} >
                    <Option value="jack">Hồ Chí Minh</Option>
                    <Option value="lucy">Hà Nội</Option>
                    <Option value="Yiminghe">Đà Nẵng</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Quận/Huyện đang cư trú">
                  <InputGroup compact className={'select_suffix'}>
                    <Input  style={{ width: '40px' }}  prefix={<Icon type={'environment'}/>}/>
                  <Select defaultValue="lucy" style={{width: "100%"}}>
                    <Option value="jack">Quận 1</Option>
                    <Option value="lucy">Bình Thạnh</Option>
                    <Option value="Yiminghe">Gò Vấp</Option>
                  </Select>
                  </InputGroup>
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
              <Col span={11}>
                <Form.Item label="Ngày tháng năm sinh">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Email">
                  <Input placeholder={"Email"} addonBefore={prefixMail} />
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
              <Col span={11}>
                <Form.Item label="Thu nhập hàng tháng">
                  <Select defaultValue="Chọn mức thu nhập">
                    <Option value="duoi-3-trieu">Dưới 3 triệu</Option>
                    <Option value="tu-3-trieu-toi-7-trieu">
                      Từ 3 triệu tới 7 triệu
                    </Option>
                    <Option value="tu-7-trieu-toi-10-trieu">
                      Từ 7 triệu tới 10 triệu
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Loại thu nhập">
                  <Select defaultValue="Chọn loại thu nhập">
                    <Option value="luong">Tiền lương</Option>
                    <Option value="kinh-doanh">Kinh doanh</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
              <Col span={12} style={{ width: "100%" }}>
                <Form.Item label="Khoản vay">
                  :<InputNumber min={1} max={70} defaultValue={1} /> triệu đồng.
                  <Slider defaultValue={1} tooltipVisible />
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
            <Col span={12}  style={{ width: "100%" }}>
                <Form.Item label="Giấy tờ bắt buộc">
                  <Select defaultValue="Giấy tờ bắt buộc">
                    <Option value="ho-khau">Sổ hộ khẩu</Option>
                    <Option value="bang-lai-xe">Bằng lái xe</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
            <Col span={12}  style={{ width: "100%" }}>
                <Form.Item label="Giấy tờ khác mà bạn có thể cung cấp">
                  <Select defaultValue="Tăng cơ hội nhận ưu đãi tốt">
                    <Option value="ho-khau">Sổ hợp đồng lao động</Option>
                    <Option value="bang-lai-xe">Bản sao kê  tài khoản</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row type={"flex"} justify="space-around">
              <Col span={11}>
                <Form.Item label="Mã bảo mật">
                  <Input placeholder={"Mã bảo mật"}/>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Nhập mã bảo mật">
                  <Input
                    placeholder={"XXXX"}
                    addonBefore={prefixProtect}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row type={"flex"} justify="space-around">
              <Col span={12} style={{ width: "100%" }}>
                <Checkbox>Tôi đồng ý để AVAY để thực hiện việc  đăng ký khoản vay cho tôi và đồng ý với cấc điều khoản của AVAY</Checkbox>
              </Col>
            </Row>
          </div>
          <div className={"form_action"}>
            <Button className={"btn_register"}>ĐĂNG KÝ</Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
export default HeroSignUp;
