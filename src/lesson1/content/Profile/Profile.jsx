import React, { Component } from "react";
import ReactDOM from 'react-dom';

import MyPosts from "./MyPosts/MyPosts";
import './Profile.scss';


const Profile = ({ posts }) => {
   return (
      <div className="profile">
         <div className="profile__row">
            <MyPosts posts={posts} />
         </div>
      </div>
   )
}

export default Profile;