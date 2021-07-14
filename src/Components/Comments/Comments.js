import firebase from "firebase"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
const db = firebase.firestore();
const add=()=>{
    db.collection("comments").add({
        text: "ss",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
}
function Comments (){
  db.collection("comments").onSnapshot((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        console.log(doc.data())
    })
  })
    return <div>
        <textarea></textarea>
        <button onClick={()=>add()}>OO</button>
    </div>
}
export default Comments  