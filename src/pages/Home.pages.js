import ReactDOM from "react-dom";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as  Link } from "react-router-dom";
import "../App.css";
import Main from "../components/Main";
import adapter from '../adapters/adapter.js';
var toJSON = require('plain-text-data-to-json')
const ipLocation = require("iplocation");

class Home extends Component {
  state = {
    zipcode: "",
  };

  zipChangeHandler(e) {
    this.setState({ zipcode: e.target.value });
  }

  componentDidMount() {
    adapter.getLocation()
      .then(data => {
        const JSON = toJSON(data)
        const ip = JSON[4].substring(3,JSON[4].length);
        (async () => {
          await ipLocation(ip)
            .then(data => {
              this.setState({
                zipcode:data.country.postalCode
              })
              const input = document.getElementById("zipcode")
              input.value = this.state.zipcode
              console.log(this.state.zipcode)
              
            })

        })();

        
      })
  }
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
                Locate, Review, and Rate your elecetd officals bi-weekly and
                keep track of their legistrations and bills.
              </span>

              <div className="col-3-zip">
                <form class="index-search-form" onSubmit={this.changePage}>
                  <input
                    id="zipcode"
                    class="effect-5"
                    type="text"
                    onClick={this.showButton}
                    onChange={(e) => this.zipChangeHandler(e)}
                    placeholder="ENTER ZIPCODE"
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
