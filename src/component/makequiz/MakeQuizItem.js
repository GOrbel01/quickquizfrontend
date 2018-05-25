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
            </div>
        )
    }

}