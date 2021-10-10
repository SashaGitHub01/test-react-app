import { SET_INITIALIZED } from "../constants/constants";

let initialState = {
   initialized: false,
}

export const appReducer = (state = initialState, { type }) => {
   switch (type) {
      case SET_INITIALIZED:
         return {
            ...state,
            initialized: true,
         }

      default:
         return state;
   }
}