import { SET_INITIALIZED, SET_GLOBAL_ERROR, REMOVE_GLOBAL_ERROR } from "../constants/constants";

let initialState = {
   initialized: false,
   globalErrors: [],
}

export const appReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_INITIALIZED:
         return {
            ...state,
            initialized: true,
         }

      case SET_GLOBAL_ERROR:
         return {
            ...state,
            globalErrors: [...state.globalErrors, payload],
         }

      case REMOVE_GLOBAL_ERROR:
         return {
            ...state,
            globalErrors: state.globalErrors.filter(({ id }) => id !== payload),
         }

      default:
         return state;
   }
}