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

export const profilePageReducer = (state = initialState, {
   type, postText, profile,
   profileId, status, photos,
}) => {
   switch (type) {
      case ADD_POST:
         let newPost = {
            id: '5' + Date.now(),
            name: state.profile.fullName,
            avatar: state.profile.photos.small,
            body: postText,
         }

         return { ...state, posts: [...state.posts, newPost], newPostContent: '' }

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: profile,
         };

      case SET_CURRENT_PROFILE:
         return {
            ...state,
            currentProfileId: profileId,
         };

      case SET_STATUS:
         return {
            ...state,
            status: status,
         };

      case SET_NEW_AVATAR:
         return {
            ...state,
            profile: {
               ...state.profile,
               photos: {
                  ...photos,
               }
            },
         };

      default:
         return state;
   }
}


