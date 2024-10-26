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
        document.getElementById('year').innerHTML = dateArray[0];
        document.getElementById('day').innerHTML = dateArray[2];
        document.getElementById('month').innerHTML = dateArray[1];
    }

    const months = [
        {value: 1, label: 'JAN'},
        {value: 2, label: 'FEB'},
        {value: 3, label: 'MAR'},
        {value: 4, label: 'APRIL'},
        {value: 5, label: 'MAY'},
        {value: 6, label: 'JUNE'},    
        {value: 7, label: 'JULY'},
        {value: 8, label: 'AUG'},
        {value: 9, label: 'SEPT'},
        {value: 10, label: 'OCT'},
        {value: 11, label: 'NOV'},
        {value: 12, label: 'DEC'},
    ]

    
  return (
    <>
    <input
        type="date"
        id="calendar-input"
        value={selectedDate}
        onChange={handleDateChange}
    />
    <div class="date-box-container">
        <div class="date-box"> 
            <div class="date-label"> MONTH </div>
            <div class="date-output" id="month"> JAN </div>
        </div>
        <div class="date-box"> 
            <div class="date-label"> DAY </div>
            <div class="date-output" id="day"> 01 </div>
        </div>
        <div class="date-box"> 
            <div class="date-label"> YEAR </div>
            <div class="date-output" id="year"> 1985 </div>
        </div>
        <div class="date-box">
            <div class="date-label"> HOUR </div>
            <div class="date-output"> 00 </div> </div>
        <div class="date-box"> 
            <div class="date-label"> MIN </div>
            <div class="date-output"> 00 </div>
        </div>
    </div>
    </>
  )
}

export default DatePicker