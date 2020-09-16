import React, { Component } from "react";
import Me from "../../images/Me.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./BarCharts.module.css";

class BarCharts extends Component {
  state = {
    startGraph: false,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
    });
    if (this.state.scrollPos <= -720) {
      this.setState({ startGraph: true });
    }
    if (this.state.scrollPos > -420) {
      this.setState({ startGraph: false });
    }
  };

  render() {
    const active95 = {
      width: "90%",
      visibility: "visible",
      transition: "all 2300ms ease-in",
    };
    const active90 = {
      width: "85%",
      visibility: "visible",
      transition: "all 2300ms ease-in",
    };
    const active85 = {
      width: "80%",
      visibility: "visible",
      transition: "all 2300ms ease-in",
    };
    const active80 = {
      width: "75%",
      visibility: "visible",
      transition: "all 2300ms ease-in",
    };
    const active50 = {
      width: "50%",
      visibility: "visible",
      transition: "all 2300ms ease-in",
    };
    const active45 = {
      width: "45%",
      visibility: "visible",
      transition: "all 2300ms ease-in",
    };
    const hidden = {
      width: "30%",
      visibility: "visible",
      transition: "all 200ms ease-out",
    };
    return (
      <>
        <div className={Style.wrapper}>
          <div fluid="true" className={Style.container}>
            <div className={Style.row}>
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
                        experiences.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col id={Style.barChartCol} className="col-lg-6">
                <Container className={Style.myBarChartContainer}>
                  <div className={Style.containerHTML}>
                    <div className={Style.skills}>
                      <div
                        className={Style.html}
                        style={this.state.startGraph ? active90 : hidden}
                      >
                        HTML<div className={Style.percent}>90%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerCSS}>
                    <div className={Style.skills}>
                      <div
                        className={Style.css}
                        style={this.state.startGraph ? active90 : hidden}
                      >
                        CSS<div className={Style.percent}>90%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerBootStrap}>
                    <div className={Style.skills}>
                      <div
                        className={Style.bootstrap}
                        style={this.state.startGraph ? active95 : hidden}
                      >
                        BootStrap<div className={Style.percent}>95%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerJavaScript}>
                    <div className={Style.skills}>
                      <div
                        className={Style.javascript}
                        style={this.state.startGraph ? active95 : hidden}
                      >
                        JavaScript<div className={Style.percent}>95%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerReact}>
                    <div className={Style.skills}>
                      <div
                        className={Style.react}
                        style={this.state.startGraph ? active95 : hidden}
                      >
                        React<div className={Style.percent}>95%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerNode}>
                    <div className={Style.skills}>
                      <div
                        className={Style.node}
                        style={this.state.startGraph ? active85 : hidden}
                      >
                        Node.js<div className={Style.percent}>85%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerMongoose}>
                    <div className={Style.skills}>
                      <div
                        className={Style.mongoose}
                        style={this.state.startGraph ? active80 : hidden}
                      >
                        Mongoose<div className={Style.percent}>80%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerMySQL}>
                    <div className={Style.skills}>
                      <div
                        className={Style.mysql}
                        style={this.state.startGraph ? active80 : hidden}
                      >
                        MySQL<div className={Style.percent}>80%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerThree}>
                    <div className={Style.skills}>
                      <div
                        className={Style.three}
                        style={this.state.startGraph ? active50 : hidden}
                      >
                        Three.js<div className={Style.percent}>50%</div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.containerAngular}>
                    <div className={Style.skills}>
                      <div
                        className={Style.angular}
                        style={this.state.startGraph ? active45 : hidden}
                      >
                        Angular<div className={Style.percent}>45%</div>
                      </div>
                    </div>
                  </div>
                </Container>
              </Col>
            </div>
            <div className={Style.rowMore}>
              <h5 className={Style.moreAboutMe}>
                <a href="#AboutMePage" className={Style.aboutMePage}>
                  A Little Bit More...
                </a>
              </h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BarCharts;
