import React, { Component } from "react";
import Style from "./AboutMe.module.css";

class Main extends Component {
  render() {
    return (
      <>
        <div id="top-of-page" className={Style.siteWrapper}>
            <h1>About Me</h1>
        </div>
      </>
    );
  }
}

export default Main;
