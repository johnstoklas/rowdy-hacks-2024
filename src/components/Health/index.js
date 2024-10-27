import React, { useEffect, useState } from 'react';
import { analyzeHealthData } from 'C:\\GUSTAVO\\HACKATHON\\rowdy-hacks-2024\\src\\api.js';
import './index.scss';
import GradeContainer from '../GradesContainer';
import Topbar from './Topbar';
import HealthGraph from './healthGraph';

const Health = () => {
  const [activeItems, setActiveItems] = useState([]);
  const [overallOpen, setOverallOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);  

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
      console.log("handleAnalyze is being called");  
      try {
        const analysis = await analyzeHealthData();  
        console.log('Analysis result:', analysis);  
        setAnalysisResult(analysis);  
      } catch (error) {
        console.error('Error analyzing health data:', error);
        if (error.response) {
          console.error('Backend error response:', error.response.data);  
        } else {
          console.error('Error message:', error.message);  
        }
        alert('Error analyzing health data');  
      }
    };

    handleAnalyze(); 
  }, []);  

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
