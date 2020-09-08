import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Style from "./BarCharts.module.css";

class BarCharts extends Component {
  componentDidMount() {
    console.log("componentDidMount: ", HorizontalBar);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: ", HorizontalBar);
  }

  render() {
    return (
      <>
        <div className={Style.wrapper}></div>
      </>
    );
  }
}

export default BarCharts;
