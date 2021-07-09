import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar(){
    const history=useHistory()
    const dispatch=useDispatch()
    const LogOut=()=>{
        sessionStorage.removeItem('uid')
        history.push('/')

    }

    return <div className="NavBar">
        <nav className="NavBar">
            <ul>
                <li> <i className="fas fa-home"></i> Home</li>
                <li>
                    <Link className="link" to='/photos'>
                        <i className="far fa-image"></i> Photos
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className="link" to="search">
                        <i className="fas fa-search"></i> Search
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/settings">
                        <i className="fas fa-cogs"></i> Settings
                    </Link>
                </li>
                <li className='logOut' onClick={()=>LogOut()}>Log out <i className="fas fa-sign-out-alt"></i> </li>
            </ul>
        </nav>
    </div>
}
export default NavBar