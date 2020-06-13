import React, { Component } from "react";
import Card from "./Card.js";

export default class Main extends Component {
  state = {
    show: false,
    data: [
      {
        key: 1,
        name: 'Charles "Chuck" Schumer',
        party: 'D',
        title: 'Senior Senator for New York',
        pic: 'https://www.govtrack.us/static/legislator-photos/300087-100px.jpeg'
      },
      {
        key: 2,
        name: 'Kirsten Gillibrand',
        party: 'D',
        title: 'Junior Senator for New York',
        pic: 'https://www.govtrack.us/static/legislator-photos/412223-100px.jpeg'
      },
      {
        key: 3,
        name: 'José Serrano',
        party: 'R',
        title: 'Representative for New Yorks 15th congressional district',
        pic: 'https://www.govtrack.us/static/legislator-photos/400366-100px.jpeg'
      },
      {
        key: 4,
        name: 'José Serrano',
        party: 'R',
        title: 'Representative for New Yorks 15th congressional district',
        pic: 'https://www.govtrack.us/static/legislator-photos/400366-100px.jpeg'
      },
      {
        key: 5,
        name: 'Charles "Chuck" Schumer',
        party: 'D',
        title: 'Senior Senator for New York',
        pic: 'https://www.govtrack.us/static/legislator-photos/300087-100px.jpeg'
      },
      {
        key: 6,
        name: 'Kirsten Gillibrand',
        party: 'D',
        title: 'Junior Senator for New York',
        pic: 'https://www.govtrack.us/static/legislator-photos/412223-100px.jpeg'
      },
      {
        key: 7,
        name: 'José Serrano',
        party: 'R',
        title: 'Representative for New Yorks 15th congressional district',
        pic: 'https://www.govtrack.us/static/legislator-photos/400366-100px.jpeg'
      },
      {
        key: 8,
        name: 'José Serrano',
        party: 'R',
        title: 'Representative for New Yorks 15th congressional district',
        pic: 'https://www.govtrack.us/static/legislator-photos/400366-100px.jpeg'
      }
    ]
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

    console.log(this.state.data)
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
                Elected Official for Zipcode: <span class="BLM-z"> 10473 </span>
              </h2>

              <div class="row">
                {this.state.data.map((person, index) => (
                  // <p>Hello, {person.name} from {person.country}!</p>

                  <Card
                    id={person.key}
                    name={person.name}
                    party={person.party}
                    pic={person.pic}
                    title={person.title}
                  />


                ))}

              </div>
            </section>

          </div>
        </div>
      </div>
      
    );
  }
}
