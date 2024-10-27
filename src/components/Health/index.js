import React from 'react';
import './index.scss';
import GradeContainer from '../GradesContainer';
import Topbar from './Topbar';

const Health = () => {
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
