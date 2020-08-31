import React, { Component } from "react";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Stars from "../../Components/Stars/StarsContainer";
import Style from "./Main.module.css";

class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className={Style.mainWrapper}>
          <Stars />
        </div>
      </>
    );
  }
}

export default Main;
