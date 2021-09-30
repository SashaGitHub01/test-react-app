import { combineReducers } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from './dialogsPageReducer';


const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
});

export default rootReducer;
