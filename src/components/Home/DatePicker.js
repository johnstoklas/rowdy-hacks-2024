import React from 'react';

const DatePicker = ({ updateFormData }) => {
  const handleDateChange = (e) => {
    updateFormData('date', e.target.value); 
  };

  return (
    <div className="date-box-container">
      <div className="date-label"> Date </div>
      <input
        type="date"
        id="calendar-input"
        className="calendar"
        onChange={handleDateChange}  
      />
    </div>
  );
};

export default DatePicker;