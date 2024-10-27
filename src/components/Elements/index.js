import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouse, faEnvelope, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Elements = () => {
    return (
        <div className="modifiers-container">
            <nav>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="home-link" 
                    to="/home"
                >
                    <FontAwesomeIcon icon={faHouse} className="modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="address-link" 
                    to="/address"
                >
                    <FontAwesomeIcon icon={faAddressCard} className="modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="contact-link" 
                    to="/contact-link"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="question-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faQuestion} className="modifiers" />
                </NavLink>
            </nav>
        </div>
    );
}

export default Elements;
