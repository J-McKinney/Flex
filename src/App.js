import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import "./App.css";

function App() {
  return (
    <>
      <Landing />
      {/*<Router basename="/">
        <Switch>
          <Route exact path="/Flex" component={Landing} />
        </Switch>
      </Router>*/}
    </>
  );
}

export default App;
