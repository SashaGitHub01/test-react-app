import Header from "../lesson1/header/header";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthDataAtionCreator } from '../actions/actionCreator';

const HeaderContainer = ({ setAuthData, ...other }) => {

   useEffect(() => {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true,
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               console.log(response);
               setAuthData(response.data.data)
            }
         });
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
   setAuthData: setAuthDataAtionCreator,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(HeaderContainer);