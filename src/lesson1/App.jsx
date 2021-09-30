import React from "react";

import Page from "./page/page";
import Header from "./header/header";
import Main from "./main/Main";



const App = ({ state, dispatch }) => {
   return (
      <Page>
         <Header />
         <Main state={state} dispatch={dispatch} />
      </Page>
   )
}

export default App;