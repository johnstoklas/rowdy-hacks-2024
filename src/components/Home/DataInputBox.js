import React from 'react';
import InputHealth from './InputHealth';

const DataInputBox = ({ updateFormData }) => {
  const handleInputChange = (key, value) => {
    updateFormData(key, value);  
  };

  const heartRateOptions = [
    { value: 80, label: '<140' },
    { value: 140, label: '140 - 150' },
    { value: 150, label: '150 - 160' },
    { value: 160, label: '160 - 170' },
    { value: 170, label: '170 - 180' },
    { value: 190, label: '190 - 200' },
    { value: 200, label: '>200' }
  ];
  const stepCountOptions = [
    { value: 2000, label: '<2,000' },
    { value: 5000, label: '2,000 - 5,000' },
    { value: 7000, label: '5,000 - 7,000' },
    { value: 10000, label: '7,000 - 10,000' },
    { value: 12000, label: '10,000 - 12,000' },
    { value: 15000, label: '12,000 - 15,000' },
    { value: 15001, label: '>15,000' }
  ];
  const calorieOptions = [
    { value: 1800, label: '<1,800' },
    { value: 2000, label: '1,800 - 2,000' },
    { value: 2200, label: '2,000 - 2,200' },
    { value: 2400, label: '2,200 - 2,400' },
    { value: 2600, label: '2,400 - 2,600' },
    { value: 2800, label: '2,600 - 2,800' },
    { value: 3000, label: '2,800 - 3,000' },
    { value: 3001, label: '>3,000' }
  ];
  const waterOptions = [
    { value: 6, label: '<6' },
    { value: 8, label: '6 - 8' },
    { value: 10, label: '8 - 10' },
    { value: 12, label: '10 - 12' },
    { value: 14, label: '12 - 14' },
    { value: 16, label: '14 - 16' },
    { value: 18, label: '>18' }
  ];
  const sleepOptions = [
    { value: 5, label: '<5' },
    { value: 6, label: '5 - 6' },
    { value: 7, label: '6 - 7' },
    { value: 8, label: '7 - 8' },
    { value: 9, label: '8 - 9' },
    { value: 10, label: '9 - 10' },
    { value: 11, label: '>11' }
  ];
  const stressOptions = [
    { value: 1, label: 'Very Low' },
    { value: 2, label: 'Low' },
    { value: 3, label: 'Kind of Stressed' },
    { value: 4, label: 'Stressed' },
    { value: 5, label: 'Very Stressed' }
  ];

  return (
    <div className="input-container">
      <InputHealth id="heartRate" inputUnit="Average BPM" options={heartRateOptions} onChange={handleInputChange} />
      <InputHealth id="stepCount" inputUnit="Steps" options={stepCountOptions} onChange={handleInputChange} />
      <InputHealth id="calories" inputUnit="Calories" options={calorieOptions} onChange={handleInputChange} />
      <InputHealth id="water" inputUnit="Cups of Water" options={waterOptions} onChange={handleInputChange} />
      <InputHealth id="sleep" inputUnit="Hours of Sleep" options={sleepOptions} onChange={handleInputChange} />
      <InputHealth id="stress" inputUnit="Level of Stress" options={stressOptions} onChange={handleInputChange} />
    </div>
  );
};

export default DataInputBox;
