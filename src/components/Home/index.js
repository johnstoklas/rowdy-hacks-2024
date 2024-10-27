import './index.scss';
import Loader from 'react-loaders';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';

const Home = () => {
    return (
        <>
        <div className="container home-page">
        <div className="data-input-box">
            <DatePicker />
            <DataInputBox />
            <SubmitButton />
        </div>
        </div>
        <Loader type="ball-pulse" />
        </>
    );
}

export default Home