import React from 'react';
import './index.scss';

const Health = () => {
  return (
    <div className="container">
      {/* Upper Left Quadrant */}
      <div className="upper-left">
        <textarea className="scrollable-text" placeholder="Enter your paragraph here..."></textarea>
      </div>

      {/* Upper Right Quadrant */}
      <div className="upper-right">
        <div className="upper-right-box">
          <p>This is the upper box.</p>
        </div>
        <div className="lower-quadrant">
          <div className="small-box">1</div>
          <div className="small-box">2</div>
          <div className="small-box">3</div>
          <div className="small-box">4</div>
          <div className="small-box">5</div>
          <div className="small-box">6</div>
        </div>
      </div>

      {/* Lower Left Quadrant */}
      <div className="lower-left">
        <div className="graph">Graph Area 1</div>
      </div>

    </div>
  );
};

export default Health;
