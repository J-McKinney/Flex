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
      data: [90, 85, 90, 95, 95, 55, 75, 80, 65, 55],
    },
    {
      backgroundColor: "#ffffff",
      // The 2 Sets Of Data Numbers Need To Add Up To 100
      data: [10, 15, 10, 5, 5, 45, 25, 20, 35, 45],
    },
  ],
};

class Main extends Component {
  render() {
    return (
      <>
        <div id="top-of-page" className={Style.siteWrapper}>
          <NavBar />
          <div className={Style.starWrapper}>
            <Stars />
          </div>
          {/* About Me Area */}
          <div className={Style.aboutMeWrapper}>
            <Container className={Style.aboutMeContainer}>
              <Row className={Style.aboutMeHeader}>
                <h2 id="about-info" className={Style.aboutHeader}>
                  About
                </h2>
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
                    <h3 className={Style.talkingAboutMeH3}>
                      Talking about me?
                    </h3>
                    <hr className={Style.hr1Me} />
                    <p className={Style.talkingAboutMe}>
                      I'm a Free-Lance Full Stack Flex Web Developer in Atlanta,
                      GA. I have serious passion for UI effects, animations and
                      creating intuitive, dynamic user experiences.{" "}
                    </p>
                  </div>
                  <div className="col-md-6" id={Style.barChartCol}>
                    <HorizontalBar
                      className={Style.barChart}
                      data={chart}
                      height={400}
                      width={400}
                      options={{
                        animation: {
                          duration: 0,
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
                                fontColor: "white",
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
                <br />
                <Row>
                  <h5 className={Style.moreAboutMe}>More...</h5>
                </Row>
              </div>
              {/* Bar Chart Container */}
            </Container>
          </div>
          {/* About Me Area */}
          <div id="portfolio-info" className={Style.portfolioWrapper}>
            <Container className={Style.portfolioContainer}></Container>
          </div>
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
            // d="M0,192L24,197.3C48,203,96,213,144,208C192,203,240,181,288,154.7C336,128,384,96,432,101.3C480,107,528,149,576,186.7C624,224,672,256,720,245.3C768,235,816,181,864,149.3C912,117,960,107,1008,138.7C1056,171,1104,245,1152,272C1200,299,1248,277,1296,250.7C1344,224,1392,192,1416,176L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            // d="M0,224L24,213.3C48,203,96,181,144,170.7C192,160,240,160,288,170.7C336,181,384,203,432,197.3C480,192,528,160,576,160C624,160,672,192,720,224C768,256,816,288,864,282.7C912,277,960,235,1008,208C1056,181,1104,171,1152,154.7C1200,139,1248,117,1296,122.7C1344,128,1392,160,1416,176L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
        {/* Curved Div */}
        <Footer />
        <div id="contact-info" />
      </>
    );
  }
}

export default Main;
