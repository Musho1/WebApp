import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SingUpUser } from '../../Redux/Action/SingUpAction'
import './SingUp.css'
function SingUp(){
    const [user,setuser]=useState({name:'',surname:'',mail:'',password:"",date:'',gender:''})
    const [error,seterror]=useState({errorName:'',errorSurname:'',errorMail:'',errorPassword:'',errorData:'',errorGender:''})
    const [male,setmale]=useState(false)
    const [female,setfemale]=useState(false)
    const dispath=useDispatch()

    const {loading}=useSelector(state=>state.singup)
    const Gender=(gender,value)=>{
        if(value==='female' && male){
            setmale(false)
        }
        else if(value==='male' && female){
            setfemale(false)
        }
        if(value==='male'){
            setmale(!gender)
        }
        else {
            setfemale(!gender)
        }

        
    }

    const ValidateEmail=(input)=> {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.match(validRegex)) {
            //document.form1.text1.focus();
          return true;
        } else {
          return false;
        }
      }

    const SaveUser=()=>{
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

        if(!male && !female){
            error.errorGender="Plice select your gender"
            seterror({...error,errorGender:'Plice select your gender'})
        }
        else{
            error.errorGender=''
            seterror({...error,errorGender:''})

        }

        if(male){
            user.gender='male'
            setuser({...user,gender:'male'})
        }
        else if(female){
            user.gender='female'
            setuser({...user,gender:'female'})

        }


        Object.values(error).forEach((elm)=>{
            if(elm!==''){
                sent=false
            }
        })

        if(sent){
            dispath(SingUpUser(user))
        }
    }

    return <div className="SingUpBody">
        <div  className="SingUp">  
            <div className="SingUpTitle">
                <h1>Sing Up</h1>
            </div>
            <div className="inputdiv">
                <i className="far fa-user"></i>
                <input value={user.name} placeholder='name' type="text" onChange={(e)=>{setuser({...user,name:e.target.value})}}></input>
                <p className="errormesing">{error.errorName}</p>
            </div>
            <div className="inputdiv">
                <i className="far fa-user"></i>
                <input value={user.surname} placeholder='surname' type="text" onChange={(e)=>{setuser({...user,surname:e.target.value})}}></input>
                <p className="errormesing">{error.errorSurname}</p>
            </div>
            <div className="inputdiv">
                <i className="far fa-envelope"></i>
                <input value={user.mail} placeholder='mail' type="Mail" onChange={(e)=>setuser({...user,mail:e.target.value})}></input>
                <p className="errormesing">{error.errorMail}</p>
            </div>
            <div className="inputdiv">
                <i className="fas fa-lock"></i>
                <input value={user.password} placeholder='password' type="password" onChange={(e)=>setuser({...user,password:e.target.value})}></input>
                <p className="errormesing">{error.errorPassword}</p>
            </div>
            <div className="datadiv"> 
                <i className="far fa-calendar-alt"></i>  
                <input value={user.date} type="date" id="start" onChange={(e)=>setuser({...user,date:e.target.value})}></input>
                <p className="errormesing">{error.errorData}</p>
            </div>
            <div className="checkboxDiv">  
                <div className="checkboxdiv"> 
                    <div>
                        <i className="fas fa-male"></i>
                        <label>male</label>
                        <input type="checkbox" value='male' checked={male} onChange={(e)=>{Gender(male,'male')}}></input>
                        
                    </div>
                    <div>
                        <i className="fas fa-female"></i>
                        <label>female</label>
                        <input type="checkbox" value='female' checked={female}  onChange={(e)=>{Gender(female,'female')}}></input>
                    </div>
                </div>
                <p className="errormesing">{error.errorGender}</p>
            </div>
            <div className="buttondiv">
                <button disabled={loading} onClick={()=>SaveUser()}>Save   {loading && <div className="loader">Loading...</div> }</button>
            </div>
            <div className="LinkSingupDiv">
                <Link className="LinkSingup" to="/"><i class="fas fa-arrow-left"></i> Aleredy have an account</Link>
            </div>
        </div>
    </div>
}
export default SingUp