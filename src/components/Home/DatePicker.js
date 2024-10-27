import React, { useState } from 'react'

const DatePicker = () => {

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