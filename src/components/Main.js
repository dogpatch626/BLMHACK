import React, { Component } from "react";
import Card from "./Card.js";
import adapter from '../adapters/adapter';

export default class Main extends Component {
  state = {
    show: false,
    officials: [],
    offices: {}
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  closeAlert = e => {
    const alert = document.getElementById("notification")
    alert.style.display = "none"
  }

                    

  componentDidMount() {
    adapter.apiSearch(this.props.zipcode).then(res => {
      if(res.officials) {
        this.setState({
          officials: res.officials
        });

        res.offices.forEach(o => {
          for (const oi of o.officialIndices) {
            this.setState({
              offices: {
                ...this.state.offices,
                [oi]: o.name
              }
            })
          }
        })
   
      }
    })

  }

  render() {
    return (
      
      <div className="App">
        <div className="base-2">
          <div className="container">
            <section class="team-section text-center my-5">
              <span className="BLM-weeknum"> Week 13</span>

              <p id="notification" class="white-text w-responsive mx-auto BLM-info-b">
                We provide an bi-weekly general poll that is open to the public.
                You have the choice to give your local elected officials a <b>Yea</b> or <b>Nay</b> dependent on your personal opinion.
                It can be fueled by they're recent politics or your beliefs. <span className="close-n" onClick={this.closeAlert}> Close Notification </span>
              </p>

              <h2
                class="h1-responsive font-weight-bold my-5 BLM-head"
                style={{ color: "white" }}
              >
                Elected Officials for Zipcode: <span class="BLM-z"> {this.props.zipcode} </span>
              </h2>

              <div class="row">
                {this.state.officials.map((person, index) => {
                  // <p>Hello, {person.name} from {person.country}!</p>
console.log(this.state.officials);
                  return (<Card
                    id={Math.floor(Math.random() * 20000).toString()}
                    name={person.name}
                    party={person.party}
                    pic={person.photoUrl || 'https://media.musclegrid.io/RBBJJ.COM/uploads/2020/01/24011124/default-headshot.jpg'}
                    title={this.state.offices[index]}
                  />);


  })}

              </div>
            </section>

          </div>
        </div>
      </div>
      
    );
  }
}
