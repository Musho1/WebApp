import './SubscribeCard.css'
import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'
function SubscribeCard(props){
    let user=[]
    props.user.forEach((elm)=>{
        if(elm.photos!==undefined){
            Object.values(elm.photos).forEach(elm2=>{
                if(elm2.img===props.data.img){
                    user=elm
                }
            })
        }
        
    })
    return <div className="subscribe">
        <div className="subscribedata">
            <div className="subscribeuserdata">
                {!user.avatar && user.gender==='male' &&
                <img src={male}></img>

                }
                {!user.avatar && user.gender==='female' &&
                    <img src={female}></img>
                }
                {user.avatar && 
                     <img src={user.avatar}></img>
                }   
                <p>{user.name}</p><p>{user.surname}</p>
            </div>
            <div>
                <p>{new Date(props.data.date).toDateString().toString()}</p>
            </div>
        </div>
        <div className="subscribepost">
            <img src={props.data.img}></img>
        </div>
        <div className="subscribelike">
            <div><i className="far fa-heart"></i></div>
            <div><i className="far fa-comment"></i></div>
            <div><i className="far fa-bookmark"></i></div>
        </div>
    </div>
}
export default SubscribeCard