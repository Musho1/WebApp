import { useSelector } from "react-redux";
import {BrowserRouter, Switch, Route, useHistory, Redirect,} from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import SingUp from './Components/SingUp/SingUp'
function Routs(){
    const {isActive}=useSelector((state=>state.login))
    const PrivateRoute=(props) => {
        if(isActive && props.path==="/photos"){
            return(<Route path={props.path} component={props.component} />)
        }
        else if(!isActive && props.path==="/profile"){
            return(<Route path={props.path} component={props.component} />)
        }
        else {
            return <Redirect  to="/"/>
        }
    }

    return <BrowserRouter>
        <Switch>
            <Route path='/profile' component={Profile}></Route>
            <Route path="/signup" component={SingUp}></Route>
            <Route path="/" component={Login}></Route>
        </Switch>
    </BrowserRouter>
}
export default Routs