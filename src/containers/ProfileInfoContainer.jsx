import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import ProfileInfo from "../components/Content/Profile/ProfileInfo/ProfileInfo";
import { getUserProfile, getStatus, updateStatus, uploadAvatar } from "../thunks/thunkCreator";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

const ProfileInfoContainer = ({ getUserProfile, getStatus, profile, ...other }) => {
   let match = useRouteMatch();

   useEffect(() => {
      getUserProfile(match.params.userId);
      getStatus(match.params.userId);
   }, [match.params.userId, profile]);

   return (
      <ProfileInfo {...other} profile={profile} />
   )
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
   }
}

let dispatchToProps = {
   getUserProfile,
   getStatus,
   updateStatus,
   uploadAvatar,
}

export default compose(
   connect(
      mapStateToProps,
      dispatchToProps,
   ),
   withAuthRedirect
)(ProfileInfoContainer);