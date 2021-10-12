import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import Profile from "../components/Content/Profile/Profile";
import {
   getUserProfile, getStatus, updateStatus,
   uploadAvatar, uploadProfileData
} from "../thunks/thunkCreator";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = ({ getUserProfile, getStatus, profile, ...other }) => {
   let match = useRouteMatch();

   useEffect(() => {
      getUserProfile(match.params.userId);
      getStatus(match.params.userId);
   }, [match.params.userId, profile]);

   return (
      <Profile {...other} profile={profile} />
   )
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      myId: state.auth.userId,
   }
}

let dispatchToProps = {
   getUserProfile,
   getStatus,
   updateStatus,
   uploadAvatar,
   uploadProfileData,
}

export default compose(
   connect(
      mapStateToProps,
      dispatchToProps,
   ),
   withAuthRedirect
)(ProfileContainer);