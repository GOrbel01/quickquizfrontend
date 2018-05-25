import React from 'react';
import Question from './Question';

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
    }

    initQuestions() {
        for (let i = 0; i < this.nQuestions; i++) {
            this.state.questions[i] = new QuestionItem(i);
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
                <Question questionItem={this.state.questions[this.state.curIndex]}/>
            </div>
        )
    }
}

class QuestionItem {
    constructor(index, text = "", answers = []) {
        this.index = index;
        this.text = text;
        this.answers = answers;
    }
}