import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Portfolio from "./Pages/Portfolio/Portfolio";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Error from "./Pages/Error/Error";
import "./App.css";

function App() {
  return (
    <>
      {/* <Main /> */}
      <Router basename="/">
        <Switch>
          <Route exact path="/Flex" component={Main} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/ContactMe" component={ContactMe} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
