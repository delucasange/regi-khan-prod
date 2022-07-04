import React from "react";

const Popup = props => {
  return (
   
    <div className="popupbox">
      <div className="box">
      {props.content}

      <div className="fixed bottom-0 z-40 w-full md:hidden" onClick={props.handleClose} onKeyPress={props.handleClose}><div className="">CLOSE</div></div>
      </div>
    </div>
   
  );
};
 
export default Popup;

