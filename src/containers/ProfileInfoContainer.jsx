import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import ProfileInfo from "../lesson1/content/Profile/ProfileInfo/ProfileInfo";
import { getUserProfile } from "../thunks/thunkCreator";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

const ProfileInfoContainer = ({ getUserProfile, isAuth, ...other }) => {
   let match = useRouteMatch();

   useEffect(() => {
      getUserProfile(match.params.userId);
   }, [match.params.userId]);

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
   getUserProfile,
}

export default compose(
   connect(
      mapStateToProps,
      dispatchToProps,
   ),
   withAuthRedirect
)(ProfileInfoContainer);