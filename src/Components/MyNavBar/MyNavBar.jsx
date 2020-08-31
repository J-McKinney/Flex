import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import NavStyle from "./MyNavBar.module.css";

class MyNavBar extends Component {
  state = {
    show: true,
    scrollPos: 0,
    open: false,
    changeNavBar: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
    // console.log("componentDidMount : ", this.state.open);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate: ", this.state.open);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
      open: false,
      changeNavBar: false,
    });
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
    if (this.state.open === false) {
      this.setState({ open: true });
    } else if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: false });
    }
  };

  render() {
    const active = {
      zIndex: "1001 !important",
      backgroundColor: "#5e6f819a",
      color: "#fff",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "visible",
      transition: "all 200ms ease-in",
    };
    const hidden = {
      zIndex: "1001 !important",
      backgroundColor: "#5e6f819a",
      color: "#fff",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "hidden",
      transition: "all 200ms ease-out",
      transform: "translate(0, -100%)",
    };
    const bar = {
      width: "35px",
      height: "5px",
      backgroundColor: "#fff",
      margin: "4px 0",
      transition: "0.4s",
    };
    const changeBar1 = {
      transform: "rotate(-45deg) translate(-8px, 6px)",
    };
    const changeBar2 = {
      opacity: "0",
    };
    const changeBar3 = {
      transform: "rotate(45deg) translate(-7px, -6px)",
    };
    return (
      <>
        {/* WRAPPER */}
        <div
          className={NavStyle.navBarWrapper}
          style={this.state.show ? active : hidden}
        >
          <div className={NavStyle.navbar}>
            <div className={NavStyle.buttonWrapper}>
              {/* WRAPPER */}

              {/* NAVBAR CONTENT */}
              <Row className={NavStyle.navBarRow}>
                <Col>
                  {/* NAVBAR BUTTON */}
                  <Button
                    className={NavStyle.menuButton}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open}
                    onClick={this.toggleCollapse}
                  >
                    <div className={NavStyle.menuIconContainer}>
                      <div
                        className={NavStyle.bar1}
                        style={this.state.changeNavBar ? changeBar1 : bar}
                      ></div>
                      <div
                        className={NavStyle.bar2}
                        style={this.state.changeNavBar ? changeBar2 : bar}
                      ></div>
                      <div
                        className={NavStyle.bar3}
                        style={this.state.changeNavBar ? changeBar3 : bar}
                      ></div>
                    </div>
                  </Button>
                  {/* NAVBAR BUTTON */}
                </Col>
              </Row>
              {/* NAVBAR CONTENT */}

              {/* COLLAPSE CONTENT */}
              {/* COLLAPSE CONTENT */}
              <Collapse in={this.state.open}>
                <div
                  id="example-collapse-text"
                  className={NavStyle.collapsingContent}
                >
                  <div className={NavStyle.contentDiv}>
                    <Container className={NavStyle.contentContainer}>
                      <Row className={NavStyle.contentHeader}>
                        <h3 className={NavStyle.h3}>
                          <a
                            href="#top-of-page"
                            className={NavStyle.a}
                            style={{ color: "#fff" }}
                          >
                            Jesse McKinney
                          </a>
                        </h3>
                      </Row>
                      <Row className={NavStyle.contentRow}>
                        <Col className={NavStyle.contentCol}>
                          <ul className={NavStyle.ul}>
                            <li className={NavStyle.li}>
                              <a
                                href="#about-me"
                                className={NavStyle.a}
                                style={{ color: "#fff" }}
                              >
                                About Me
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="#portfolio"
                                className={NavStyle.a}
                                style={{ color: "#fff" }}
                              >
                                Portfolio
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="#skills"
                                className={NavStyle.a}
                                style={{ color: "#fff" }}
                              >
                                Skills
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="#current-work"
                                className={NavStyle.a}
                                style={{ color: "#fff" }}
                              >
                                Current Work
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="#contact-me"
                                className={NavStyle.a}
                                style={{ color: "#fff" }}
                              >
                                Contact Me
                              </a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Collapse>
              {/* COLLAPSE CONTENT */}
              {/* COLLAPSE CONTENT */}

              {/* WRAPPER */}
            </div>
          </div>
        </div>
        {/* WRAPPER */}
      </>
    );
  }
}

export default MyNavBar;
