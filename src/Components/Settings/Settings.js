import { useEffect, useState } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import { SevNewSettings } from "../../Redux/Action/SettingsAction"
import Profile from "../Profile/Profile"
import "./Settings.css"

function Settings (){
    const {user}=useSelector((state)=>state.user)

    const [usernewdate,setusernewdate]=useState({name:user.name,surname:user.surname,date:user.date,mail:user.mail,password:user.password,gender:user.gender})
    const [error,seterror]=useState({errorName:'',errorSurname:'',errorMail:'',errorPassword:'',errorData:'',errorGender:''})
    const dispatch=useDispatch()
    const {settingLoadin}=useSelector((state)=>state.user)

    const ValidateEmail=(input)=> {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.match(validRegex)) {
          return true;
        } else {
          return false;
        }
      }

    const SendUserNewData=(user)=>{
        let sent=true
        if(user.name===''){
            error.errorName='Plice enter your name'
            seterror({...error,errorName:'Plice enter your name'})

        }
        else {
            error.errorName=''
            seterror({...error,errorName:''})
        }


        if(user.surname===''){
            error.errorSurname='Plice enter your surname'
            seterror({...error,errorSurname:'Plice enter your surname'})
        }
        else{
            error.errorSurname=''
            seterror({...error,errorSurname:''})
        }

        if(!ValidateEmail(user.mail)){
            error.errorMail="Invalid email address"
            seterror({...error,errorMail:'Invalid email address'})
        }
        else {
            error.errorMail=''
            seterror({...error,errorMail:''})
        }

        if(user.password===""){
            error.errorPassword='Plice enter your password'
            seterror({...error,errorPassword:'Plice enter your password'})
        }
        else if(user.password.length<6){
            error.errorPassword='password should be minimum 6 characters'
            seterror({...error,errorPassword:'password should be minimum 6 characters'})
        }
        else{
            error.errorPassword=''
            seterror({...error,errorPassword:''})
        }


        if(user.date===''){
            error.errorData="Plice enter your date"
            seterror({...error,errorData:'Plice enter your date'})
        }
        else{
            error.errorData=''
            seterror({...error,errorData:''})
        }

        Object.values(error).forEach((elm)=>{
            if(elm!==''){
                sent=false
            }
        })

        if(sent){
            dispatch(SevNewSettings(usernewdate))
        }
    }
    useEffect(()=>{
        setusernewdate(user)
    },[user])
    return <Profile >
        <div className="settings">
            <div>
                <h1 className="titleSettings"> Settings</h1>
            </div>
            <div className="settingsDiv">
                <div className="lableinputdiv">
                    <label htmlFor="name">Name</label>
                    <input value={usernewdate.name} id="name" onChange={(e)=>setusernewdate({...usernewdate,name:e.target.value})}></input>
                    <p className="errormesing">{error.errorName}</p>

                </div>
                <div className="lableinputdiv">
                    <label htmlFor="Surname">Surname</label>
                    <input  value={usernewdate.surname} id="Surname" onChange={(e)=>setusernewdate({...usernewdate,surname:e.target.value})}></input>
                    <p className="errormesing">{error.errorSurname}</p>

                </div>
                <div className="lableinputdiv">
                    <label htmlFor="Data">Date</label>
                    <input type="date" value={usernewdate.date}  id="Data" onChange={(e)=>setusernewdate({...usernewdate,date:e.target.value})}></input>
                    <p className="errormesing">{error.errorData}</p>

                </div>
                <div className="lableinputdiv">
                    <label htmlFor="Mail">Mail</label>
                    <input value={usernewdate.mail} disabled id="Mail" onChange={(e)=>setusernewdate({...usernewdate,mail:e.target.value})}></input>
                    <p className="errormesing">{error.errorMail}</p>

                </div>
                <div className="lableinputdiv">
                    <label htmlFor="Password">Password</label>
                    <input value={usernewdate.password} type="password" id="Password" onChange={(e)=>setusernewdate({...usernewdate,password:e.target.value})}></input>
                    <p className="errormesing">{error.errorPassword}</p>

                </div>
                <div className="lableinputdiv ">
                    <label htmlFor="da">Gender</label>
                    <div className="GenderDivSettings">
                        <div>
                            <i className="fas fa-male"></i>
                            <label>male</label>
                            <input  value='male' checked={usernewdate.gender==='male'} type="checkbox" id="da" onChange={(e)=>{setusernewdate({...usernewdate,gender:'male'})}} ></input>
                        </div>
                        <div>
                            <i className="fas fa-female"></i>
                            <label>female</label>
                            <input value='female' checked={usernewdate.gender==='female'} type="checkbox" id="da" onChange={(e)=>{setusernewdate({...usernewdate,gender:'female'})}}></input>
                        </div>
                    </div>
                </div>
                <div className="SettingsButton">
                    <button disabled={settingLoadin} onClick={()=>SendUserNewData(usernewdate)}>
                        Save
                        {settingLoadin && <div className="loader">Loading...</div>}
                    </button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </Profile>
}
export default Settings