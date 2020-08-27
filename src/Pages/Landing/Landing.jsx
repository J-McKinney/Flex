import React from "react";
import MyNavBar from "../../Components/MyNavBar/MyNavBar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Style from "./Landing.module.css";

function Landing() {
  return (
    <>
      <div className={Style.siteWrapper}>
        <MyNavBar />
        {/* PERSPECTIVE FONT AREA */}
        <div className={Style.perspectiveWrapper}>
          <div className={Style.perspectiveText}>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}></p>
              <p className={Style.options}>About Me</p>
            </div>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}>About Me</p>
              <p className={Style.options}></p>
            </div>
          </div>
          <br />
          <div className={Style.perspectiveText}>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}></p>
              <p className={Style.options}>My Work</p>
            </div>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}>My Work</p>
              <p className={Style.options}></p>
            </div>
          </div>
          <br />
          <div className={Style.perspectiveText}>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}></p>
              <p className={Style.options}>Contact Me</p>
            </div>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}>Contact Me</p>
              <p className={Style.options}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
