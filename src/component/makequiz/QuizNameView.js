import React from 'react';

export default class QuizNameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="qqStandardInputRow">
                {'Quiz Name: '}
                <input type="text" className="qqTextInput" name="quizNameInput" ref="QuizNameInput"/>
            </div>
        );
    }
}