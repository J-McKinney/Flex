import React, { Component } from "react";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Stars from "../../Components/Stars/StarsContainer";
import BarChart from "../../Components/BarCharts/BarCharts";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Footer from "../../Components/MyFooter/MyFooter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Main.module.css";

class Main extends Component {
  render() {
    return (
      <>
        <div id="top-of-page" className={Style.siteWrapper}>
          <NavBar />
          <div className={Style.starWrapper}>
            <Stars />
          </div>
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
              <BarChart />
            </Container>
          </div>
          {/* Portfolio Section */}
          <div id="portfolio-info" />
          <Portfolio />
          {/* Portfolio Section */}
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
            d="M0,224L24,213.3C48,203,96,181,144,170.7C192,160,240,160,288,170.7C336,181,384,203,432,197.3C480,192,528,160,576,160C624,160,672,192,720,224C768,256,816,288,864,282.7C912,277,960,235,1008,208C1056,181,1104,171,1152,154.7C1200,139,1248,117,1296,122.7C1344,128,1392,160,1416,176L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
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
