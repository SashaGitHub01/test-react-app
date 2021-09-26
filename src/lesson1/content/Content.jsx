import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import './content.scss';

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialogs/Dialog/Dialog";
import Error from './Error/Error';

const Content = ({ posts, dialogs }) => {

   return (
      <section className="content">
         <Switch>
            <Route exact path='/profile' render={() => <Profile posts={posts} />} />
            <Route exact path='/dialogs' render={() => <Dialogs dialogs={dialogs} />} />
            <Route path='/dialogs/:id' component={Dialog} />
            <Route component={Error} />
         </Switch>
      </section>
   )
}

export default Content;