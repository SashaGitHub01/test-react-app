import { SET_AUTH_DATA } from "../constants/constants";

const initialState = {
   isAuth: false,
   login: null,
   userId: null,
   email: null,
}


export const authReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            login: payload.login,
            email: payload.email,
            userId: payload.id,
            isAuth: payload.isAuth,
         }

      default:
         return state;
   }
}