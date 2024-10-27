// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Ensure this is the correct backend URL

// Function to submit health data
export const submitHealthData = async (healthData) => {
  try {
    const response = await axios.post(`${API_URL}/api/health/data`, { healthData }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error submitting health data:', error);
    throw error;
  }
};

// Function to analyze health data
export const analyzeHealthData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/health/analyze`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error analyzing health data:', error);
    throw error;
  }
};


