import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      timestamp: 'no timestamp yet'
    }

    subscribeToTimer((err, timestamp) => this.setState({timestamp}))
  }

  render() {
    return (
      <div className="App">
        <p> This is the timer value : {this.state.timestamp} </p>
      </div>
    );
  }
}

export default App;
