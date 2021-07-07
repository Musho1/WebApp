import { useHistory } from 'react-router-dom'
import './NavBar.css'
function NavBar(){
    const history=useHistory()
    const LogOut=()=>{
        sessionStorage.removeItem('uid')
        history.push('/')

    }
    return <div className="NavBar">
        <nav className="NavBar">
            <ul>
                <li> <i className="fas fa-home"></i> Home</li>
            </ul>
            <ul>
                <li className='logOut' onClick={()=>LogOut()}>Log out <i className="fas fa-sign-out-alt"></i> </li>
            </ul>
        </nav>
    </div>
}
export default NavBar