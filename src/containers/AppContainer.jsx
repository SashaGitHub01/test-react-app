import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initializeApp, handleError } from "../thunks/thunkCreator";
import App from "../components/App";

const AppContainer = ({ initializeApp, profile, handleError, ...other }) => {

   const handleRejection = (e) => {
      const id = Date.now();

      handleError(e.reason.message, id);
   }

   useEffect(() => {
      initializeApp();

      window.addEventListener('unhandledrejection', handleRejection);

      return () => window.removeEventListener('unhandledrejection', handleRejection);

   }, [profile]);

   return (
      <App {...other} />
   )
}

const mapStateToProps = (state) => {
   return {
      isInitialized: state.app.initialized,
      profile: state.profilePage.profile,
      errors: state.app.globalErrors,
   }
}

const dispatchToProps = {
   initializeApp,
   handleError,
}

export default connect(
   mapStateToProps,
   dispatchToProps,
)(AppContainer);
