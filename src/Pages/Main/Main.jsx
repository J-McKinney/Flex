import React, { Component } from "react";
import Me from "../../images/Me.JPG";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Stars from "../../Components/Stars/StarsContainer";
import Footer from "../../Components/MyFooter/MyFooter";
import { HorizontalBar } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Main.module.css";

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
    "Three.js   ",
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
      data: [65, 59, 80, 100, 56, 55, 40, 62, 22, 80],
    },
    {
      backgroundColor: "#555555",
      // The 2 Sets Of Data Numbers Need To Add Up To 100
      data: [35, 41, 20, 0, 44, 45, 60, 38, 78, 20],
    },
  ],
};

class Main extends Component {
  render() {
    return (
      <>
        <div className={Style.siteWrapper}>
          <NavBar />
          <div className={Style.starWrapper}>
            <Stars />
          </div>
          {/* About Me Area */}
          <div className={Style.aboutMeWrapper}>
            <Container className={Style.aboutMeContainer}>
              <Row className={Style.aboutMeHeader}>
                <h2 className={Style.aboutHeader}>About</h2>
              </Row>
              <hr className={Style.hr1Main} />
              <Row className={Style.aboutMeRow}>
                <Col className={Style.aboutMeCol}>
                  <i id={Style.aboutMeIcon} className="fas fa-fighter-jet" />
                  <h3 className={Style.aboutMeh3}>Fast/Clean Code</h3>
                  <p className={Style.aboutMePTags}>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </p>
                </Col>
                <Col className={Style.aboutMeCol}>
                  <i id={Style.aboutMeIcon} className="fas fa-mobile-alt" />
                  <h3 className={Style.aboutMeh3}>Responsive</h3>
                  <p className={Style.aboutMePTags}>
                    My layouts will work on any device, big or small.
                  </p>
                </Col>
                <Col className={Style.aboutMeCol}>
                  <i id={Style.aboutMeIcon} className="fas fa-code" />
                  <h3 className={Style.aboutMeh3}>Intuitive</h3>
                  <p className={Style.aboutMePTags}>
                    Strong preference for easy to use, intuitive UX/UI.
                  </p>
                </Col>
                <Col className={Style.aboutMeCol}>
                  <i id={Style.aboutMeIcon} className="fas fa-meteor" />
                  <h3 className={Style.aboutMeh3}>Dynamic</h3>
                  <p className={Style.aboutMePTags}>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </p>
                </Col>
              </Row>
              {/* Bar Chart Container */}
              <div className={Style.barChartContainer}>
                <Row className={Style.barChartRow}>
                  <div className="col-md-6" id={Style.MyPicCol}>
                    <img className={Style.barChartMyPic} src={Me} alt="Me" />
                  </div>
                  <div className="col-md-6" id={Style.barChartCol}>
                    <HorizontalBar
                      className={Style.barChart}
                      data={chart}
                      height={400}
                      width={400}
                      options={{
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
                                fontSize: 17,
                                beginAtZero: true,
                              },
                              display: 0,
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </Row>
              </div>
              {/* Bar Chart Container */}
            </Container>
          </div>
          {/* About Me Area */}
        </div>
        {/* Curved Div */}
        <svg
          className={Style.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#282c34"
            fillOpacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,181.3C672,181,768,235,864,256C960,277,1056,267,1152,266.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        {/* Curved Div */}
        <Footer />
      </>
    );
  }
}

export default Main;
