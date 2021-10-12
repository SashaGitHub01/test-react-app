import React from "react";
import './Profile.scss';

import MyPostsContainer from '../../../containers/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({ profile, myId, ...other }) => {

   let isOwner = profile?.userId === myId;

   return (
      <div className="profile">
         <div className="profile__row">
            <ProfileInfo {...other} profile={profile} isOwner={isOwner} />
            <MyPostsContainer profile={profile} isOwner={isOwner} />
         </div>
      </div>
   )
}

export default Profile;