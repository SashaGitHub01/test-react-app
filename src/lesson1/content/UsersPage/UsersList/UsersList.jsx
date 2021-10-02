import React from "react";
import './UsersList.scss';

import UserItemContainer from "../../../../containers/UserItemContainer";

const UsersList = ({ users }) => {
   return (
      <div className="userspage__list userspage-list">
         {
            users.map(({ fullName, description, id, location, followed, avatar }) => (
               <UserItemContainer key={id}
                  id={id}
                  description={description}
                  name={fullName}
                  location={location}
                  avatar={avatar}
                  followed={followed}
               />
            ))
         }
      </div>
   )
}

export default UsersList;