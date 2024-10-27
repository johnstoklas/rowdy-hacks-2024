import React, { useEffect, useState } from 'react';
import { analyzeHealthData } from 'C:\\GUSTAVO\\HACKATHON\\rowdy-hacks-2024\\src\\api.js';
import './index.scss';
import GradeContainer from '../GradesContainer';
import Topbar from './Topbar';
import HealthGraph from './healthGraph';

const Health = () => {
  const [activeItems, setActiveItems] = useState([]);
  const [overallOpen, setOverallOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);  // Store analysis result

  const handleToggle = (item) => {
    setActiveItems((prev) =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleOverall = () => {
    setOverallOpen(!overallOpen);
  };

  useEffect(() => {
    const handleAnalyze = async () => {
      console.log("handleAnalyze is being called");  // Log when the function starts
      try {
        const analysis = await analyzeHealthData();  // Call the backend API
        console.log('Analysis result:', analysis);  // Log the result from the backend
        setAnalysisResult(analysis);  // Store the analysis in state
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
      <GradeContainer analysisResult={analysisResult} />

      {/* Graph Area */}
      <div className="graph-container1 fade-in">
        <HealthGraph />
        <div className="graph">
          <h1> Here is your Report Based on your Data </h1>
          {analysisResult ? (
            <p> {analysisResult.analysis.recommendations} </p>
            ) : (
              <p>Loading analysis data...</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Health;
