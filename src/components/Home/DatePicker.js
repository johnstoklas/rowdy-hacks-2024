import React, { useState } from 'react'

const DatePicker = () => {
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

    
  return (
    <>
    <div class="date-box-container">
        <div class="date-box"> 
            <div class="date-label"> MONTH </div>
            <div class="date-output" id="month" style={{width: 125 + 'px'}}> JAN </div>
        </div>
        <div class="date-box"> 
            <div class="date-label"> DAY </div>
            <div class="date-output" id="day" style={{width: 60 + 'px'}}> 01 </div>
        </div>
        <div class="date-box"> 
            <div class="date-label"> YEAR </div>
            <div class="date-output" id="year" style={{width: 125 + 'px'}}> 1985 </div>
        </div>
        <div class="date-box">
            <div class="date-label"> HOUR </div>
            <div class="date-output"> 00 </div> </div>
        <div class="date-box"> 
            <div class="date-label"> MIN </div>
            <div class="date-output"> 00 </div>
        </div>
        <input
            type="date"
            id="calendar-input"
            value={selectedDate}
            onChange={handleDateChange}
            class="calendar"
        />
    </div>
    </>
  )
}

export default DatePicker