import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./BarCharts.module.css";

const BarCharts = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <Container fluid className={Style.container}>
          <Row className={Style.row}>
            {/* Pic Of Me/As Big As You Want */}
            <Col id={Style.myPicCol} className="col-sm-6">
              <Container className={Style.myPicContainer}>
                <Row className={Style.row}>
                  <Col className="col-sm-12" id={Style.myPicCol}>
                    Pic Of Me
                  </Col>
                </Row>
              </Container>
            </Col>

            {/* Bar Chart Area/Neumorphism Stuff */}
            <Col id={Style.barChartCol} className="col-sm-6">
              <Container className={Style.myBarChartContainer}>
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartHTML}>
                    HTML
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartHTML}>
                    HTML
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartCSS}>
                    CSS
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartCSS}>
                    CSS
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartBootStrap}>
                    BootStrap
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartBootStrap}>
                    BootStrap
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartJavaScript}>
                    JavaScript
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartJavaScript}>
                    JavaScript
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartReact}>
                    React
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartReact}>
                    React
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartAngular}>
                    Angular
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartAngular}>
                    Angular
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartNode}>
                    Node.js
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartNode}>
                    Node.js
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartMongoose}>
                    Mongoose
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartMongoose}>
                    Mongoose
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartMySQL}>
                    MySQL
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartMySQL}>
                    MySQL
                  </Col>
                </Row>
                <br />
                <Row className={Style.myBarChartRow}>
                  <Col className="col-sm-2" id={Style.barChartThree}>
                    Three.js
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartThree}>
                    Three.js
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BarCharts;
