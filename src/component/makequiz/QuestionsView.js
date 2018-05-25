import React from 'react';
import Question from './Question';
import AnswerItem from './AnswerItem';

export default class QuestionsView extends React.Component {
    constructor() {
        super();
        this.nQuestions = 5;
        this.state = {
            curIndex: 0,
            questions: []
        };
        this.initQuestions();
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeQuestionText = this.handleChangeQuestionText.bind(this);
        this.handleChangeAnswerText = this.handleChangeAnswerText.bind(this);
    }

    initQuestions() {
        for (let i = 0; i < this.nQuestions; i++) {
            this.state.questions[i] = new QuestionItem();
        }

        this.state.questions[0].text = "Haha what was that.";
        this.state.questions[1].text = "Damn this sucks!";
    }

    handleChange(ev) {
        let index = ev.target.value;
        this.setState(() => {
            return {
              curIndex: index - 1
            };
        });
    }

    handleChangeQuestionText(text) {
        const questions = this.state.questions;
        questions[this.state.curIndex].text = text;
        this.setState(() =>{
           return {
               questions: questions
           };
        });
    }

    handleChangeAnswerText(text, ansIndex) {
        const questions = this.state.questions;
        console.log('CI: ' + this.state.curIndex);
        questions[this.state.curIndex].answers[ansIndex] = text;
        this.setState(() =>{
            return {
                questions: questions
            };
        });
    }

    genOptions() {
        let res = [];
        for (let i = 1; i <= this.nQuestions; i++) {
            res.push(<option key={i}>{i}</option>)
        }
        return res;
    }

    render() {
        return (
            <div className="qqStandardInputRow">
                <div className="qqStandardInputRow">
                    {'Select a Question: '}
                    <select onChange={this.handleChange} className="qqSelectNumberInput" name="selectQuestion">
                        {this.genOptions()};
                    </select>
                </div>
                <Question handleChangeQuestionText={this.handleChangeQuestionText} questionItem={this.state.questions[this.state.curIndex]}/>
                <AnswerItem handleChangeAnswerText={this.handleChangeAnswerText} questionItem={this.state.questions[this.state.curIndex]}/>
            </div>
        )
    }
}

class QuestionItem {
    constructor(text = "", answers = []) {
        this.text = text;
        this.answers = answers;
    }
}