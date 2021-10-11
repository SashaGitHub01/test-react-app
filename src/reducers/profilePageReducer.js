import {
   ADD_POST, SET_USER_PROFILE,
   SET_CURRENT_PROFILE, SET_STATUS,
   SET_NEW_AVATAR,
} from "../constants/constants";

let initialState = {
   posts: [
      {
         id: 1,
         name: 'Jake Yip',
         avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
         body: 'Hello, I\'m Jake!'
      },
      {
         id: 2,
         name: 'Jake Yip',
         avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
         body: 'Hahahaha'
      },

      {
         id: 3,
         name: 'Jake Yip',
         avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
         body: 'Nice!!! lol...'
      },

   ],
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
            name: 'Jake Yip',
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
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


