import React from 'react'
import './index.scss';

const SmallCircleGrades = ({grade, label}) => {
  return (
    <div className="grade-container">
      <div class="nav-bar">
        <div className="small-circle-text">  {label} </div>
        <div className="small-circle"> {grade} </div>
      </div>
    </div>
  )
}

export default SmallCircleGrades