import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import ProfileContainer from "../../containers/ProfileContainer";
import Loader from "../Loader/Loader";

const Login = lazy(() => import('../Login/Login'));
const UsersPage = lazy(() => import("../Content/UsersPage/UsersPage"));
const Error = lazy(() => import("../Content/Error/Error"));
const DialogContainer = lazy(() => import("../../containers/DialogContainer"));
const DialogsContainer = lazy(() => import("../../containers/DialogsContainer"));
const About = lazy(() => import('../Content/About/About'));

const AppRoute = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Switch>
            <Route exact path='/profile/:userId' render={() => <ProfileContainer />} />
            <Route exact path='/dialogs' render={() => <DialogsContainer />} />
            <Route exact path='/dialogs/:id' render={() => <DialogContainer />} />
            <Route exact path='/users' render={() => <UsersPage />} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/'>
               <Redirect to='/users' />
            </Route>
            <Route component={Error} />
         </Switch>
      </Suspense>
   )
}

export default AppRoute;