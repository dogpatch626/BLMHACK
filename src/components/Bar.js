import React, { Component } from "react";


export default class Bar extends Component {
    state = {
        percentage: 55
    }
    componentDidMount() {

        this.setState({
            percentage: this.props.percent
        });
    }
    render() {
        let mystyle = {
            width: this.state.percentage + "%"
        }

        return (
            <div class="progress">
                <div class="bar" style={mystyle}>
                    <p class="percent">{this.state.percent}%</p>
                </div>
            </div>

        );
    }
}
