import {
   ADD_POST, UPDATE_POST_CONTENT, ADD_MESSAGE, UPDATE_MESSAGE_CONTENT, SET_USER_PROFILE,
   TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_LOADING,
   SET_CURRENT_PROFILE, SET_AUTH_DATA,
} from "../constants/constants";

export const addPostActionCreator = () => (
   { type: ADD_POST }
);

export const updatePostActionCreator = (text) => (
   { type: UPDATE_POST_CONTENT, newText: text }
);

export const addMessageActionCreator = () => (
   { type: ADD_MESSAGE }
);

export const updateMessageActionCreator = (text) => (
   { type: UPDATE_MESSAGE_CONTENT, newText: text }
);

export const toggleFollowActionCreator = (id) => (
   { type: TOGGLE_FOLLOW, userId: id }
);

export const setUsersActionCreator = (users) => (
   { type: SET_USERS, newUsers: users }
);

export const setTotalCountActionCreator = (count) => (
   { type: SET_TOTAL_COUNT, count: count }
);

export const setCurrentPageAtionCreator = (page) => (
   { type: SET_CURRENT_PAGE, currentPage: page }
);

export const toggleIsLoadingAtionCreator = (status) => (
   { type: TOGGLE_IS_LOADING, newLoadingStatus: status }
);

export const setUserProfileAtionCreator = (profile) => (
   { type: SET_USER_PROFILE, profile }
);

export const setCurrentProfileAtionCreator = (id) => (
   { type: SET_CURRENT_PROFILE, profileId: id }
);

export const setAuthDataAtionCreator = ({ id, login, email }) => (
   { type: SET_AUTH_DATA, userData: { id, login, email } }
);

