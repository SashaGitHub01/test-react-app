import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MyPosts from "./myPosts/MyPosts";
import './profile.scss';


const Profile = (props) => {
   return (
      <div className="profile">
         <div className="profile__row">
            <MyPosts />
         </div>
      </div>
   )
}

export default Profile;