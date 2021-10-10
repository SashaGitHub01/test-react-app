import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import LoginForm from "../lesson1/Login/LoginForm/LoginForm";
import { login } from "../thunks/thunkCreator";
import withLoginRedirect from '../HOC/withLoginRedirect';


const LoginFormContainer = ({ ...other }) => {
   return (
      <LoginForm {...other} />
   )
}

let dispatchToProps = {
   login,
}

export default compose(
   connect(
      null,
      dispatchToProps,
   ),
   withLoginRedirect
)(LoginFormContainer);