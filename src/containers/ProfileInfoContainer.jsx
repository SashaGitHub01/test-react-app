import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import ProfileInfo from "../lesson1/content/Profile/ProfileInfo/ProfileInfo";
import { setUserProfileAtionCreator } from "../actions/actionCreator";

const ProfileInfoContainer = ({ setUserProfile, ...other }) => {
   let match = useRouteMatch();

   useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${match.params.userId}`)
         .then(response => setUserProfile(response.data))
   }, []);

   return (
      <ProfileInfo {...other} />
   )
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   }
}

let dispatchToProps = {
   setUserProfile: setUserProfileAtionCreator,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(ProfileInfoContainer);