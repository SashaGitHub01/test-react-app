
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

   _addPost() {
      let newPost = {
         id: '5' + Date.now(),
         name: 'Jake Yip',
         avatar: 'https://steamuserimages-a.akamaihd.net/ugc/793116473828215611/6B7BC238A031EE48EC9CDC44AC369EF30536F881/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
         body: this._state.profilePage.newPostContent,
      }

      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostContent = '';
   },

   _updatePostContent(text) {
      this._state.profilePage.newPostContent = text;

      this._callSubscriber(this._state);
   },

   _addMessage() {
      let newMessage = { id: 5 + Date.now(), body: this._state.dialogsPage.newMessageContent }

      this._state.dialogsPage.messages.push(newMessage);

      this._callSubscriber(this._state);
      this._state.dialogsPage.newMessageContent = '';
   },

   _updateMessageContent(text) {
      this._state.dialogsPage.newMessageContent = text;

      this._callSubscriber(this._state);
   },

   dispatch(action) {
      if (action.type == 'ADD-POST') this._addPost();
      if (action.type == 'UPDATE-POST-CONTENT') this._updatePostContent(action.newText);
      if (action.type == 'ADD-MESSAGE') this._addMessage();
      if (action.type == 'UPDATE-MESSAGE-CONTENT') this._updateMessageContent(action.newText);
   },

   subscribe(callback) {
      this._callSubscriber = callback;
   }
}

