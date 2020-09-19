import React, { Component } from "react";
import SimilTune from "../../images/atlanta.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Style from "./Portfolio.module.css";

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <Container className={Style.portfolioContainer}>
            <Row className={Style.portfolioRow}>
              <h2 className={Style.portfolioHeading}>Portfolio</h2>
            </Row>
            <Row className={Style.portfolioRow}>
              <hr className={Style.headingHr} />
            </Row>
            <br />
            {/* First Row */}
            <Row className={Style.cardRow}>
              <div className="col-lg-4">
                <img id={Style.similTune} src={SimilTune} alt="SimilTune" />
              </div>
              <div className="col-lg-4">
                <img id={Style.jBot} src={SimilTune} alt="SimilTune" />
              </div>
              <div className="col-lg-4">
                <img id={Style.slr} src={SimilTune} alt="SimilTune" />
              </div>
            </Row>
            {/* First Row */}
            <br />
            {/* Second Row */}
            <Row className={Style.cardRow}>
              <div className="col-lg-4">
                <img id={Style.boxes} src={SimilTune} alt="SimilTune" />
              </div>
              <div className="col-lg-4">
                <img id={Style.confetti} src={SimilTune} alt="SimilTune" />
              </div>
              <div className="col-lg-4">
                <img id={Style.globe} src={SimilTune} alt="SimilTune" />
              </div>
            </Row>
            {/* Second Row */}
          </Container>
        </div>
      </>
    );
  }
}

export default Portfolio;
