import React from "react";

const Popup = props => {
  return (
   
    <div>
      <div>
      {props.content}

      <div className="RespClose" onClick={props.handleClose} onKeyPress={props.handleClose}><div className="">Close</div></div>
      </div>
    </div>
   
  );
};
 
export default Popup;

