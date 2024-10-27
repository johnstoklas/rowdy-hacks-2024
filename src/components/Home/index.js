import React, { useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import NavigateProfile from './NavigateProfile';
import Topbar from './Topbar';

const Home = () => {
  const [formData, setFormData] = useState({
    date: '',
    sleep: '',
    heartRate: '',
    stepCount: '',
    calories: '',
    water: '',
    stress: ''
  });

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <>
    <Topbar />
      <div className="home-page">        
        <div className="data-input-box fade-in">
            <div className="heading-section">
            <h1 className="heading1-text"> Enter Health Data for Analysis </h1>
            </div>
          <DatePicker updateFormData={updateFormData} />
          <DataInputBox updateFormData={updateFormData} />
          <SubmitButton formData={formData} />
        </div>
      </div>
    </>
  );
}

export default Home;
