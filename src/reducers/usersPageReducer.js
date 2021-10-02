import { TOGGLE_FOLLOW, SET_USERS } from "../constants/constants";

let initialState = {
   users: [
      {
         id: 1,
         fullName: 'Alex Merser',
         description: 'Hello world!',
         location: { country: 'USA', city: 'Florida' },
         followed: true,
         avatar: 'https://pbs.twimg.com/media/DOnGMOUX4AAZzS1.jpg'
      },

      {
         id: 2,
         fullName: 'Rick Holl',
         description: 'Hello, my name is Rick!',
         location: { country: 'Poland', city: 'Krakow' },
         followed: false,
         avatar: 'https://pbs.twimg.com/media/DOnGMOUX4AAZzS1.jpg'
      },

      {
         id: 3,
         fullName: 'John Chick',
         description: 'Hello, my name is John!',
         location: { country: 'USA', city: 'Atlanta' },
         followed: false,
         avatar: 'https://pbs.twimg.com/media/DOnGMOUX4AAZzS1.jpg'
      },

   ],
}

export const usersPageReducer = (state = initialState, { type, userId, newUsers }) => {
   switch (type) {
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               return user.id === userId
                  ? { ...user, followed: !user.followed }
                  : user
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...newUsers],
         }

      default:
         return state;
   }
}
