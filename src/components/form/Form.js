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
            /><span><select>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                </select></span>
            <button onClick={handleClick}>
                Close form
            </button>
        </div>
            
    )
}