import React, { Component } from 'react';
import mLogo from './QQLogo1.png';
import QuizItem from "./component/makequiz/MakeQuizItem";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={mLogo} className="App-logo" alt="logo" />
                <p>QuickQuiz</p>
              </header>
              <QuizItem/>
            </div>
        );
    }
}

export default App;