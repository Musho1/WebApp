import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import SingUp from './Components/SingUp/SingUp'
function Routs(){
    return <BrowserRouter>
        <Switch>
            <Route path='/profile' component={Profile}></Route>
            <Route path="/signup" component={SingUp}></Route>
            <Route path="/" component={Login}></Route>
        </Switch>
    </BrowserRouter>
}
export default Routs