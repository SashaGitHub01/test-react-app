import { combineReducers } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from './dialogsPageReducer';
import { usersPageReducer } from './usersPageReducer';

const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersPageReducer,
});

export default rootReducer;
