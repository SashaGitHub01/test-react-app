import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import Profile from "../content/Profile/Profile";
import DialogsContainer from "../../containers/DialogsContainer";
import DialogContainer from "../../containers/DialogContainer";
import Error from "../content/Error/Error";
import UsersPage from "../content/UsersPage/UsersPage";
import Login from '../Login/Login';

const AppRoute = () => {
   return (
      <Switch>
         <Route exact path='/profile/:userId' render={() => <Profile />} />
         <Route exact path='/dialogs' render={() => <DialogsContainer />} />
         <Route exact path='/dialogs/:id' render={() => <DialogContainer />} />
         <Route exact path='/users' render={() => <UsersPage />} />
         <Route exact path='/login' render={() => <Login />} />
         <Route exact path='/'>
            <Redirect to='/users' />
         </Route>
         <Route component={Error} />
      </Switch>
   )
}

export default AppRoute;