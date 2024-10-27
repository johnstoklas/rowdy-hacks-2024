import React, { useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import NavigateProfile from './NavigateProfile';

const Home = () => {
  // State for form data
  const [formData, setFormData] = useState({
    date: '',
    sleep: '',
    heartRate: '',
    stepCount: '',
    calories: '',
    water: '',
    stress: ''
  });

  // Function to update form data
  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="container home-page">
        <NavigateProfile />
        <div className="heading-section">
          <h1 className="heading1-text">Select a Date</h1>
          <h4 className="heading2-text">Enter your Health Data for Analysis</h4>
        </div>
        <div className="data-input-box">
          {/* Pass down the updateFormData function to update the date and other health data */}
          <DatePicker updateFormData={updateFormData} />
          <DataInputBox updateFormData={updateFormData} />
          <SubmitButton formData={formData} />
        </div>
      </div>
    </>
  );
}

export default Home;
