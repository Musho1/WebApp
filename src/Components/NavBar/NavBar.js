import './NavBar.css'
function NavBar(){
    return <div className="NavBar">
        <nav className="NavBar">
            <ul>
                <li> <i className="fas fa-home"></i> Home</li>
            </ul>
            <ul>
                <li className='logOut'>Log out <i className="fas fa-sign-out-alt"></i> </li>
            </ul>
        </nav>
    </div>
}
export default NavBar