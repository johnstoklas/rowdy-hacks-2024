import './index.scss';
import { useState } from 'react';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import HealthModifiers from './HealthModifiers';

const Home = () => {
    return (
        <>
        <div className="container home-page">
        <HealthModifiers /> 
        <DataInputBox />
        </div>
        <Loader type="ball-pulse" />
        </>
    );
}

export default Home