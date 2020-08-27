import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Landing.module.css";

function Landing() {
  return (
    <>
      <div className={Style.wrapper}>
        <Container className={Style.menuContainer}>
          <div className={Style.perspectiveText}>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}></p>
              <p className={Style.options}>About Me</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
