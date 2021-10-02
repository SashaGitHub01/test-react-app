import React from "react";
import './UserItem.scss';

import MyButton from '../../../../UI/MyButton/MyButton';


const UserItem = ({ name, location, description, followed, avatar, id, onToggleFollow }) => {
   return (
      <div className="userspage-list__item user-item">
         <div className="user-item__row">
            <div className="user-item__avatar">
               <img src={avatar} alt="avatar" />
            </div>
            <div className="user-item__info">
               <div className="user-item__name">{name}</div>
               <div className="user-item__location">
                  <span>{location.country}, </span>
                  <span>{location.city}</span>
               </div>
               <div className="user-item__description">{description}</div>
            </div>
            <div className="user-item__buttons">
               <MyButton onClick={() => onToggleFollow(id)}
                  className={followed ? 'user-item__button active' : 'user-item__button'}>
                  {followed
                     ? 'Отписаться'
                     : 'Подписаться'
                  }
               </MyButton>
               <MyButton className='user-item__button'>Написать сообщение</MyButton>
            </div>
         </div>
      </div >
   )
}

export default UserItem;