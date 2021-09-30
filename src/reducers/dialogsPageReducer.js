import { ADD_MESSAGE, UPDATE_MESSAGE_CONTENT } from "../constants/constants";

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

   newMessageContent: '',
};

export const dialogsPageReducer = (state = initialState, { type, newText }) => {
   switch (type) {
      case ADD_MESSAGE:
         let newMessage = { id: 5 + Date.now(), body: state.newMessageContent }

         return {
            ...state,
            messages: [...state.messages, newMessage],
            newMessageContent: '',
         }

      case UPDATE_MESSAGE_CONTENT:
         return {
            ...state,
            newMessageContent: newText,
         }

      default:
         return state;
   }
}

export default dialogsPageReducer;