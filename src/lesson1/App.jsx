import React, { useEffect } from "react";

import Page from "./page/page";
import Main from "./main/Main";
import HeaderContainer from "../containers/HeaderContainer";
import Loader from "./Loader/Loader";
import { connect } from "react-redux";
import { initializeApp } from "../thunks/thunkCreator";


const App = ({ isInitialized, initializeApp }) => {

   useEffect(() => {
      initializeApp();
   }, []);

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
   }
}

let dispatchToProps = {
   initializeApp,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(App);