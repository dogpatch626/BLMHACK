import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="base">
        <div className="container">
      <header className="App-header">
        <h1 className="BLM"> BLACK <br/> LIVES <br/> MATTER</h1>
        <span className="BLM-subtext"> Locate, Review, and Rate your elecetd officals bi-weekly and keep track of their legistrations and bills.</span>

        <div class="col-3-zip">
            <input class="effect-5" type="text" placeholder="ENTER ZIPCODE"/>
            <span class="focus-border"></span>
        </div>
      </header>
      </div>
      </div>
    </div>
  );
}

export default App;
