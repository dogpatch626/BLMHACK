import React, { Component } from "react";
import Bar from "./Bar.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import poll from "poll/dist/esm/poll.mjs";
//polling stuff
const pollDelayInMinutes = 10;
var stopPolling = false;
const shouldStopPolling = () => stopPolling;
setTimeout(() => {
  stopPolling = true;
}, 1000);
//polling stuff end

export default class Card extends Component {
  state = {
    show: false,
    showVote: false,
  };
  // polling begin
  fn = () => {
    console.log("Hello, beautiful!");
  };
  // polling end
  handler = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  handlerVote = (e) => {
    this.setState({
      showVote: !this.state.showVote,
    });
  };

  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    let partyCNG;
    if (this.props.party === "D") {
      partyCNG = true;
    } else if (this.props.party === "R") {
      partyCNG = false;
    } else {
      return;
    }

    return (
      <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
        <div class="avatar mx-auto">
          <img
            src={this.props.pic}
            class="rounded-card z-depth-1"
            alt={this.props.name}
          />
        </div>
        <div className="CNG-bio">
          <h5 class="font-weight-bold mt-4 mb-3 CNG-bio-i">
            {this.props.name}
          </h5>

          {partyCNG ? (
            <p class=" text-uppercase blue-text CNG-bio-REP">
              <strong>{this.props.title}</strong>
            </p>
          ) : (
            <p class=" text-uppercase blue-text CNG-bio-DEM">
              <strong>{this.props.title}</strong>
            </p>
          )}

          <p className="CNG-bio-p">
            <Bar percent="70" />
          </p>

          <span class="CNG-s" onClick={this.handler}>
            {" "}
            See More{" "}
          </span>
          <span className="BLM-blt" onClick={this.handlerVote}>
            {" "}
            <i class="fas fa-vote-yea"></i>
          </span>

          {/* CNG Modal */}
          <Modal show={this.state.show} onHide={this.handler}>
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <p class=" text-uppercase blue-text CNG-bio-WHI">
                  <strong>{this.props.title}</strong>
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={this.props.pic}
                class="rounded-card-modal z-depth-1"
                alt={this.props.name}
              />
              <h5 class="font-weight-bold mt-4 mb-3 CNG-bio-i-m">
                {this.props.name}
              </h5>

              <span className="CNG-rtgtxt">
                Ratings from Advocacy Organizations
              </span>

              <span className="CNG-arttxt">Articles</span>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                className="modalCloseBTN"
                onClick={this.handler}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* End  CNG Modal */}
          {/* Voting Modal */}
          <Modal show={this.state.showVote} onHide={this.handlerVote}>
            <Modal.Body className="voteModal">
              <h5 class="font-weight-bold mt-4 mb-3 CNG-bio-i-m">
                {this.props.name}
              </h5>
              <button onClick={() => poll(this.fn, 0, shouldStopPolling)}>
                Vote Yea
              </button>
              <button onClick={() => poll(this.fn, 0, shouldStopPolling)}>
                Vote Nay
              </button>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                className="modalCloseBTN"
                onClick={this.handlerVote}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* End Voting Modal */}
        </div>
      </div>
    );
  }
}
