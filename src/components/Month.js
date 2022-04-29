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
            />
        </div>
    )
}
export default Month