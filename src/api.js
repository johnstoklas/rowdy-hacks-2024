import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const submitHealthData = async (healthData) => {
  try {
    console.log('Submitting health data:', healthData);

    const formattedData = JSON.stringify({
      user: healthData.user,
      healthData: healthData.healthData  
    });

    console.log('formattedData: ' + formattedData)
    console.log("path: " + `${API_URL}/api/health/data`)
    const response = await axios.post(`${API_URL}/api/health/data`, formattedData, {
      headers: {
        'Content-Type': 'application/json', 
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

export const analyzeHealthData = async () => {
  try {
    console.log("analyzeHealthData function entered");
    console.log(`Sending request to: ${API_URL}/api/health/analyze`); 

    const username = localStorage.getItem('username');

    const response = await axios.get(`${API_URL}/api/health/analyze`, {
      params: {
        username: username  
      },
      withCredentials: true
    });
    
    console.log("Response received:", response); 
    console.log("Response data:", response.data); 

    const retrieved_data = localStorage.getItem('');
    
    return response.data;
  } catch (error) {
    console.error('Error analyzing health data:', error);

  
    if (error.response) {
      console.error('Error response status:', error.response.status);  
      console.error('Error response data:', error.response.data);  
    } else {
      console.error('Error message:', error.message);  
    }

    throw error;
  }
};

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



