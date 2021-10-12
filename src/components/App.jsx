import React, { useEffect } from "react";

import Page from "./Page/Page";
import Main from "./Main/Main";
import HeaderContainer from "../containers/HeaderContainer";
import Loader from "./Loader/Loader";
import { connect } from "react-redux";
import { initializeApp } from "../thunks/thunkCreator";


const App = ({ isInitialized, initializeApp, profile }) => {

   useEffect(() => {
      initializeApp();
   }, [profile]);

   if (!isInitialized) return <Loader />

   return (
      <Page>
         <HeaderContainer />
         <Main />
      </Page>
   )
}

const mapStateToProps = (state) => {
   return {
      isInitialized: state.app.initialized,
      profile: state.profilePage.profile,
   }
}

let dispatchToProps = {
   initializeApp,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(App);