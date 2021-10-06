import instanse from './instanse';

class ProfileService {
   static getUserProfile = (userId) => {
      return instanse.get(`/profile/${userId}`)
         .then(response => response.data);
   }
}

export default ProfileService;