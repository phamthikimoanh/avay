import React, { Component } from "react";
import Mock from "../../../Mock/Data";
import { any, number } from "prop-types";

interface Props {}
interface State {
  Data: any[];
}
export default class HomeFeature extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { Data: [number, "", "", ""] };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const Data = await Mock.child;
    this.setState({ Data });
  }
  renderFeature = () => {
    return this.state.Data.map((data, i) => {
      //console.log(data);
      return (
        <div className="home-feature-info about-feature-info" key={i}>
          <span className="home-feature-icon about-feature-icon">
            <img src={data.icon} alt="" />
          </span>
          <h3 className="title-h3">{data.title}</h3>
          <p>{data.detail}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="home-feature">
        <div className="text-center">
          <h1 className="title-h2">Tại sao chọn AVAY ?</h1>
        </div>
        <div className="feature-info">{this.renderFeature()}</div>
      </div>
    );
  }
}
