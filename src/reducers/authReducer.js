import { SET_AUTH_DATA } from "../constants/constants";

const initialState = {
   isAuth: false,
   login: null,
   userId: null,
   email: null,
}


export const authReducer = (state = initialState, { type, userData }) => {
   switch (type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            login: userData.login,
            email: userData.email,
            userId: userData.id,
            isAuth: true,
         }

      default:
         return state;
   }
}