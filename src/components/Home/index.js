import './index.scss';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import NavigateProfile from './NavigateProfile';

const Home = () => {
    return (
        <>
        <div className="container home-page">
        <NavigateProfile />
        <div class="heading-section">
            <h1 class="heading1-text"> Select a Date </h1>
            <h4 class="heading2-text"> Enter your Health Data for Analysis </h4>
        </div>
        <div className="data-input-box">
            <DatePicker />
            <DataInputBox />
            <SubmitButton />
        </div>
        </div>
        </>
    );
}

export default Home