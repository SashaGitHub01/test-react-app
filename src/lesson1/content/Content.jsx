import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './content.scss';

import Profile from "../profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Error from '../Error/Error';

class Content extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <section className="content">
            <Switch>
               <Route exact path='/profile' component={Profile} />
               <Route exact path='/dialogs' component={Dialogs} />
               <Route path='*' component={Error} />
            </Switch>
         </section>
      )
   }
}

export default Content;