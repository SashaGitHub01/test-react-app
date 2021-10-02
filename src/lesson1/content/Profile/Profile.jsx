import React from "react";

import MyPostsContainer from '../../../containers/MyPostsContainer';
import './Profile.scss';


const Profile = () => {
   return (
      <div className="profile">
         <div className="profile__row">
            <MyPostsContainer />
         </div>
      </div>
   )
}

export default Profile;