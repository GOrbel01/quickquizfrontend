import React, { Component } from 'react';
import CatList from "./CatList";

export default class QuizItem extends Component {
    render() {
        let options = [];
        for (let i = 1; i <= 8; i++) {
            options.push(i);
        }

        return (
            <div className="qqQuizItem">
                <table className="qqTable">
                    <tr>
                        <div>
                            <td>Number of Questions</td>
                            <td>
                                <select className="qqSelectNumberInput" name="numQuestions">
                                    {options.map(n => <option>{n}</option>)};
                                </select>
                            </td>
                        </div>
                    </tr>
                    <br/>
                    <tr>
                        <CatList/>
                    </tr>
                </table>
            </div>
        )
    }

}