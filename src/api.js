// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Ensure this is the correct backend URL

// Function to submit health data
export const submitHealthData = async (healthData) => {
  try {
    console.log('Submitting health data:', healthData);

    // Convert the health data to JSON format
    const formattedData = JSON.stringify({
      user: healthData.user,
      healthData: healthData.healthData  // Wrap the healthData inside an object
    });

    console.log('formattedData: ' + formattedData)
    console.log("path: " + `${API_URL}/api/health/data`)
    const response = await axios.post(`${API_URL}/api/health/data`, formattedData, {
      headers: {
        'Content-Type': 'application/json',  // Set content type to JSON
      },
      withCredentials: true
    });
    console.log('Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error submitting health data:', error);
    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response data:', error.response.data);
    } else {
      console.error('Error message:', error.message);

    }
    throw error;
  }
};


// Function to analyze health data
export const analyzeHealthData = async () => {
  try {
    console.log("analyzeHealthData function entered");
    console.log(`Sending request to: ${API_URL}/api/health/analyze`);  // Log the API URL

    // Retrieve the stored username from localStorage
    const username = localStorage.getItem('username');

    const response = await axios.get(`${API_URL}/api/health/analyze`, {
      params: {
        username: username  // Pass the actual username here
      },
      withCredentials: true  // Pass credentials like cookies
    });
    
    console.log("Response received:", response);  // Log the full response object
    console.log("Response data:", response.data);  // Log just the data part of the response
    
    return response.data;
  } catch (error) {
    console.error('Error analyzing health data:', error);

    // Log the response from the error if it exists
    if (error.response) {
      console.error('Error response status:', error.response.status);  // Log the status code
      console.error('Error response data:', error.response.data);  // Log the response data
    } else {
      console.error('Error message:', error.message);  // Log the error message if no response
    }

    throw error;
  }
};

// Sign Up function
export const signUpUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      formFields: [
        { id: 'email', value: email },
        { id: 'password', value: password }
      ]
    }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Sign In function
export const signInUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      formFields: [
        { id: 'email', value: email },
        { id: 'password', value: password }
      ]
    }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};



