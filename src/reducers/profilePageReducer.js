import { ADD_POST, UPDATE_POST_CONTENT, SET_USER_PROFILE, SET_CURRENT_PROFILE } from "../constants/constants";

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
   newPostContent: '',
   profile: null,
};

export const profilePageReducer = (state = initialState, { type, newText, profile, profileId }) => {
   switch (type) {
      case ADD_POST:
         let newPost = {
            id: '5' + Date.now(),
            name: 'Jake Yip',
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
            body: state.newPostContent,
         }

         return { ...state, posts: [...state.posts, newPost], newPostContent: '' }

      case UPDATE_POST_CONTENT:
         return { ...state, newPostContent: newText };

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: profile,
         };

      case SET_CURRENT_PROFILE:
         return {
            ...state,
            currentProfileId: profileId,
         }

      default:
         return state;
   }
}


