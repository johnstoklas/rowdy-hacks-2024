import React, { useEffect, useState } from 'react';
import {analyzeHealthData} from 'C:\\GUSTAVO\\HACKATHON\\rowdy-hacks-2024\\src\\api.js'
import './index.scss';
import GradeContainer from '../GradesContainer';
import Topbar from './Topbar';

const Health = () => {
  const [activeItems, setActiveItems] = useState([]);
  const [overallOpen, setOverallOpen] = useState(false);

  const handleToggle = (item) => {
    setActiveItems((prev) => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleOverall = () => {
    setOverallOpen(!overallOpen);
  };

useEffect(() => {
  console.log("useEffect is running");  // Log when useEffect is triggered
  
  const handleAnalyze = async () => {
    console.log("handleAnalyze is being called");  // Log when the function starts
    try {
      const analysis = await analyzeHealthData();  // Call the backend API
      console.log('Analysis result:', analysis);  // Log the result from the backend
      alert(JSON.stringify(analysis, null, 2));  // Display the analysis in an alert
    } catch (error) {
      console.error('Error analyzing health data:', error);  // Log any error
      if (error.response) {
        console.error('Backend error response:', error.response.data);  // Log the backend error response
      } else {
        console.error('Error message:', error.message);  // Log the general error message
      }
      alert('Error analyzing health data');  // Alert the user about the error
    }
  };

  handleAnalyze();  // Call the function when the component loads
}, []);  // The empty array ensures this only runs once on component load

  return (
    <>
    <Topbar />
    <div className="container">
      {/* Response Area */}
      <div className="response-container">
        
        <div className="scrollable-text"> </div>
      </div>

      {/* Grade Area */}
      <GradeContainer />

      {/* Graph Area */}

      <div className="graph-container1 fade-in">
        <div className="graph">
          <h1> Analyze Trends Over Time! </h1>
        </div>
      </div>

      <div className="graph-container2 fade-in">
        <div className="graph">
          <h1> Analyze Trends Over Time! </h1>
        </div>
      </div>

    </div>
    </>
  );
};

export default Health;