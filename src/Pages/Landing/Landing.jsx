import React from "react";
// import MyNavBar from "../../Components/MyNavBar/MyNavBar";
// import MyFooter from "../../Components/MyFooter/MyFooter";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Style from "./Landing.module.css";

function Landing() {
  return (
    <>
      {/* Site Wrapper */}
      <div className={Style.siteWrapper}>
        {/* Site Wrapper */}

        {/* Navigation Bar */}
        {/* <MyNavBar /> */}
        {/* Navigation Bar */}

        {/* PERSPECTIVE FONT AREA */}
        <div className={Style.perspectiveWrapper}>
          <div className={Style.perspectiveText}>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}></p>
              <p className={Style.options}>
                <a
                  href="#top-of-page"
                  className={Style.a}
                  style={{ color: "#61dafb" }}
                >
                  About Me
                </a>
              </p>
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
              <p className={Style.options}>
                <a
                  href="#top-of-page"
                  className={Style.a}
                  style={{ color: "#61dafb" }}
                >
                  My Work
                </a>
              </p>
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
              <p className={Style.options}>
                <a
                  href="#top-of-page"
                  className={Style.a}
                  style={{ color: "#61dafb" }}
                >
                  Contact Me
                </a>
              </p>
            </div>
            <div className={Style.perspectiveLine}>
              <p className={Style.options}>Contact Me</p>
              <p className={Style.options}></p>
            </div>
          </div>
        </div>
        {/* PERSPECTIVE FONT AREA */}

        {/* Curved Div */}
        <svg
          className={Style.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#282c34"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,181.3C672,181,768,235,864,256C960,277,1056,267,1152,266.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        {/* Curved Div */}

        {/* Footer */}
        {/* <MyFooter /> */}
        {/* Footer */}
      </div>
    </>
  );
}

export default Landing;
