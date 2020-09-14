import React from "react";
import Me from "../../images/Me.JPG";
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
                    <img className={Style.Me} src={Me} alt="Me" />
                  </Col>
                </Row>
              </Container>
            </Col>

            {/* Bar Chart Area/Neumorphism Stuff */}
            <Col id={Style.barChartCol} className="col-sm-6">
              <Container className={Style.myBarChartContainer}>
                <div className={Style.containerHTML}>
                  <div className={Style.skills}>
                    <div className={Style.html}>HTML</div>
                  </div>
                </div>

                <div className={Style.containerCSS}>
                  <div className={Style.skills}>
                    <div className={Style.css}>CSS</div>
                  </div>
                </div>
                <div className={Style.containerBootStrap}>
                  <div className={Style.skills}>
                    <div className={Style.bootstrap}>BootStrap</div>
                  </div>
                </div>
                <div className={Style.containerJavaScript}>
                  <div className={Style.skills}>
                    <div className={Style.javascript}>JavaScript</div>
                  </div>
                </div>
                <div className={Style.containerReact}>
                  <div className={Style.skills}>
                    <div className={Style.react}>React</div>
                  </div>
                </div>
                <div className={Style.containerAngular}>
                  <div className={Style.skills}>
                    <div className={Style.angular}>Angular</div>
                  </div>
                </div>
                <div className={Style.containerNode}>
                  <div className={Style.skills}>
                    <div className={Style.node}>Node.js</div>
                  </div>
                </div>
                <div className={Style.containerMongoose}>
                  <div className={Style.skills}>
                    <div className={Style.mongoose}>Mongoose</div>
                  </div>
                </div>
                <div className={Style.containerMySQL}>
                  <div className={Style.skills}>
                    <div className={Style.mysql}>MySQL</div>
                  </div>
                </div>
                <div className={Style.containerThree}>
                  <div className={Style.skills}>
                    <div className={Style.three}>Three.js</div>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BarCharts;
