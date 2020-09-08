import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Me from "../../images/Me.JPG";
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
      options: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    };
    return (
      <>
        <div className={Style.wrapper}>
          <Container className={Style.container}>
            <Row className={Style.row}>
              <Col className={Style.MyPicCol}>
                <Fade left duration={1000} delay={500}>
                  <img className={Style.MyPic} src={Me} alt="Me" />
                </Fade>
              </Col>
              <Col className={Style.barChartCol}>
                {/* <Fade right duration={1000} delay={500}> */}
                <HorizontalBar className={Style.barChart} data={data} />
                {/* </Fade> */}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default BarCharts;
