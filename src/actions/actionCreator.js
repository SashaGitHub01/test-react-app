import { ADD_POST, UPDATE_POST_CONTENT, ADD_MESSAGE, UPDATE_MESSAGE_CONTENT, TOGGLE_FOLLOW, SET_USERS } from "../constants/constants";

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
