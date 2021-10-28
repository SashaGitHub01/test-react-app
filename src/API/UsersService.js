import instanse from './instanse';

class UsersService {
   static getUsersList = () => {
      return instanse.get(`/users`)
         .then(response => response.data);
   }

   static getUsersPage = (page) => {
      return instanse.get(`/users?page=${page}`)
         .then(response => response.data);
   }

   static getUsersWithTerm = (term = '') => {
      return instanse.get(`/users?term=${term}`)
         .then(response => response.data);
   }
}

export default UsersService;