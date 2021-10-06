import Header from "../lesson1/header/header";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuth } from "../thunks/thunkCreator";

const HeaderContainer = ({ getAuth, ...other }) => {

   useEffect(() => {
      getAuth();
   }, []);

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
   getAuth,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(HeaderContainer);