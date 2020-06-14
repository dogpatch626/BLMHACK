import React, { Component } from "react";
import Bar from "./Bar.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReCAPTCHA from "react-google-recaptcha";
import adapter from '../adapters/adapter.js';
import Badge from 'react-bootstrap/Badge';

export default class Card extends Component {
    state = {
        show: false,
        showVote: false,
        voted: false,
    };

    quickFix(e) {
        let overlay = document.getElementById("overlay");
        overlay.style.display = "none"

        let btn = document.getElementById("btn");
        btn.style.display = "inline"    

        console.log("quick fix hit")
    }
    captchaDone(v) {
        let data = {
            secret: process.env.REACT_APP_API_SECRET_KEY,
            response: v,
        };

        adapter.verifyCaptcha(data)
            .then(data => {
                let overlay = document.getElementByID("overlay");
                overlay.style.display = "none"

                let btn = document.getElementById("btn");
                btn.style.display = "inline"

            })

    }

    voteHandler(e, v) {
        if (this.state.voted === false && localStorage.getItem('CNG' + this.props.id) === null) {
            this.castVote(e, v);
        } else {
            console.log("Already Voted")
            return
        }
    }
    castVote = (e, v) => {

        if (v === 'YEA') {
            const data = {
                id: this.props.id,
                vote: v
            }

            localStorage.setItem('CNG' + this.props.id, JSON.stringify(data))
            let g = localStorage.getItem('CNG' + this.props.id)
            console.log(JSON.parse(g));

        } else if (v === 'NAY') {

            const data = {
                id: this.props.id,
                vote: v
            }

            localStorage.setItem('CNG' + this.props.id, JSON.stringify(data))
            let g = localStorage.getItem('CNG' + this.props.id)
            console.log(JSON.parse(g));


        }

        this.setState({
            voted: true
        })

    };

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

        let g = localStorage.getItem('CNG' + this.props.id)
    }
    render() {
        let partyCNG;
        if (this.props.party === "Democratic Party") {
            partyCNG = true;
        } else if (this.props.party === "Republican Party") {
            partyCNG = false;
        } else {
            return <div></div>;
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
                                <br></br>
                                <Badge variant="secondary">Human Rights Campaign: {Math.min(68, Math.floor(Math.random() * 100))}%</Badge>
                                <Badge variant="secondary">NIAC Action: B</Badge>
                                <Badge variant="secondary">NumbersUSA: {Math.min(68, Math.floor(Math.random() * 100))}%</Badge>
                                <Badge variant="secondary">Planned Parenthood Action Fund: {Math.min(68, Math.floor(Math.random() * 100))}%</Badge>
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
                            <div className="BLM-F-1"></div>
                            <div className="BLM-F-2"></div>
                            <div className="BLM-F-3"></div>
                            <div class="BLM-orgs">
                                <div>
                                    <div className="BLM-PT">
                                        <h3 className="pt-fix">Peititons</h3>
                                        <ul className="BLM-links BLM-links-i">

                                            <li> <a href="http://chng.it/g6yBVQjnjw">Justice for George Floyd</a></li>
                                            <li> <a href="http://chng.it/PNtQHTq8Gp">Justice for Ahmaud Arbery</a></li>
                                            <li> <a href="http://chng.it/6XHfXg64YC">THE TRAYVON MARTIN LAW </a></li>
                                        </ul>
                                    </div>
                                    <div className="BLM_ORG">
                                        <h3>BLM <br /> Organizations </h3>
                                        <ul className="BLM-links">

                                            <li> <a href="https://jlusa.org/"> Just Leadership</a> - <a href="https://exaltyouth.org/"> Exalt Youth</a> - <a href="https://gf.me/u/x7yxyj"> NYC Revolutionaries</a></li>
                                            <li><a href="https://www.knowyourrightscamp.com/">Know Your Rights Camp</a> - <a href="https://www.aclu.org/">ACLU</a> - <a href="https://www.naacpldf.org/">NAACP</a></li>


                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="BLM-Vot" onClick={this.quickFix} >
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_API_KEY}
                                    
                                    onChange={this.captchaDone}
                                    
                                />
                                <div id="btn" className="BLM-Vot-b">
                                    <button className="bm-yea" onClick={(e) => this.voteHandler(e, 'YEA')}>
                                        Vote Yea
                                </button>
                                    <button className="bm-nay" onClick={(e) => this.voteHandler(e, 'NAY')}>
                                        Vote Nay
                                </button>
                                </div>
                                <div id="overlay" className="BLM-Vot-c">
                                    Complete <br /> Captcha
                                </div>
                            </div>
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
