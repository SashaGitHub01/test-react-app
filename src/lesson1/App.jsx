import React from "react";

import Page from "./page/page";
import Main from "./main/Main";
import HeaderContainer from "../containers/HeaderContainer";



const App = () => {
   return (
      <Page>
         <HeaderContainer />
         <Main />
      </Page>
   )
}

export default App;