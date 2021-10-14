import {
   ADD_POST, ADD_MESSAGE, SET_USER_PROFILE, SET_NEW_AVATAR,
   TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_LOADING,
   SET_CURRENT_PROFILE, SET_AUTH_DATA, TOGGLE_iS_FOLLOWING, SET_STATUS, SET_INITIALIZED,
   SET_GLOBAL_ERROR, REMOVE_GLOBAL_ERROR,
} from "../constants/constants";

export const addPost = (postText) => (
   { type: ADD_POST, payload: postText }
);

export const addMessage = (messageText) => (
   { type: ADD_MESSAGE, payload: messageText }
);


export const toggleFollow = (id) => (
   { type: TOGGLE_FOLLOW, payload: id }
);

export const setUsers = (users) => (
   { type: SET_USERS, payload: users }
);

export const setTotalCount = (count) => (
   { type: SET_TOTAL_COUNT, payload: count }
);

export const setCurrentPage = (page) => (
   { type: SET_CURRENT_PAGE, payload: page }
);

export const toggleIsLoading = (status) => (
   { type: TOGGLE_IS_LOADING, payload: status }
);

export const setUserProfile = (profile) => (
   { type: SET_USER_PROFILE, payload: profile }
);

export const setCurrentProfile = (id) => (
   { type: SET_CURRENT_PROFILE, payload: id }
);

export const setAuthData = ({ id, login, email, isAuth = true }) => (
   { type: SET_AUTH_DATA, payload: { id, login, email, isAuth } }
);

export const toggleIsFollowing = (status, id) => (
   { type: TOGGLE_iS_FOLLOWING, payload: status, followId: id }
);

export const setStatus = (text) => (
   { type: SET_STATUS, payload: text }
);

export const setInitialized = () => (
   { type: SET_INITIALIZED }
);

export const setNewAvatar = (photos) => (
   { type: SET_NEW_AVATAR, payload: photos }
);

export const setGlobalError = (error, id) => (
   { type: SET_GLOBAL_ERROR, payload: { error, id } }
);

export const removeGlobalError = (removeId) => (
   { type: REMOVE_GLOBAL_ERROR, payload: removeId }
);