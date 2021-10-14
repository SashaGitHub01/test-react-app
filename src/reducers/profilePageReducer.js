import {
   ADD_POST, SET_USER_PROFILE,
   SET_CURRENT_PROFILE, SET_STATUS,
   SET_NEW_AVATAR,
} from "../constants/constants";

let initialState = {
   posts: [],
   profile: null,
   status: '',
};

export const profilePageReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_POST:
         let newPost = {
            id: '5' + Date.now(),
            name: state.profile.fullName,
            avatar: state.profile.photos.small,
            body: payload,
         }

         return { ...state, posts: [...state.posts, newPost] }

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: payload,
         };

      case SET_CURRENT_PROFILE:
         return {
            ...state,
            currentProfileId: payload,
         };

      case SET_STATUS:
         return {
            ...state,
            status: payload,
         };

      case SET_NEW_AVATAR:
         return {
            ...state,
            profile: {
               ...state.profile,
               photos: {
                  ...payload,
               }
            },
         };

      default:
         return state;
   }
}


