import React from "react";
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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