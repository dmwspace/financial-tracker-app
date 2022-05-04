import React from 'react';
import Popup from 'reactjs-popup';

export default function Form(props) {
    return (
        <Popup
            trigger={props.toggle}    
            position="right center"
        >
            <form id="form">
                <input type="text"></input>
            </form>
        </Popup> 
    )
}