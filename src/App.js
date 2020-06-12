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
  changePage = (e) => {
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

        <div class="col-3-zip">
            <form onSubmit={this.changePage}>
              
            <input class="effect-5" type="text" onChange={this.zipChangeHandler} placeholder="ENTER ZIPCODE" type="text" pattern="[0-9]*"/>
            <span class="focus-border"></span>
            <button type="sumbit" >Go</button>
            </form>
           
        </div>
      </header>
      </div>
      </div>
    </div>
  );
  }
}

