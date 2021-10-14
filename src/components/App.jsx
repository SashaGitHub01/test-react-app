import React from "react";

import Main from "./Main/Main";
import HeaderContainer from "../containers/HeaderContainer";
import Loader from "./Loader/Loader";


const App = ({ isInitialized, errors }) => {

   if (!isInitialized) return <Loader />

   return (
      <div className="page">
         <HeaderContainer />
         <Main errors={errors} />
      </div>
   )
}



export default App;