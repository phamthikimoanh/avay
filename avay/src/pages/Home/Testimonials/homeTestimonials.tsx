import React, { Component } from "react";
import Card from "../../../components/Block/Card";

interface Props {
  //datas: () => void;
}
export default class homeTestimonials extends Component<Props> {
  render() {
    return (
      <div className="home-testimonials">
        <div className="text-center">
          <h1 className="title-h2">Các đối tác tin cậy của AVAY ?</h1>
        </div>
        <div className="testimonials">
          <Card />
        </div>
      </div>
    );
  }
}
