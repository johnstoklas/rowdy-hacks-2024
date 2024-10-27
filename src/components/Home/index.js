import './index.scss';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import NavigateProfile from './NavigateProfile';

const Home = () => {
    return (
        <>
        <div className="home-page">
        <NavigateProfile />
        <div className="data-input-box">
            <div class="heading-section">
                <h1 class="heading1-text"> Enter Health Data for Analysis </h1>
            </div>
            <DatePicker />
            <DataInputBox />
            <SubmitButton />
        </div>
        </div>
        </>
    );
}

export default Home