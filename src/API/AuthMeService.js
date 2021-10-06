import instanse from "./instanse";

class AuthMeService {
   static authMe = (userId) => {
      return instanse.get(`auth/me`)
         .then(response => response.data);
   }
}

export default AuthMeService;