
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
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
