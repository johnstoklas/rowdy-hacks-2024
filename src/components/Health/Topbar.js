import './indexes.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink
                exact="true"
                activeclassname="active"
                to="/input"
            >
            <FontAwesomeIcon icon={faUser} />
            </NavLink>
        </nav>
    </div>

)

export default Topbar