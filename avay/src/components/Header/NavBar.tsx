import {Link} from "react-router-dom";
import * as React from "react";
import {Col, Row, Menu, Button} from "antd";
// React.FC viết tắt React.FunctionComponent tương đương với stateless  vì là stateless nên ko thể khai báo state
// Chỉ nhận prop từ ngoài vào.

const currentLocation = window.location.pathname;
// Với React.Component thì có thể truyền vào cả state và prop

type NavBarItem = {
    id: number,
    name: string,
    link: any
}
let listNav: NavBarItem[];
listNav = [
    {id: 0, name: "Đăng ký", link: "/"},
    {id: 1, name: "Giới thiệu", link: "/about"},
    {id: 2, name: "Hỏi đáp", link: "/fad"}
];

interface Props {
}

interface State {
    itemActivated: number,
}

class NavBar extends React.Component<Props, State> {
    static defaultProps: Props = {
        // set giá trị mặc định cho props
    };
    state: State = {
        itemActivated: listNav.findIndex((e) => e.link === currentLocation),
    };
    _updateActivate = (index: number) => {
        this.setState({itemActivated: index})
    };

    render() {
        return (
            <Col span={12}>
                <Row type={"flex"} justify={"end"}>
                    <Col>
                        <Menu mode="horizontal" className={"top_menu"}>
                            {listNav.map((navBar, index) => (
                                <Menu.Item
                                    className="item"
                                    key={index}
                                    onClick={() => this._updateActivate(index)}
                                >
                                    <ItemBarComponent currentClass={this.state.itemActivated !== index
                                        ? "nav-item "
                                        : "nav-item active"} navItem={navBar}/>
                                </Menu.Item>
                            ))}
                            <Menu.Item>
                                <Button type="primary" size="large">
                                    Đăng nhập
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default NavBar;
const ItemBarComponent: React.FC<{ navItem: NavBarItem, currentClass?: string }> = (props) => (
    <Link className={props.currentClass} to={props.navItem.link}>
        {props.navItem.name}
    </Link>
);
