import React, { Component } from "react";
import Me from "../../images/Me.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./BarCharts.module.css";

class BarCharts extends Component {
  state = {
    showGraph: false,
  };

  componentDidMount() {
    console.log("Mount: ", window.visualViewport.pageTop);
    window.addEventListener("scroll", this.onscroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {
    console.log("Update: ", window.visualViewport.pageTop);
  }

  onscroll = () => {
    console.log("Graph in View");
  };

  toggleGraph = () => {
    console.log("Activate Graph!");
  };

  render() {
    const active = {
      width: "90%",
      visibility: "visible",
    };
    const hidden = {
      width: "20%",
      visibility: "visible",
    };
    return (
      <>
        <div className={Style.wrapper}>
          <div fluid="true" className={Style.container}>
            <div className={Style.row}>
              {/* Pic Of Me/As Big As I Want */}
              <Col id={Style.myPicCol} className="col-lg-6">
                <Container className={Style.myPicContainer}>
                  <Row className={Style.myPicRow}>
                    <Col className="col-sm-12" id={Style.myActualPicCol}>
                      <img className={Style.Me} src={Me} alt="Me" />
                      <h3 className={Style.talkingAboutMeH3}>
                        Talking about me?
                      </h3>
                      <hr className={Style.hr1Me} />
                      <p className={Style.talkingAboutMe}>
                        I'm a Free-Lance Full Stack Flex Web Developer in
                        Atlanta, GA. I have serious passion for UI effects,
                        animations and creating intuitive, dynamic user
                        experiences.{" "}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
              {/* Pic Of Me/As Big As I Want */}

              {/* Bar Chart Area/Neumorphism Stuff */}
              <Col id={Style.barChartCol} className="col-lg-6">
                <Container className={Style.myBarChartContainer}>
                  <div className={Style.containerHTML}>
                    <div className={Style.skills}>
                      <div className={Style.html}>
                        HTML<div className={Style.percent}>90%</div>
                      </div>
                    </div>
                  </div>

                  <div className={Style.containerCSS}>
                    <div className={Style.skills}>
                      <div className={Style.css}>
                        CSS<div className={Style.percent}>90%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerBootStrap}>
                    <div className={Style.skills}>
                      <div className={Style.bootstrap}>
                        BootStrap<div className={Style.percent}>95%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerJavaScript}>
                    <div className={Style.skills}>
                      <div className={Style.javascript}>
                        JavaScript<div className={Style.percent}>95%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerReact}>
                    <div className={Style.skills}>
                      <div className={Style.react}>
                        React<div className={Style.percent}>95%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerNode}>
                    <div className={Style.skills}>
                      <div className={Style.node}>
                        Node.js<div className={Style.percent}>85%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerMongoose}>
                    <div className={Style.skills}>
                      <div className={Style.mongoose}>
                        Mongoose<div className={Style.percent}>80%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerMySQL}>
                    <div className={Style.skills}>
                      <div className={Style.mysql}>
                        MySQL<div className={Style.percent}>80%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerThree}>
                    <div className={Style.skills}>
                      <div className={Style.three}>
                        Three.js<div className={Style.percent}>50%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerAngular}>
                    <div className={Style.skills}>
                      <div className={Style.angular}>
                        Angular<div className={Style.percent}>45%</div>
                      </div>
                    </div>
                  </div>
                </Container>
              </Col>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BarCharts;
