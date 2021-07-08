import './SuccesPopUp.css'

function SuccesPopUp(props){
    return <div className="SuccesPopUp">
        <i className="far fa-check-circle SuccesPopUpicon" ></i>
        <p>{props.text}</p>
    </div>
}
export default SuccesPopUp