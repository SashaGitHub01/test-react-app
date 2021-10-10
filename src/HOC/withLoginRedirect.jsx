import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToProps = state => {
   return {
      isAuth: state.auth.isAuth,
      id: state.auth.userId,
   }
}

const withLoginRedirect = (Component) => {
   const RedirectContainer = ({ isAuth, id, ...other }) => {

      if (isAuth) return <Redirect to={`profile/${id}`} />

      return (
         <Component {...other} />
      )
   }

   return connect(mapStateToProps)(RedirectContainer);
}

export default withLoginRedirect;