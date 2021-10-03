import {
   TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE,
   TOGGLE_IS_LOADING,
}
   from "../constants/constants";


let initialState = {
   users: [],
   totalCount: 0,
   limit: 10,
   currentPage: 1,
}


export const usersPageReducer = (state = initialState, {
   type,
   userId,
   newUsers,
   count,
   currentPage,
   newLoadingStatus,
}) => {
   switch (type) {
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               return user.id === userId
                  ? { ...user, followed: !user.followed }
                  : user
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...newUsers],
         };

      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: count,
         }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: currentPage,
         };

      case TOGGLE_IS_LOADING:
         return {
            ...state,
            isLoading: newLoadingStatus,
         }

      default:
         return state;
   }
}
