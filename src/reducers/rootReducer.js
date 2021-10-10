import { combineReducers } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from './dialogsPageReducer';
import { usersPageReducer } from './usersPageReducer';
import { authReducer } from "./authReducer";
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersPageReducer,
   auth: authReducer,
   app: appReducer,
});

export default rootReducer;
