import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSlide from "./components/MainSlide.js";
import NoMatch from "./components/NoMatch";
import AdminContainer from "./components/AdminContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <MainSlide />} />
        <Route exact path="/we0mmm" render={(props) => "<We0mmm />"} />
        <Route exact path="/admin" render={(props) => <AdminContainer />} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
