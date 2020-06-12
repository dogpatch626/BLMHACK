import ReactDOM from "react-dom";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import Main from "../components/Main";

class Home extends Component {
  state = {
    zipcode: "",
  };

  zipChangeHandler(e) {
    this.setState({ zipcode: e.target.value });
  }

  componentDidMount() {}
  showButton = (e) => {
    let b = document.getElementById("sb");
    b.style.display = "inline";
    b.style.animation = "fadeInUp 1s ease-in-out 0s forwards";
  };

  changePage = (e) => {
    e.preventDefault();
    //Zipcode Here
    // console.log(this.state.zipcode)

    ReactDOM.render(<Main />, document.getElementById("root"));
  };

  render() {
    return (
      <div className="App">
        <div className="base">
          <div className="container">
            <header className="App-header">
              <h1 className="BLM-header glow">Know Yo Officals</h1>
              <a href="https://blacklivesmatters.carrd.co/">
                <h2 className="BLM">
                  {" "}
                  BLACK <br /> LIVES <br /> MATTER
                </h2>
              </a>
              <span className="BLM-subtext">
                {" "}
                Locate, Review, and Rate your elecetd officals bi-weekly and
                keep track of their legistrations and bills.
              </span>

              <div className="col-3-zip">
                <form class="index-search-form" onSubmit={this.changePage}>
                  <input
                    class="effect-5"
                    type="text"
                    onClick={this.showButton}
                    onChange={(e) => this.zipChangeHandler(e)}
                    placeholder="ENTER ZIPCODE"
                    type="text"
                    pattern="[0-9]*"
                  />
                  <span class="focus-border"></span>
                  <Link to="/main">
                  <button
                    id="sb"
                    class="zip-button"
                    name="submit"
                    type="sumbit"
                  >
                    <i class="far fa-arrow-alt-circle-right"></i>
                  </button>
                  </Link>
                  
                </form>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
