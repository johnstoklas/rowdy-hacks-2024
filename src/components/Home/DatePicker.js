import React, { useState } from 'react'

const DatePicker = () => {
    /*
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        updateHTMLDate(date);
    };

    const updateHTMLDate = (date) => {
        var dateArray = date.split('-');
        console.log(dateArray);
        if(dateArray.length < 3) {
            document.getElementById('month').innerHTML = 'JAN'
            document.getElementById('year').innerHTML = '1985';            
            document.getElementById('day').innerHTML = '01';
        }
        else {
            document.getElementById('year').innerHTML = dateArray[0];
            document.getElementById('day').innerHTML = dateArray[2];
            document.getElementById('month').innerHTML = monthConvert(dateArray[1]);
        }
    }

    const monthConvert = (val) => {
        return months[val - 1];
    } 

    const months = ['JAN','FEB', 'MAY', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
*/
    
  return (
    <>
    <div class="date-box-container">
        <div class="date-label"> Date: </div>
        <input
            type="date"
            id="calendar-input"
            class="calendar"
        />
    </div>
    </>
  )
}

export default DatePicker