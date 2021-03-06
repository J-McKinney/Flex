import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterStyle from "./MyFooter.module.css";

class MyFooter extends Component {
  render() {
    return (
      <>
        <Container className={FooterStyle.slider} id="contact-section">
          <Row className={FooterStyle.footerName}>
            <Col>
              <h3 className={FooterStyle.h3}>Contact Me</h3>
            </Col>
          </Row>
          <hr className={FooterStyle.hr} />
          <Row>
            <Col className={FooterStyle.Col}>
              <a
                className={FooterStyle.a}
                // href="https://mail.google.com/mail/?view=cm&fs=1&to=JesseMcKinney513@gmail.com&su=ContactingYouOnPortfolioEmail"
                href="/"
              >
                <i id={FooterStyle.envelope} className="far fa-envelope" />
              </a>
            </Col>
          </Row>
          <br />
          <Row className={FooterStyle.iconRow}>
            <Col className={FooterStyle.Col}>
              <a
                className={FooterStyle.a}
                href="https://www.linkedin.com/in/jesse-mckinney-4a3b10185?trk=people-guest_profile-result-card_result-card_full-click"
              >
                <i id={FooterStyle.linkedin} className="fab fa-linkedin" />
              </a>
            </Col>
            <Col className={FooterStyle.Col}>
              <a className={FooterStyle.a} href="https://github.com/J-McKinney">
                <i id={FooterStyle.github} className="fab fa-github" />
              </a>
            </Col>
            <Col className={FooterStyle.Col}>
              <a
                className={FooterStyle.a}
                href="https://www.pinterest.com/jesse6446/"
              >
                <i id={FooterStyle.pinterest} className="fab fa-pinterest" />
              </a>
            </Col>
            <Col className={FooterStyle.Col}>
              <a
                className={FooterStyle.a}
                href="https://instagram.com/jessman51386?igshid=sfn5fawa2ea2"
              >
                <i id={FooterStyle.instagram} className="fab fa-instagram" />
              </a>
            </Col>
          </Row>
          <div className={FooterStyle.bottomName}>Jesse McKinney</div>
        </Container>
      </>
    );
  }
}

export default MyFooter;
