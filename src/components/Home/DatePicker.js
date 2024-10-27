import React from 'react';

const DatePicker = ({ updateFormData }) => {
  const handleDateChange = (e) => {
    updateFormData('date', e.target.value);  // Pass the selected date back to Home.js
  };

  return (
    <div className="date-box-container">
      <div className="date-label"> Date </div>
      <input
        type="date"
        id="calendar-input"
        className="calendar"
        onChange={handleDateChange}  // Call the handler when date changes
      />
    </div>
  );
};

export default DatePicker;