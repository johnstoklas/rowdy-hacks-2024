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
        <h1> Health Analysis </h1>
        <div className="scrollable-text"> <p> AI will go here... </p></div>
      </div>

      {/* Grade Area */}
      <GradeContainer />

      {/* Graph Area */}
      <div className="graph-container">
        <div className="graph">
          <h1> Analyze Trends Over Time! </h1>
        </div>
      </div>

    </div>
    </>
  );
};

export default Health;
