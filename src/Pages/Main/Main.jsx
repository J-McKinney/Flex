import React, { Component } from "react";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Stars from "../../Components/Stars/StarsContainer";
import Footer from "../../Components/MyFooter/MyFooter";
import BarChart from "../../Components/BarCharts/BarCharts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Style from "./Main.module.css";

class Main extends Component {
  render() {
    return (
      <>
        <div className={Style.siteWrapper}>
          <NavBar />
          <div className={Style.mainWrapper}>
            <Stars />
          </div>
          {/* About Me Area */}
          <div className={Style.aboutMeWrapper}>
            <Container className={Style.aboutMeContainer}>
              <Row className={Style.aboutMeHeader}>
                <Fade down duration={1000} delay={500}>
                  <h2 className={Style.aboutHeader}>About</h2>
                </Fade>
              </Row>
              <hr className={Style.hr1Main} />
              <Row className={Style.aboutMeRow}>
                <Col className={Style.aboutMeCol}>
                  <Fade left big duration={1000} delay={500}>
                    <i id={Style.aboutMeIcon} className="fas fa-fighter-jet" />
                    <h3 className={Style.aboutMeh3}>Fast/Clean Code</h3>
                    <p className={Style.aboutMePTags}>
                      Fast load times and lag free interaction, my highest
                      priority.
                    </p>
                  </Fade>
                </Col>
                <Col className={Style.aboutMeCol}>
                  <Fade left duration={1000} delay={500}>
                    <i id={Style.aboutMeIcon} className="fas fa-mobile-alt" />
                    <h3 className={Style.aboutMeh3}>Responsive</h3>
                    <p className={Style.aboutMePTags}>
                      My layouts will work on any device, big or small.
                    </p>
                  </Fade>
                </Col>
                <Col className={Style.aboutMeCol}>
                  <Fade right duration={1000} delay={500}>
                    <i id={Style.aboutMeIcon} className="fas fa-code" />
                    <h3 className={Style.aboutMeh3}>Intuitive</h3>
                    <p className={Style.aboutMePTags}>
                      Strong preference for easy to use, intuitive UX/UI.
                    </p>
                  </Fade>
                </Col>
                <Col className={Style.aboutMeCol}>
                  <Fade right big duration={1000} delay={500}>
                    <i id={Style.aboutMeIcon} className="fas fa-meteor" />
                    <h3 className={Style.aboutMeh3}>Dynamic</h3>
                    <p className={Style.aboutMePTags}>
                      Websites don't have to be static, I love making pages come
                      to life.
                    </p>
                  </Fade>
                </Col>
              </Row>
            </Container>
            <BarChart />
          </div>
          {/* About Me Area */}
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
        </div>
      </>
    );
  }
}

export default Main;
