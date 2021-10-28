import React from "react";
import './UsersList.scss';

import UserItemContainer from "../../../../containers/UserItemContainer";
import Loader from "../../../Loader/Loader";

const UsersList = ({ users, isLoading }) => {

   return (
      isLoading
         ? <Loader />
         : <div className="userspage__list userspage-list">
            {
               users && users.map(({ name, status, id, location, followed, photos }) => (
                  <UserItemContainer key={id}
                     id={id}
                     description={status}
                     name={name}
                     location={location}
                     avatar={photos.small}
                     followed={followed}
                  />
               ))
            }
         </div>
   )
}

export default UsersList;