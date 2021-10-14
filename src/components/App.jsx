import React from "react";

import Page from "./Page/Page";
import Main from "./Main/Main";
import HeaderContainer from "../containers/HeaderContainer";
import Loader from "./Loader/Loader";


const App = ({ isInitialized, errors }) => {

   if (!isInitialized) return <Loader />

   return (
      <Page>
         <HeaderContainer />
         <Main errors={errors} />
      </Page>
   )
}



export default App;