import {
   ADD_POST, UPDATE_POST_CONTENT, ADD_MESSAGE, UPDATE_MESSAGE_CONTENT, SET_USER_PROFILE,
   TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_LOADING,
   SET_CURRENT_PROFILE, SET_AUTH_DATA, TOGGLE_iS_FOLLOWING,
} from "../constants/constants";

export const addPost = () => (
   { type: ADD_POST }
);

export const updatePost = (text) => (
   { type: UPDATE_POST_CONTENT, newText: text }
);

export const addMessage = () => (
   { type: ADD_MESSAGE }
);

export const updateMessage = (text) => (
   { type: UPDATE_MESSAGE_CONTENT, newText: text }
);

export const toggleFollow = (id) => (
   { type: TOGGLE_FOLLOW, userId: id }
);

export const setUsers = (users) => (
   { type: SET_USERS, newUsers: users }
);

export const setTotalCount = (count) => (
   { type: SET_TOTAL_COUNT, count: count }
);

export const setCurrentPage = (page) => (
   { type: SET_CURRENT_PAGE, currentPage: page }
);

export const toggleIsLoading = (status) => (
   { type: TOGGLE_IS_LOADING, newLoadingStatus: status }
);

export const setUserProfile = (profile) => (
   { type: SET_USER_PROFILE, profile }
);

export const setCurrentProfile = (id) => (
   { type: SET_CURRENT_PROFILE, profileId: id }
);

export const setAuthData = ({ id, login, email }) => (
   { type: SET_AUTH_DATA, userData: { id, login, email } }
);

export const toggleIsFollowing = (status, id) => (
   { type: TOGGLE_iS_FOLLOWING, isFetching: status, followId: id }
);