import Header from "../lesson1/header/header";
import React from "react";
import { connect } from "react-redux";

import { logout } from "../thunks/thunkCreator";

const HeaderContainer = ({ ...other }) => {
   return (
      <Header {...other} />
   )
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      id: state.auth.userId,
   }
}

let dispatchToProps = {
   logout,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(HeaderContainer);