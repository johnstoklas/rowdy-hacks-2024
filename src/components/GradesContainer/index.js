import React from 'react'
import './index.scss';
import SmallCircleGrades from '../SmallCircleGrades';


const GradeContainer = () => {
  return (
    <div class="grade-container"> 
      <div className="main-grade"> A+ </div>
      <div className="specific-grades">
        <SmallCircleGrades grade="A+" label="Heart Rate"/>
        <SmallCircleGrades grade="B-" label="Exercise"/>
        <SmallCircleGrades grade="A-" label="Sleep"/>
        <SmallCircleGrades grade="B+" label="Water"/>
        <SmallCircleGrades grade="C-" label="Calories"/>
        <SmallCircleGrades grade="B" label="Stress"/>
      </div>
    </div>
  )
}

export default GradeContainer