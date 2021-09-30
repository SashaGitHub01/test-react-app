import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import Profile from "../content/Profile/Profile";
import Dialogs from "../content/Dialogs/Dialogs";
import Dialog from "../content/Dialogs/Dialog/Dialog";
import Error from "../content/Error/Error";

const AppRoute = ({ state, dispatch }) => {
   return (
      <Switch>
         <Route exact path='/profile' render={() => <Profile state={state.profilePage}
            dispatch={dispatch}
         />}
         />
         <Route exact path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogsList} />}
         />
         <Route exact path='/dialogs/:id' render={() => <Dialog state={state.dialogsPage}
            dispatch={dispatch}
         />}
         />
         <Route exact path='/'>
            <Redirect to='/profile' />
         </Route>
         <Route component={Error} />
      </Switch>
   )
}

export default AppRoute;