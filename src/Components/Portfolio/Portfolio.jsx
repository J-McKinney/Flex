import React, { Component } from "react";
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
          </Container>
        </div>
      </>
    );
  }
}

export default Portfolio;
