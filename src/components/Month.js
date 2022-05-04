import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Month() {

    const [date, setDate] = useState(new Date());
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    return (
        <div className="react-calendar">
            <Calendar 
                onChange={setDate} 
                value={date}
                tileClassName="tile"
                showNeighboringMonth={false}
                onClickDay={(value, event) => alert(value.toString().slice(4, 15))}
            />
        </div>
    )
}
export default Month