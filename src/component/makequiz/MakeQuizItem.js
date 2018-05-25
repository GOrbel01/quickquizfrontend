import React from 'react';
import CatList from "./CatList";
import SubCatItem from "./SubCatItem";
import QuestionsView from "./QuestionsView";
import QuizNameView from "./QuizNameView";

export default class QuizItem extends React.Component {
    constructor() {
        super();
        this.state = {
            cat: "",
            subCat: "",
            quizName: "",
        }
    }

    render() {
        return (
            <div className="qqQuizItem">
                <CatList/>
                <SubCatItem/>
                <QuizNameView/>
                <br/>
                <h3>Questions</h3>
                <QuestionsView/>
                <div className="qqStandardInputRow">
                    <button className="qqButton">Save Quiz</button>
                </div>
            </div>
        )
    }

}

class QuizHolder {
    constructor(cat, subcat, name, questionSet) {
        this.cat = cat;
        this.subcat = subcat;
        this.name = name;
        this.questionSet = questionSet;
    }
}