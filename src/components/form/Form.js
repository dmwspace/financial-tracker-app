import React from 'react';
// import Popup from 'reactjs-popup';
// import './form.css'

export default function Form(props) {
    console.log(props.date)
    return (
        <div className='form'>
            <h1>{props.date}</h1>
        </div>
            
    )
}