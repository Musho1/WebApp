import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OpenCaruselPhotos } from '../../Redux/Action/CaruselAction'
import './Card.css'

function Card (props){

    const DatE=(date)=>{
        const today=Date.now()
        let one_day = 1000 * 60 * 60 * 24
        let one_hours=1000 * 60 * 60
        let one_minute=1000 *60 
        let Today=today-(+date)
        let day=Today/one_day
        let hours=Today/one_hours
        let minute=Today/one_minute
        if(day>=1 && day<31){
            return {date:Math.round(day),type:"Day"}
        }
        else if(day<1 && hours>=1){
            return {date:Math.round(hours),type:"Hours"}
        }
        else {
            return {date:Math.round(minute),type:'Minute'} 
        }
    }   
    let text=''
    const dispatch=useDispatch()
    const d=DatE(props.data.date)
    if(props.data.text.length>=20){
        text=props.data.text.slice(0,20)+"..."
    }
    return <div className="PhotoCard" onClick={()=>{dispatch(OpenCaruselPhotos(props.number))}}>
        <div className="CardPhotosDiv">
            <img src={props.data.img}></img>
        </div>
        <div className="CardPhotosText">
            <p>{text==='' ?props.data.text:text}</p>
        </div>
        <div className="CardPhotosdate">
            <p> {d.date} {d.type} ago</p>
        </div>
    </div>
}   
export default Card