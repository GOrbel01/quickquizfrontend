import React, { Component } from 'react';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSaveQuestion() {

    }

    render() {
        return (
            <div className="qqStandardInputRow">
                {'Question: '}<input type="text" className="qqTextInput" value={this.props.questionItem.text}/>
                <div className="qqStandardInputRow"><button onClick={this.handleSaveQuestion}>Save Question</button></div>
            </div>
        )
    }

}