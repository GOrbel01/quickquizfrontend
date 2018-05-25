import React, { Component } from 'react';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.handleChangeQuestionText = this.handleChangeQuestionText.bind(this);
    }

    handleChangeQuestionText(ev) {
        this.props.handleChangeQuestionText(ev.target.value);
    }

    render() {
        return (
            <div className="qqStandardInputRow">
                {'Question: '}<input type="text" onChange={this.handleChangeQuestionText} className="qqTextInput" name="qText" value={this.props.questionItem.text}/>
            </div>
        )
    }

}