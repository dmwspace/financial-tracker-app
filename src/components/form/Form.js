import React from 'react';
import './form.css'

export default function Form({dateClicked, handleClick}) {
    return (
        <div className='form'>
            <h1>{dateClicked}</h1>
            <input type="text"
                placeholder="Enter memo here"
            />
            <input type="number"
                placeholder="Enter amount here"
            /><span><input type="checkbox" /></span>
            <button onClick={handleClick}>
                Close form
            </button>
        </div>
            
    )
}