import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import Style from "./BarCharts.module.css";

class BarCharts extends Component {
  componentDidMount() {
    console.log("componentDidMount: ");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: ");
  }

  render() {
    const data = {
      labels: [
        "HTML",
        "CSS",
        "BootStrap",
        "JavaScript",
        "React",
        "Angular",
        "Node.js",
        "Mongoose",
        "MySQL",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 91, 56, 55, 40, 62, 22],
        },
      ],
    };
    return (
      <>
        <div className={Style.wrapper}>
          <Fade right duration={1000} delay={500}>
            <HorizontalBar data={data} />
          </Fade>
        </div>
      </>
    );
  }
}

export default BarCharts;
