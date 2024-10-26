import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPersonWalking, faHeart, faCarrot, faGlassWater, faFaceGrimace} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
        <div className="container home-page">
            <div class="health-modifiers-container">
                <nav>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="heart-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHeart} class="health-modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="walking-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faPersonWalking} class="health-modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="food-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faCarrot} class="health-modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="hydration-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faGlassWater} class="health-modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="sleep-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faBed} class="health-modifiers" />
                </NavLink>
                <NavLink
                    exact="true" 
                    activeclassname="active" 
                    className="-link" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faFaceGrimace} class="health-modifiers" />
                </NavLink>
                </nav>
            </div>
            <div class="data-input-box">


            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home