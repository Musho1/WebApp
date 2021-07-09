import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import Photos from "./Components/Photos/Photos";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";
import Settings from "./Components/Settings/Settings";
import SingUp from './Components/SingUp/SingUp'
function Routs(){
    return <BrowserRouter>
        <Switch>
            <Route path="/search" component={Search}  ></Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path='/photos' component={Photos}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path="/signup" component={SingUp}></Route>
            <Route path="/" component={Login}></Route>
            
        </Switch>
    </BrowserRouter>
}
export default Routs