import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Dialog.scss';


const Dialog = (props) => (
   <div className="dialog-messages dialog-m">
      <div className="dialog-m__column">
         <div className="dialog-m__title">Name</div>
         <div className="dialog-m__messages messages__row">
            <div className="messages__element">Hi</div>
            <div className="messages__element">Hi!!!</div>
         </div>
      </div>
   </div>
)

export default Dialog;