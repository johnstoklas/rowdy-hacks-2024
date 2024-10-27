import React from 'react';
import './index.scss';
import SmallCircleGrades from '../SmallCircleGrades';

const getGradeForMetric = (value, metric) => {
  // Define ranges for each metric to assign letter grades
  console.log(metric);
  console.log(value);
  if (metric === 'sleep') {
    if (value >= 8) return 'A+';
    if (value >= 7) return 'A';
    if (value >= 6) return 'B+';
    if (value >= 5) return 'B';
    return 'C';
  } else if (metric === 'heartRate') {
    if (value <= 150) return 'A+';
    if (value <= 160) return 'A';
    if (value <= 170) return 'B+';
    if (value <= 180) return 'B';
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
    if (value > 1 && value < 2) return 'A+';
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
    avgCalories = 0,  
    avgWater = 0
  } = analysis?.analysis || {};

  // Convert values to grades using the getGradeForMetric function
  const sleepGrade = getGradeForMetric(avgSleep, 'sleep');
  const heartRateGrade = getGradeForMetric(avgHeartRate, 'heartRate');
  const stepsGrade = getGradeForMetric(avgSteps, 'steps');
  const stressGrade = getGradeForMetric(stressLevel, 'stress');
  const waterGrade = getGradeForMetric(avgWater, 'water');  // Placeholder logic for water
  const calorieGrade = getGradeForMetric(avgCalories, 'calories');  // Placeholder logic for calories

  const list = [
    sleepGrade,
    heartRateGrade,
    stepsGrade,
    stressGrade,
    waterGrade,
    calorieGrade
  ]

  // Initialize count
let count = 0;

// Function to calculate the total score from the list of grades
const overall = (list) => {
  list.forEach((key) => {
    if (key === 'A+') {
      count += 5;
    } else if (key === 'A') {
      count += 4;
    } else if (key === 'B+') {
      count += 3;
    } else if (key === 'B') {
      count += 2;
    } else if (key === 'C') {
      count += 1;
    }
  });
};

overall(list);

// Function to convert the total count to an overall grade
const overallGrade = (count) => {
  const average = count / 6;  // Divide the total by the number of subjects
  if (average < 1.5) {
    return 'C';
  } else if (average < 2.5) {
    return 'B';
  } else if (average < 3.5) {
    return 'B+';
  } else if (average < 4.5) {
    return 'A';
  } else {
    return 'A+';
  }
};

const grade = overallGrade(count);

  return (
      <div className="grade-container fade-in"> 
        <div>
            <h1> Overall Grade </h1>
            <div className="main-grade"> {grade} </div>
        </div>
        <div className="specific-grades">
          <SmallCircleGrades grade={heartRateGrade} label="Heart Rate" />
          <SmallCircleGrades grade={stepsGrade} label="Exercise" />
          <SmallCircleGrades grade={sleepGrade} label="Sleep" />
          <SmallCircleGrades grade={waterGrade} label="Water" />
          <SmallCircleGrades grade={calorieGrade} label="Calories" />
          <SmallCircleGrades grade={stressGrade} label="Stress" />
      </div>
    </div>
  );
};

export default GradeContainer;
