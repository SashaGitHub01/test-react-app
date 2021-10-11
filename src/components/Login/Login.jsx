import React from "react";
import './Login.scss';

import LoginFormContainer from "../../containers/LoginFormContainer";

const Login = (props) => {
   return (
      <div className="login">
         <LoginFormContainer />
      </div>
   )
}

export default Login;