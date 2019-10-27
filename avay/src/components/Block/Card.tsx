import React, { Component } from "react";
import Data from "./../../Mock/Card";

interface Props {
  //datas: [];
}
interface State {
  datas: any[];
}
export default class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      datas: ["", "", ""]
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const datas = await Data;
    this.setState({
      datas
    });
  }
  renderCard() {
    return this.state.datas.map((item, i) => {
      return (
        <div className="block_card" key={i}>
          <span className="logo">
            <img src={item.image} alt="" />
          </span>
          <div className="info">
            <h3 className="title-h3">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      //const datas = this.state;
      //console.log(this.state.datas[0])
      this.renderCard()
    );
  }
}
