import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <Row>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Portfolio;
