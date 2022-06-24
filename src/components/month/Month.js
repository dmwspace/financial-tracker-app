import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';
import Form from '../form/Form';
import 'react-calendar/dist/Calendar.css';


export default function Month() {

    const [current, setCurrent] = useState(new Date());
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false)

    const openModal = () => {
        setOpen(true);
    }

    const dateClicked = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`
    const modalPopup = 
        <Popup open={open} position="left center" closeOnDocumentClick onClose={closeModal}>
            <Form 
                dateClicked={dateClicked} 
                handleClick={closeModal}
            />
        </Popup>

    return (
        <div className="react-calendar">
            <Calendar 
                className="calendar"
                onChange={setCurrent} 
                value={current}
                tileClassName="tile"
                showNeighboringMonth={false}
                onClickDay={openModal}
            />
            {modalPopup}
        </div>
    )
}