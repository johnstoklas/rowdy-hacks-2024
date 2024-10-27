import React from 'react';
import './index.scss';
import GradeContainer from '../GradesContainer';

const Health = () => {
  return (
    <div className="container">
      {/* Response Area */}
      <div className="response-container">
        <div className="scrollable-text"> AI will go here... </div>
      </div>

      {/* Grade Area */}
      <GradeContainer />

      {/* Graph Area */}
      <div className="graph-container">
        <div className="graph">Graph Area 1</div>
      </div>

    </div>
  );
};

export default Health;
