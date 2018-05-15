import React, { Component } from 'react';
import EditFields from "./EditFields";
const buttonColor={
    buttonStyle:{
        background: 'hsl(0, 0%, 86%)',

    }
}

export default class EditUsers extends Component {
    render() {
        return (
            <div style={{padding: 10}}>
                <button  style={{...buttonColor.buttonStyle, ...this.props.style}}>
                    Edit Button
                </button>
            </div>
        );
    }
}
