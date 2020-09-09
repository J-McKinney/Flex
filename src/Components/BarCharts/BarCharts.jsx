import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal/Fade";
import Me from "../../images/Me.JPG";
import Style from "./BarCharts.module.css";

const chart = {
  labels: [
    "HTML   ",
    "CSS   ",
    "BootStrap   ",
    "JavaScript   ",
    "React   ",
    "Angular   ",
    "Node.js   ",
    "Mongoose   ",
    "MySQL   ",
  ],
  datasets: [
    {
      label: "My Favorite Languages To Code In",
      backgroundColor: "#61dafb",
      borderColor: "#61dafb",
      borderWidth: 1,
      hoverBackgroundColor: "#61dafb",
      hoverBorderColor: "#61dafb",
      // The 2 Sets Of Data Numbers Need To Add Up To 100
      data: [65, 59, 80, 100, 56, 55, 40, 62, 22],
    },
    {
      backgroundColor: "#555555",
      // The 2 Sets Of Data Numbers Need To Add Up To 100
      data: [35, 41, 20, 0, 44, 45, 60, 38, 78],
    },
  ],
};

class BarCharts extends Component {
  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <Container className={Style.container}>
            <Row className={Style.row}>
              <div className="col-md-6" id={Style.MyPicCol}>
                <Fade left duration={1000} delay={500}>
                  <img className={Style.MyPic} src={Me} alt="Me" />
                </Fade>
              </div>
              <div className="col-md-6" id={Style.barChartCol}>
                <Fade right duration={1000} delay={500}>
                  <HorizontalBar
                    className={Style.barChart}
                    data={chart}
                    height={500}
                    width={500}
                    options={{
                      animation: {
                        duration: 5200,
                        delay: 10000,
                      },
                      events: ["null"],
                      responsive: true,
                      maintainAspectRatio: true,
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
                            stacked: true,
                            ticks: {
                              suggestedMin: 0,
                              suggestedMax: 100,
                              fontSize: 17,
                              beginAtZero: true,
                            },
                            gridLines: {
                              display: false,
                            },
                          },
                        ],
                        xAxes: [
                          {
                            stacked: true,
                            ticks: {
                              suggestedMin: 0,
                              suggestedMax: 100,
                              fontSize: 22,
                              beginAtZero: true,
                            },
                            display: 0,
                          },
                        ],
                      },
                    }}
                  />
                </Fade>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default BarCharts;
