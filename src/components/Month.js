import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Month() {

    const [date, setDate] = useState(new Date())

    return (
        <div className="react-calendar">
            <Calendar 
                onChange={setDate} 
                value={date}
                tileClassName="tile"
                showNeighboringMonth={false}
                onClickDay={(value, event) => alert('You clicked on: ', value.toString().slice(0, 6))}
            />
        </div>
    )
}
export default Month