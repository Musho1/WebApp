import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Photos from "./Components/Photos/Photos";
import Search from "./Components/Search/Search";
import Settings from "./Components/Settings/Settings";
import SingUp from './Components/SingUp/SingUp'
import UserAccaunt from "./Components/UserAccaunt/UserAccaunt";
import UserInfo from "./Components/UserAccaunt/UserInfo/Userinfo";
import UserPhot from "./Components/UserAccaunt/UserPhoto/UserPhoto";
function Routs(){
    return <BrowserRouter>
        <Switch>
            <Route path="/user/info/:uid" component={UserInfo}></Route>
            <Route path="/user/photo/:uid" component={UserPhot}></Route>
            <Route path="/user/:uid" component={UserAccaunt}/>
            <Route path="/search" component={Search}  ></Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path='/photos' component={Photos}></Route>
            <Route path='/profile' component={Home}></Route>
            <Route path="/signup" component={SingUp}></Route>
            <Route path="/" component={Login}></Route>
        </Switch>
    </BrowserRouter>
}
export default Routs