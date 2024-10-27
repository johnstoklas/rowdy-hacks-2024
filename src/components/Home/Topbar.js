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
                to="/profile"
            >
            <div class="icon-wraper">
                <p> Profile </p>
                <FontAwesomeIcon icon={faUser} />
            </div>
            </NavLink>
        </nav>
    </div>

)

export default Topbar