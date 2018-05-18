import React from 'react';

export default class SubCatItem extends React.Component {
    render() {
        return (
            <tr className="qqStandardInputRow">
                <td>Sub Category</td>
                <td>
                    <input type="text" className="qqTextInput" name="subcategoryinput" ref="SubCatInput"/>
                </td>
            </tr>
        )
    }
}