import { profilePageReducer } from "../reducers/profilePageReducer";
import { dialogsPageReducer } from "../reducers/dialogsPageReducer";


export const store = {
   _state: {
      profilePage: {
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
      },
      dialogsPage: {
         dialogsList: [
            {
               name: 'Stew',
               surname: 'Hip',
               id: 1,
               avatar: '',
            },

            {
               name: 'Jsan',
               surname: 'Repze',
               id: 2,
               avatar: '',
               messages: [
                  { body: 'Hello!!!' },
               ]
            },
         ],

         messages: [
            { id: 1, body: 'Hello!!!' },
            { id: 2, body: 'I am Joeh' },
            { id: 3, body: 'Hi, dude' },
         ],

         newMessageContent: '',
      },
   },

   get state() {
      return this._state;
   },

   _callSubscriber() { },

   dispatch(action) {
      this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
      this._state.profilePage = profilePageReducer(this._state.profilePage, action);

      this._callSubscriber(this._state);
   },

   subscribe(callback) {
      this._callSubscriber = callback;
   }
}

