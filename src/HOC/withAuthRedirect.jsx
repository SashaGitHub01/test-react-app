import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
};

const withAuthRedirect = (Component) => {
   const RedirectContainer = ({ isAuth, ...other }) => {
      if (!isAuth) return <Redirect to={'/login'} />

      return <Component {...other} />
   }

   return connect(mapStateToPropsForRedirect)(RedirectContainer);
}

export default withAuthRedirect;