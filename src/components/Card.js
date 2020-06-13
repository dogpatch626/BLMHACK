import React, { Component } from "react";
import Bar from "./Bar.js";

export default class Card extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        let partyCNG;
        if (this.props.party === 'D') {
            partyCNG = true
        } else if (this.props.party === 'R') {
            partyCNG = false
        } else {
            return
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
                    <h5
                        class="font-weight-bold mt-4 mb-3 CNG-bio-i" >
                        {this.props.name}
                    </h5>

                    {partyCNG ? <p class=" text-uppercase blue-text CNG-bio-REP">
                        <strong>{this.props.title}</strong>
                    </p> : <p class=" text-uppercase blue-text CNG-bio-DEM">
                            <strong>{this.props.title}</strong>
                        </p>}


                    <p className="CNG-bio-p">
                        <Bar percent="70" />
                    </p>
                </div>
            </div>
        );
    }
}
