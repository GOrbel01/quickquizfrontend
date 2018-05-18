import React, { Component } from 'react';
import CatList from "./CatList";
import SubCatItem from "./SubCatItem";

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
                        <td>Number of Questions</td>
                        <td>
                            <select className="qqSelectNumberInput" name="numQuestions">
                                {options.map(n => <option>{n}</option>)};
                            </select>
                        </td>
                    </tr>
                    <CatList/>
                    <SubCatItem/>
                    <tr className="qqStandardInputRow">
                        <td>Quiz Name</td>
                        <td>
                            <input type="text" className="qqTextInput" name="quizNameInput" ref="QuizNameInput"/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}