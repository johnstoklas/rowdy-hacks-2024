import React from 'react'
import './index.scss';

const SmallCircleGrades = ({grade, label}) => {
  return (
    <div class="small-circle-container">
      <div className="small-circle-text">  {label} </div>
      <div className="small-circle"> {grade} </div>
    </div>
  )
}

export default SmallCircleGrades