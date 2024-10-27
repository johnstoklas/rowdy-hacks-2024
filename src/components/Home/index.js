import './index.scss';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
        <div className="container home-page">
            <div className='nav-bar'>
                <NavLink 
                    exact="true"
                    activeclassname="active"
                    to="/health"
                >
                    <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                </NavLink>
            </div>
        <div className="container home-page">
        <div className="data-input-box">
            <DatePicker />
            <DataInputBox />
            <SubmitButton />
        </div>
        </div>
        </div>
        <Loader type="ball-pulse" />
        </>
    );
}

export default Home