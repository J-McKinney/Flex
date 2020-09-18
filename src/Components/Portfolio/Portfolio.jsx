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
            {/* First Row */}
            <Row>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>Student Life Raft</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      MySQL, Express, Node, JQuery, JavaScript, BootStrap, CSS,
                      & HTML
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>SimilTune</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Mongoose, Express, React, Node, Axios, Moment.js, &
                      React-BootStrap
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>Confetti Effect</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      React, React-Three-Fiber, Three.js, & Three-Meshline
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>
            {/* First Row */}
            {/* Second Row */}
            <Row>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>3D Globe</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>Three.js, HTML, & CSS</Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>J-Bot</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Mongoose, Express, React, Node, Axios, Chart.js,
                      React-Chart.js, BootStrap, ReactStrap, & Firebase
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col className="col-lg-4">
                <Card border="light" style={{ width: "100%" }}>
                  <Card.Header>Infinity Squares</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>React, JavaScript, & CSS</Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>
            {/* Second Row */}
          </Container>
        </div>
      </>
    );
  }
}

export default Portfolio;
