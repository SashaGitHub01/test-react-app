import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import Profile from "../content/Profile/Profile";
import DialogsContainer from "../../containers/DialogsContainer";
import DialogContainer from "../../containers/DialogContainer";
import Error from "../content/Error/Error";
import UsersPage from "../content/UsersPage/UsersPage";

const AppRoute = () => {
   return (
      <Switch>
         <Route exact path='/profile' render={() => <Profile />} />
         <Route exact path='/dialogs' render={() => <DialogsContainer />} />
         <Route exact path='/dialogs/:id' render={() => <DialogContainer />} />
         <Route exact path='/users' render={() => <UsersPage />} />
         <Route exact path='/'>
            <Redirect to='/profile' />
         </Route>
         <Route component={Error} />
      </Switch>
   )
}

export default AppRoute;