import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseCaruslePhotos } from '../../Redux/Action/CaruselAction'
import './Carusel.css'

function Carusel (props){
    const dispatch=useDispatch()
    const {Activeindex}=useSelector((state)=>state.carusel)
    const [index,setindex]=useState(Activeindex)
  
        let temp=[]
        Object.values(props.img).forEach((elm)=>{
            temp.push(elm)
        })
    const setindexL=(index)=>{
        
        if(index!==0){
            setindex(index-1)
            return 0
        }
        if(index===0){
            setindex(temp.length-1)
            return 0
        }
    }
    const setindexR=(index)=>{
        if(index!==temp.length-1){
            setindex(index+1)
        }
        if(index===temp.length-1){
            setindex(0)
        }
    }
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
    let d=DatE(temp[index].date)
    let time=new Date(temp[index].date).toDateString().toString()
    return <div className="carusel">
            <p className="closeCarusle" onClick={()=>dispatch(CloseCaruslePhotos())}>x</p>
            <button onClick={()=>setindexL(index)}><i className="fas fa-angle-left "></i></button>
                <div className="caruselitem">
                    <div className="Caruselitemimg">
                        <img src={temp[index].img}></img>
                    </div>
                    <div className="caruselTextDiv">
                        <div className="caruselText">
                           <div className="Likecomment">
                               <div>
                                    <i className="far fa-heart"></i>
                               </div>
                               <div>
                                    <i className="far fa-comment"></i>
                               </div>
                               <div>
                                    <i className="far fa-bookmark"></i>
                               </div>
                           </div>
                            <p className="caruselTextp">{temp[index].text}</p>
                            <div className="caruselTextData">
                                <p>{time}</p>
                                <p> {d.date} {d.type} ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            <button onClick={()=>setindexR(index)}><i className="fas fa-angle-right button1"></i></button>
    </div>
} 
export default Carusel