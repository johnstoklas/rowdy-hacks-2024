import './index.scss';
import DataInputBox from './DataInputBox';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import Topbar from './Topbar';

const Home = () => {
    return (
        <>
        <Topbar />
        <div className="home-page">
        <div className="data-input-box fade-in">
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