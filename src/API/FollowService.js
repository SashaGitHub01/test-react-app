import instanse from './instanse';

class FollowService {
   static setFollow = (userId) => {
      return instanse.post(`/follow/${userId}`)
         .then(response => response.data);
   }

   static setUnfollow = (userId) => {
      return instanse.delete(`/follow/${userId}`)
         .then(response => response.data);
   }
}

export default FollowService;