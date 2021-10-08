import instanse from "./instanse";

class AuthMeService {
   static authMe = () => {
      return instanse.get(`auth/me`)
         .then(response => response.data);
   }

   static signIn = ({ email, password, rememberMe, captcha = false }) => {
      return instanse.post('/auth/login', { email, password, rememberMe, captcha })
         .then(response => response.data);
   }
}

export default AuthMeService;