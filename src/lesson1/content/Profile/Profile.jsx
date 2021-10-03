import React from "react";
import './Profile.scss';

import ProfileInfoContainer from "../../../containers/ProfileInfoContainer";
import MyPostsContainer from '../../../containers/MyPostsContainer';


const Profile = () => {
   return (
      <div className="profile">
         <div className="profile__row">
            <ProfileInfoContainer />
            <MyPostsContainer />
         </div>
      </div>
   )
}

export default Profile;