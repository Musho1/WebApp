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
                <li> 
                    <Link className="link" to="/profile">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
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



            <ul className="navMobile">
                <li>
                    <Link to="/profile"><i className="fas fa-home"></i></Link>
                </li>
                <li>
                    <Link to="/photos"><i className="far fa-image"></i></Link>
                </li>
                <li>
                    <Link to="settings"><i className="fas fa-cogs"></i></Link>
                </li>
                {/* <li>
                    <Link><i class="far fa-comment"></i></Link>
                </li> */}
            </ul>
        </nav>
    </div>
}
export default NavBar