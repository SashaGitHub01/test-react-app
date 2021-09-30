import { ADD_POST, UPDATE_POST_CONTENT, ADD_MESSAGE, UPDATE_MESSAGE_CONTENT } from "../constants/constants";

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