import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPersonWalking, faHeart, faCarrot, faGlassWater, faFaceGrimace, faCalendar} from '@fortawesome/free-solid-svg-icons'


const HealthModifiers = () => {
  return (
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
  )
}

export default HealthModifiers