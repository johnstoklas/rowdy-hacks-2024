import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
//import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () =>{
    return (
        <div className='App'>
            <div className='page'>
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                &lt;body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;body&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;