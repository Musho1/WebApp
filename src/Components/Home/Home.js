import Profile from "../Profile/Profile"
import './Home.css'
function Home(){
    return <Profile classname="Home">
        <div className="texAreahome">
            <textarea placeholder="text..."></textarea>
            <div className="textAreaHomebutton">
                <button>Publick</button>
            </div>
        </div>
    </Profile>
}   
export default Home