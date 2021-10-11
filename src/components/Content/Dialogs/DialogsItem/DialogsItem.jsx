import React from "react";
import { Link } from 'react-router-dom';
import './DialogsItem.scss';


const DialogsItem = ({ name, surname, avatar, id }) => {
   return (
      <Link className='dialogs__item dialog-item' to={`dialogs/${id}`}>
         <div className="dialog-item__img">
            <img src={avatar ? avatar : 'images/logo.svg'} alt="avatar" />
         </div>
         <div className="dialog-item__name">{`${name} ${surname}`}</div>
      </Link>
   )
}


export default DialogsItem;