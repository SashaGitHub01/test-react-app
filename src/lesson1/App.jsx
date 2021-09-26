import React, { Component } from "react";
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from "./page/page";
import Header from "./header/header";
import Main from "./main/Main";



class App extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let { posts, dialogs } = this.props;

      return (
         <Page>
            <Header />
            <Main posts={posts} dialogs={dialogs} />
         </Page>
      )
   }
}

export default App;