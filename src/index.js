import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./Nav";
import Portions from "./Portions";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Test = function() {
  return <div>Hello</div>;
};

ReactDOM.render(
  <Router>
    <Route path='/' exact={true} component={App} />
    <Route path='/' exact={false} component={Nav} />
    <Route path='/portions' exact={true} component={Portions} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
