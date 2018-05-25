import React from 'react';

export default class SubCatItem extends React.Component {
    render() {
        return (
            <div className="qqStandardInputRow">
                {'Sub Category: '}
                <input type="text" className="qqTextInput" name="subcategoryinput" ref="SubCatInput"/>
            </div>
        )
    }
}