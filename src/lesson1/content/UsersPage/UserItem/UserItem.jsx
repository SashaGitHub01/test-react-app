import React from "react";
import { Link, useHistory } from "react-router-dom";
import './UserItem.scss';

import MyButton from '../../../../UI/MyButton/MyButton';
import defaultAvatar from '../../../../defaults/defaultAvatar.jpg';



const UserItem = ({ name, location, description, followed, avatar, id, onToggleFollow }) => {
   let history = useHistory();

   return (
      <div className="userspage-list__item user-item">
         <div className="user-item__row">
            <Link className="user-item__avatar" to={`/profile/${id}`}>
               <img src={avatar ? avatar : defaultAvatar} alt="avatar" />
            </Link>
            <div className="user-item__info">
               <div className="user-item__name" onClick={() => history.push(`/profile/${id}`)}>
                  {name}
               </div>
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

UserItem.defaultProps = {
   location: {
      country: 'USA',
      city: 'Boston'
   },
}