import { ADD_MESSAGE } from "../constants/constants";

let initialState = {
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
};

export const dialogsPageReducer = (state = initialState, { type, messageText }) => {
   switch (type) {
      case ADD_MESSAGE:
         let newMessage = { id: 5 + Date.now(), body: messageText }

         return {
            ...state,
            messages: [...state.messages, newMessage],
            newMessageContent: '',
         }

      default:
         return state;
   }
}

export default dialogsPageReducer;