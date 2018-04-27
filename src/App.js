import React, { Component } from 'react';
import logo from './logo.svg';
import QuizItem from "./component/QuizItem";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button>Play</button>
        <QuizItem />
      </div>
    );
  }
}

export default App;
