import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Dialog.scss';


const Dialog = ({ name, surname, avatar }) => {
   return (
      <div className="dialogs__item dialog-item">
         <div className="dialog-item__img">
            <img src={avatar ? avatar : 'images/logo.svg'} alt="avatar" />
         </div>
         <div className="dialog-item__name">{`${name} ${surname}`}</div>
      </div>
   )
}


export default Dialog;