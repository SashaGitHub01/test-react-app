import React from "react";
import { connect } from "react-redux";

import LoginForm from "../lesson1/Login/LoginForm/LoginForm";
import { signIn } from "../thunks/thunkCreator";


const LoginFormContainer = ({ signIn }) => {
   return (
      <LoginForm signIn={signIn} />
   )
}

const mapStateToProps = state => {
   return;
}

let dispatchToProps = {
   signIn,
}

export default connect(
   null,
   dispatchToProps,
)(LoginFormContainer);