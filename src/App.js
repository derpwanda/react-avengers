import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Avengers: [
        {name: 'IronMan'},
        {name: 'The Hulk'},
        {name: 'Captain America'},
        {name: 'Thor'},
        {name: 'Hawkeye'},
        {name: 'Black Widow'},
      ]
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            The Avengers: by Wanda
          </h2>
          <h3>{this.state.Avengers.map((char) => {
            return (
              <div>{char.name}</div>
            )
          })}</h3>
        </header>
      </div>
    );
  }
}

export default App;
