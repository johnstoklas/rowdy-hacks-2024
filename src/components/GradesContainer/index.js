import React from 'react';
import './index.scss';
import SmallCircleGrades from '../SmallCircleGrades';

const getGradeForMetric = (value, metric) => {
  // Define ranges for each metric to assign letter grades
  if (metric === 'sleep') {
    if (value >= 8) return 'A+';
    if (value >= 7) return 'A';
    if (value >= 6) return 'B+';
    if (value >= 5) return 'B';
    return 'C';
  } else if (metric === 'heartRate') {
    if (value <= 60) return 'A+';
    if (value <= 70) return 'A';
    if (value <= 80) return 'B+';
    if (value <= 90) return 'B';
    return 'C';
  } else if (metric === 'steps') {
    if (value >= 10000) return 'A+';
    if (value >= 8000) return 'A';
    if (value >= 6000) return 'B+';
    if (value >= 4000) return 'B';
    return 'C';
  } else if (metric === 'calories') {
    if (value <= 2000) return 'A+';
    if (value <= 2500) return 'A';
    if (value <= 3000) return 'B+';
    if (value <= 3500) return 'B';
    return 'C';
  } else if (metric === 'water') {
    if (value >= 8) return 'A+';
    if (value >= 6) return 'A';
    if (value >= 4) return 'B+';
    return 'C';
  } else if (metric === 'stress') {
    if (value === 1) return 'A+';
    if (value <= 2) return 'A';
    if (value <= 3) return 'B+';
    if (value <= 4) return 'B';
    return 'C';
  }
};

const GradeContainer = ({ analysis }) => {
  // Check if analysis exists to avoid errors
  const {
    avgSleep = 0,
    avgHeartRate = 0,
    avgSteps = 0,
    stressLevel = 0,
    avgCalories = 0,  // Add more fields if needed
    avgWater = 0
  } = analysis?.analysis || {};

  // Convert values to grades using the getGradeForMetric function
  const sleepGrade = getGradeForMetric(avgSleep, 'sleep');
  const heartRateGrade = getGradeForMetric(avgHeartRate, 'heartRate');
  const stepsGrade = getGradeForMetric(avgSteps, 'steps');
  const stressGrade = getGradeForMetric(stressLevel, 'stress');
  const waterGrade = getGradeForMetric(avgWater, 'water');  // Placeholder logic for water
  const calorieGrade = getGradeForMetric(avgCalories, 'calories');  // Placeholder logic for calories

  return (
    <>
      <div className="grade-container"> 
        <div className="background-shape"></div>
        <div className="main-grade fade-in"> A+ </div>
        <div className="specific-grades fade-in">
          <SmallCircleGrades grade={heartRateGrade} label="Heart Rate" />
          <SmallCircleGrades grade={stepsGrade} label="Exercise" />
          <SmallCircleGrades grade={sleepGrade} label="Sleep" />
          <SmallCircleGrades grade={waterGrade} label="Water" />
          <SmallCircleGrades grade={calorieGrade} label="Calories" />
          <SmallCircleGrades grade={stressGrade} label="Stress" />
        </div>
      </div>
    </>
  );
};

export default GradeContainer;
