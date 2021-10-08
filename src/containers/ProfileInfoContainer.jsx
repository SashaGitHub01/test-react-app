import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import ProfileInfo from "../lesson1/content/Profile/ProfileInfo/ProfileInfo";
import { getUserProfile, getStatus, updateStatus } from "../thunks/thunkCreator";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

const ProfileInfoContainer = ({ getUserProfile, getStatus, isAuth, ...other }) => {
   let match = useRouteMatch();

   useEffect(() => {
      getUserProfile(match.params.userId);
      getStatus(match.params.userId);
   }, [match.params.userId]);

   return (
      <ProfileInfo {...other} />
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
}

export default compose(
   connect(
      mapStateToProps,
      dispatchToProps,
   ),
   withAuthRedirect
)(ProfileInfoContainer);