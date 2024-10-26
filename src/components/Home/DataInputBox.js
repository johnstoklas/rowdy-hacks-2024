import React from 'react'
import InputHealth from './InputHealth'
import DatePicker from './DatePicker';

const DataInputBox = () => {
    const heartRateOptions = [
        {value: 1, label: '<140'},
        {value: 2, label: '140 - 150'},
        {value: 3, label: '150 - 160'},
        {value: 4, label: '160 - 170'},
        {value: 5, label: '170 - 180'},
        {value: 6, label: '190 - 200'},    
        {value: 7, label: '>200'},
    ]
    const stepCountOptions = [
        {value: 1, label: '<2,000'},
        {value: 2, label: '2,000 - 5,000'},
        {value: 3, label: '5,000 - 7,000'},
        {value: 4, label: '7,000 - 10,000'},
        {value: 5, label: '10,000 - 12,000'},
        {value: 6, label: '12,000 - 15,000'},    
        {value: 7, label: '>15,000'},        
    ];
    const calorieOptions = [
        {value: 1, label: '<1,800'},
        {value: 2, label: '1,800 - 2,000'},
        {value: 3, label: '2,000 - 2,200'},
        {value: 4, label: '2,200 - 2,400'},
        {value: 5, label: '2,400 - 2,600'},
        {value: 6, label: '2,600 - 2,800'},    
        {value: 7, label: '2,800 - 3,000'},   
        {value: 8, label: '>3,000'},        
    ];
    const waterOptions = [
        {value: 1, label: '<6'},
        {value: 2, label: '6 - 8'},
        {value: 3, label: '8 - 10'},
        {value: 4, label: '10 - 12'},
        {value: 5, label: '12 - 14'},
        {value: 6, label: '14 - 16'},    
        {value: 7, label: '16 - 18'},   
        {value: 8, label: '>18'},        
    ];
    const sleepOptions = [
        {value: 1, label: '<5'},
        {value: 2, label: '5 - 6'},
        {value: 3, label: '6 - 7'},
        {value: 4, label: '7 - 8'},
        {value: 5, label: '8 - 9'},
        {value: 6, label: '9 - 10'},    
        {value: 7, label: '10 - 11'},   
        {value: 8, label: '>11'},        
    ];
    const stressOptions = [
        {value: 1, label: 'Very Low'},
        {value: 2, label: 'Low'},
        {value: 3, label: 'Kind of Stressed'},
        {value: 4, label: 'Stressed'},
        {value: 5, label: 'Very Stressed'},        
    ];

  return (
    <>
    <div class="input-container">
        <InputHealth id="heartRate" inputUnit="BPM" options={heartRateOptions} />
        <InputHealth id="stepCount" inputUnit="STEPS" options={stepCountOptions} />
        <InputHealth id="calories" inputUnit="CALORIES" options={calorieOptions} />
        <InputHealth id="water" inputUnit="CUPS" options={waterOptions} />
        <InputHealth id="sleep" inputUnit="HOURS" options={sleepOptions} />
        <InputHealth id="stress" inputUnit="LEVEL" options={stressOptions} />
    </div>
    </>
  )
}

export default DataInputBox