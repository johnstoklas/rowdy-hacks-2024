import './index.scss'
import Elements from '../Elements';
import { Outlet } from 'react-router-dom';

const Arrival = () => {
    return (
        <div className='App'>
            <Elements />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Arrival;