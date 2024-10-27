import React from 'react';
import { submitHealthData } from 'C:\\GUSTAVO\\HACKATHON\\rowdy-hacks-2024\\src\\api.js';
import './index.scss';

const SubmitButton = ({ formData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get userId from localStorage (or from a state if using state management)
    const userId = localStorage.getItem('username');  // Assuming username is stored in localStorage

    // Check if userId exists before submitting
    if (!userId) {
      alert('User is not authenticated. Please sign in first.');
      return;
    }

    try {
      // Format the data to be sent to the backend
      const formattedData = {
        user: userId,  // Include the userId
        healthData: {
          date: formData.date,
          heartRate: formData.heartRate,
          steps: formData.stepCount,  // Ensure it's "steps"
          calorie: formData.calories, // Ensure it's "calorie"
          water: formData.water,
          sleep: formData.sleep,
          stress: formData.stress
        }
      };

      const response = await submitHealthData(formattedData);  // Submit the formatted data
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
