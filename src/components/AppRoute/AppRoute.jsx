import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import Profile from "../Content/Profile/Profile";
import Loader from "../Loader/Loader";
//import DialogsContainer from "../../containers/DialogsContainer";
//import DialogContainer from "../../containers/DialogContainer";
//import Error from "../Content/Error/Error";
//import UsersPage from "../Content/UsersPage/UsersPage";
//import Login from '../Login/Login';

const Login = lazy(() => import('../Login/Login'));
const UsersPage = lazy(() => import("../Content/UsersPage/UsersPage"));
const Error = lazy(() => import("../Content/Error/Error"));
const DialogContainer = lazy(() => import("../../containers/DialogContainer"));
const DialogsContainer = lazy(() => import("../../containers/DialogsContainer"));

const AppRoute = () => {
   return (
      <Suspense fallback={<Loader />}>
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
      </Suspense>
   )
}

export default AppRoute;