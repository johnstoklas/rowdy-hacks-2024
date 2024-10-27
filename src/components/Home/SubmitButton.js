import React from 'react';
import { submitHealthData } from 'C:\\GUSTAVO\\HACKATHON\\rowdy-hacks-2024\\src\\api.js';
import './index.scss';

const SubmitButton = ({ formData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();


    const userId = localStorage.getItem('username');  

    if (!userId) {
      alert('User is not authenticated. Please sign in first.');
      return;
    }

    try {
      const formattedData = {
        user: userId,  
        healthData: {
          date: formData.date,
          heartRate: formData.heartRate,
          steps: formData.stepCount, 
          calorie: formData.calories, 
          water: formData.water,
          sleep: formData.sleep,
          stress: formData.stress
        }
      };

      const response = await submitHealthData(formattedData);  
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting health data:', error);
      alert('Error submitting health data');
    }
  };

  return (
    <button onClick={handleSubmit} className="submit-button">
      Submit Results
    </button>
  );
};

export default SubmitButton;
