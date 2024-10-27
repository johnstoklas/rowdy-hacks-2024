import React, { useState } from 'react'
//change path
import {submitHealthData} from 'C:\\Users\\johns\\rowdy-hacks-2024\\src\\api.js'
import './index.scss';

const SubmitButton = () => {
  const [formData, setFormData] = useState({
    date: '',
    sleep: '',
    heartRate: '',
    steps: '',
    calorie: '',
    water: '',
    stress: ''
  });

  const updateFormData = () => {
    setFormData(formData.date = document.getElementById('calendar-input'));
    setFormData(formData.sleep = document.getElementById('sleep').value);
    setFormData(formData.heartRate = document.getElementById('heartRate').value);
    setFormData(formData.steps = document.getElementById('stepCount').value);
    setFormData(formData.calorie = document.getElementById('calories').value);
    setFormData(formData.water = document.getElementById('water').value);
    setFormData(formData.stress = document.getElementById('stress').value);
    //console.log(formData);
    handleSubmit();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitHealthData([formData]);  // Submit the health data
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting health data:', error);
      alert('Error submitting health data');
    }
  };

  return (
    <button onClick={updateFormData} class="submit-button"> Submit Results </button>
  )
}

export default SubmitButton