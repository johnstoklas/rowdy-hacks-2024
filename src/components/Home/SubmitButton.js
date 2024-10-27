import React, { useState } from 'react'
import {submitHealthData, analyzeHealthData} from 'C:\\Users\\johns\\rowdy-hacks-2024\\src\\api.js'
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

  const updateFormDate = () => {
    setFormData(formData.date = document.getElementById('calendar-input'));
    setFormData(formData.sleep = document.getElementById('sleep').value);
    setFormData(formData.heartRate = document.getElementById('heartRate').value);
    setFormData(formData.steps = document.getElementById('stepCount').value);
    setFormData(formData.calorie = document.getElementById('calories').value);
    setFormData(formData.water = document.getElementById('water').value);
    setFormData(formData.stress = document.getElementById('stress').value);
    console.log(formData);
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

  const handleAnalyze = async () => {
    try {
      const analysis = await analyzeHealthData();  // Analyze the health data
      console.log('Analysis result:', analysis);
      alert(JSON.stringify(analysis, null, 2));  // Display the analysis in an alert (for demo purposes)
    } catch (error) {
      console.error('Error analyzing health data:', error);
      alert('Error analyzing health data');
    }
  };
  

  return (
    <button onClick={updateFormDate} class="submit-button"> Submit Results </button>
  )
}

export default SubmitButton