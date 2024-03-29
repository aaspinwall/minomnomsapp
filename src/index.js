import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Nav from "./Components/Nav"
import Portions from "./Components/Portions"
import Main from "./Components/Main"
import Airtable from "./Components/Airtable"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Nav />
    <Route path='/' exact={true} component={App} />
    <Route exact path='/main'>
      <Main />
    </Route>
    <Route path='/portions' exact={true} component={Portions} />
    <Route path='/api' exact={true} component={Airtable} />
  </Router>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
