import {
   TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE,
   TOGGLE_IS_LOADING, TOGGLE_iS_FOLLOWING,
}
   from "../constants/constants";


let initialState = {
   users: [],
   totalCount: 0,
   limit: 10,
   currentPage: 1,
   isLoading: false,
   followingProgress: [],
}


export const usersPageReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               return user.id === payload
                  ? { ...user, followed: !user.followed }
                  : user
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...payload],
         };

      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: payload,
         }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: payload,
         };

      case TOGGLE_IS_LOADING:
         return {
            ...state,
            isLoading: payload,
         };

      case TOGGLE_iS_FOLLOWING:
         return {
            ...state,
            followingProgress: payload
               ? [...state.followingProgress, payload]
               : state.followingProgress.filter((id) => id != payload),
         };

      default:
         return state;
   }
}
