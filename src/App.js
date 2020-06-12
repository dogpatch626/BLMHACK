import ReactDOM from 'react-dom'
import React, {
	Component
} from 'react';

import logo from './logo.svg';
import './App.css';
import Main from './components/Main'

export default class App extends Component {

  state = {
    zipcode: ""
  };
  
  zipChangeHandler = e => {
    
		this.setState({
			[e.target.zipcode]: e.target.value
    });
    
    console.log(this.state.zipcode)

  };
  componentDidMount() {

  }
  showButton = e =>{
    console.log("started")
    let b = document.getElementById("sb");
    b.style.display = "inline";
    b.style.animation = "fadeInUp 1s ease-in-out 0s forwards"
    console.log("done")
    
  }

  changePage = e => {
    e.preventDefault()

    ReactDOM.render(
        <Main />,
        document.getElementById("root")
    )
}
  
  render(){
  return (
    <div className="App">
      <div className="base">
        <div className="container">
      <header className="App-header">
        <h1 className="BLM"> BLACK <br/> LIVES <br/> MATTER</h1>
        <span className="BLM-subtext"> Locate, Review, and Rate your elecetd officals bi-weekly and keep track of their legistrations and bills.</span>

        <div className="col-3-zip">
            <form class="index-search-form" onSubmit={this.changePage}>
              
            <input class="effect-5" type="text" onClick={this.showButton} onChange={this.zipChangeHandler} placeholder="ENTER ZIPCODE" type="text" pattern="[0-9]*"/>
            <span class="focus-border"></span>
            <button id="sb" class="zip-button" name="submit" type="sumbit" ><i class="far fa-arrow-alt-circle-right"></i></button>
            </form>
           
        </div>
      </header>
      </div>
      </div>
    </div>
  );
  }
}

