import React, { Component } from "react";
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import Page from "./page/page";
import Header from "./header/header";
import Main from "./main/Main";

class App extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <Page>
            <Header />
            <Main />
         </Page>
      )
   }
}

export default App;