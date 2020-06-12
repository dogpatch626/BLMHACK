import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import repPage from "./pages/repPage";
import Home from "./pages/Home.pages";
export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path ="/main" component={Main} />
        </Router>


 
      </div>
    );
  }
}
