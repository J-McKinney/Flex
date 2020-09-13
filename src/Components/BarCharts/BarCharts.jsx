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
            {/* Pic Of Me/As Big As I Want */}
            <Col id={Style.myPicCol} className="col-sm-6">
              <Container className={Style.myPicContainer}>
                <Row className={Style.myPicRow}>
                  <Col className="col-sm-12" id={Style.myActualPicCol}>
                    Pic Of Me
                  </Col>
                </Row>
              </Container>
            </Col>

            {/* Bar Chart Area/Neumorphism Stuff */}
            <Col id={Style.barChartCol} className="col-sm-6">
              <Container className={Style.myBarChartContainer}>
                <Row className={Style.myBarChartRowHTML}>
                  <Col className="col-sm-2" id={Style.barChartHTMLName}>
                    HTML
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartHTMLGraph}>
                    HTML
                  </Col>
                </Row>

                {/* <br />

                <Row className={Style.myBarChartRowCSS}>
                  <Col className="col-sm-2" id={Style.barChartCSSName}>
                    CSS
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartCSSGraph}>
                    CSS
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowBootStrap}>
                  <Col className="col-sm-2" id={Style.barChartBootStrapName}>
                    BootStrap
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartBootStrapGraph}>
                    BootStrap
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowJavaScript}>
                  <Col className="col-sm-2" id={Style.barChartJavaScriptName}>
                    JavaScript
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartJavaScriptGraph}>
                    JavaScript
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowReact}>
                  <Col className="col-sm-2" id={Style.barChartReactName}>
                    React
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartReactGraph}>
                    React
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowAngular}>
                  <Col className="col-sm-2" id={Style.barChartAngularName}>
                    Angular
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartAngularGraph}>
                    Angular
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowNode}>
                  <Col className="col-sm-2" id={Style.barChartNodeName}>
                    Node.js
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartNodeGraph}>
                    Node.js
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowMongoose}>
                  <Col className="col-sm-2" id={Style.barChartMongooseName}>
                    Mongoose
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartMongooseGraph}>
                    Mongoose
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowMySQL}>
                  <Col className="col-sm-2" id={Style.barChartMySQLName}>
                    MySQL
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartMySQLGraph}>
                    MySQL
                  </Col>
                </Row>

                <br />

                <Row className={Style.myBarChartRowThree}>
                  <Col className="col-sm-2" id={Style.barChartThreeName}>
                    Three.js
                  </Col>
                  <Col className="col-sm-10" id={Style.barChartThreeGraph}>
                    Three.js
                  </Col>
                </Row> */}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BarCharts;
