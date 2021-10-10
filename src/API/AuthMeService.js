import instanse from "./instanse";

class AuthMeService {
   static authMe = async () => {
      let response = await instanse.get(`auth/me`)
      return response.data;
   }

   static login = async ({ email, password, rememberMe = false, captcha = false }) => {
      let response = await instanse.post('/auth/login', { email, password, rememberMe, captcha })
      return response.data;
   }
   static logout = async () => {
      let response = await instanse.delete('/auth/login');
      return response.data;
   }
}

export default AuthMeService;