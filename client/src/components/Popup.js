import React from "react";
import './Popup.css'
function Popup(props){
    return (
        <div className="popup-box">
            <div className="popup-inner">
               <button className="close-btn" onClick={props.handleClose}>סגור</button> 
               {props.content}
            </div>
        </div>
    );

}
export default Popup