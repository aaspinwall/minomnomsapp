import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./Nav";
import Portions from "./Portions";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";
import Create from "./Create";
import Menus from "./Menus";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path='/' exact={true} component={Login} />
      <Route path='/' exact={true} component={App} />
      <Route path='/portions' exact={true} component={Portions} />
      <Route path='/create' exact={true} component={Create} />
      <Route path='/menus' exact={true} component={Menus} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
