import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const NavigateProfile = () => {
  return (
    <div className='nav-bar'>
        <NavLink 
            exact="true"
            activeclassname="active"
            to="/health"
        >
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </NavLink>
    </div>
  )
}

export default NavigateProfile