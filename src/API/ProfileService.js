import instanse from './instanse';

class ProfileService {
   static getUserProfile = (userId) => {
      return instanse.get(`/profile/${userId}`)
         .then(response => response.data);
   }

   static getUserStatus = (userId) => {
      return instanse.get(`/profile/status/${userId}`)
         .then(response => response.data);
   }

   static updateStatus = (status) => {
      return instanse.put(`/profile/status`, { status })
         .then(response => response.data);
   }

   static uploadAvatar = async (image) => {
      let response = await instanse.put(`/profile/photo`, image, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });

      return response.data;
   }
}

export default ProfileService;