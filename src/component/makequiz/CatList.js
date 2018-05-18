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
                this.setState({cats : nList});
            })
    }

    render() {
        return (
            <tr className="qqStandardInputRow">
                <td>Quiz Category</td>
                <td>
                <select className="qqSelectTextInput" name="categories" ref="CatDropdown">
                    {this.state.cats.map(cat => <option>{cat}</option>)}
                </select>
                </td>
            </tr>
        )
    }
}