import React from 'react';

export default class AnswerItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeAnswerText = this.handleChangeAnswerText.bind(this);
    }

    handleChangeAnswerText(ev) {
        this.props.handleChangeAnswerText(ev.target.value, ev.target.name);
    }

    buildValue(index) {
        let ansText = this.props.questionItem.answers[index];
        if (ansText) {
            return ansText;
        } else {
            return '';
        }
    }

    render() {
        return (
            <div>
                <h3>Answers</h3>
                <table className="qqTable">
                    <tbody>
                        <tr>
                            <td>1. <input type="text" className="qqTextInput" name="0" onChange={this.handleChangeAnswerText} value={this.buildValue(0)}/></td>
                            <td>2. <input type="text" className="qqTextInput" name="1" onChange={this.handleChangeAnswerText} value={this.buildValue(1)}/></td>
                        </tr>
                        <tr>
                            <td>3. <input type="text" className="qqTextInput" name="2" onChange={this.handleChangeAnswerText} value={this.buildValue(2)}/></td>
                            <td>4. <input type="text" className="qqTextInput" name="3" onChange={this.handleChangeAnswerText} value={this.buildValue(3)}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}