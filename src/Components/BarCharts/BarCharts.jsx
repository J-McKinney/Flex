import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Me from "../../images/Me.JPG";
import Style from "./BarCharts.module.css";

const chart = {
  labels: [
    "HTML    ",
    "CSS    ",
    "BootStrap    ",
    "JavaScript    ",
    "React    ",
    "Angular    ",
    "Node.js    ",
    "Mongoose    ",
    "MySQL    ",
  ],
  datasets: [
    {
      label: "My Favorite Languages To Code In",
      backgroundColor: "#61dafb",
      borderColor: "#61dafb",
      borderWidth: 1,
      hoverBackgroundColor: "#61dafb",
      hoverBorderColor: "#61dafb",
      data: [65, 59, 80, 91, 56, 55, 40, 62, 22],
    },
  ],
};

class BarCharts extends Component {
  componentDidMount() {
    console.log("componentDidMount: ");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: ");
  }

  render() {
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
                <Fade right duration={1000} delay={500}>
                  <HorizontalBar
                    className={Style.barChart}
                    data={chart}
                    height={500}
                    options={{
                      events: ["null"],
                      maintainAspectRatio: false,
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false,
                      },
                      tooltips: {
                        enabled: false,
                      },
                      scales: {
                        yAxes: [
                          {
                            ticks: {
                              fontSize: 22,
                              beginAtZero: true,
                            },
                            gridLines: {
                              display: false,
                            },
                          },
                        ],
                        xAxes: [
                          {
                            display: 0,
                          },
                        ],
                      },
                    }}
                  />
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default BarCharts;
