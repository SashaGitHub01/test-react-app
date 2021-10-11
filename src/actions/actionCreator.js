import {
   ADD_POST, ADD_MESSAGE, SET_USER_PROFILE, SET_NEW_AVATAR,
   TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_LOADING,
   SET_CURRENT_PROFILE, SET_AUTH_DATA, TOGGLE_iS_FOLLOWING, SET_STATUS, SET_INITIALIZED,
} from "../constants/constants";

export const addPost = (postText) => (
   { type: ADD_POST, postText }
);

export const addMessage = (messageText) => (
   { type: ADD_MESSAGE, messageText }
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

export const setAuthData = ({ id, login, email, isAuth = true }) => (
   { type: SET_AUTH_DATA, userData: { id, login, email, isAuth } }
);

export const toggleIsFollowing = (status, id) => (
   { type: TOGGLE_iS_FOLLOWING, isFetching: status, followId: id }
);

export const setStatus = (text) => (
   { type: SET_STATUS, status: text }
);

export const setInitialized = () => (
   { type: SET_INITIALIZED }
);

export const setNewAvatar = (photos) => (
   { type: SET_NEW_AVATAR, photos }
);