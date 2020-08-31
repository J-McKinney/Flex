import React, { Component } from "react";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Stars from "../../Components/Stars/StarsContainer";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./Main.module.css";

class Main extends Component {
  render() {
    return (
      <>
        <div className={Style.siteWrapper}>
          <NavBar />
          <div className={Style.mainWrapper}>
            <Stars />
          </div>
          <hr />
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
          <Footer />
        </div>
      </>
    );
  }
}

export default Main;
