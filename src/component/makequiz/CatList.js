import React from 'react';
import axios from 'axios';

export default class CatList extends React.Component {
    constructor() {
        super();
        this.state = {
            cats: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cat/all')
            .then(res => {
                let nList = [];
                res.data.map(cat => { nList.push(cat.name);});
                this.setState(() => {
                    return {cats: nList}
                });
            });
    }

    render() {
        return (
            <div className="qqStandardInputRow">
                {'Quiz Category: '}
                <select className="qqSelectTextInput" name="categories" ref="CatDropdown">
                    {this.state.cats.map(cat => <option>{cat}</option>)}
                </select>
            </div>
        )
    }
}