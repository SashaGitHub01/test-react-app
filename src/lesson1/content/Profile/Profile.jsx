import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import './Profile.scss';


const Profile = ({ state, dispatch }) => {
   return (
      <div className="profile">
         <div className="profile__row">
            <MyPosts state={state}
               dispatch={dispatch}
            />
         </div>
      </div>
   )
}

export default Profile;