import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Analysis from "./components/Analysis/Analysis";

// Making a small change for testing and another

ReactDOM.render(
  <div>
    <NavigationBar />
    <Router>
      <div>
        <Route path="/about" component={About} />
        <Route path="/analysis" component={Analysis} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
