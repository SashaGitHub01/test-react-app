import FollowService from "../API/FollowService";
import UsersService from '../API/UsersService';
import ProfileService from "../API/ProfileService";
import AuthMeService from "../API/AuthMeService";
import {
   toggleFollow, toggleIsFollowing, setUserProfile,
   setUsers, setTotalCount, toggleIsLoading,
   setAuthData, setStatus,
} from "../actions/actionCreator";


export const follow = (id) => {
   return (dispatch) => {
      dispatch(toggleIsFollowing(true, id));
      FollowService.setFollow(id)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(toggleFollow(id));
            }
            dispatch(toggleIsFollowing(false, id));
         })
   }
};

export const unfollow = (id) => {
   return (dispatch) => {
      dispatch(toggleIsFollowing(true, id));
      FollowService.setUnfollow(id)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(toggleFollow(id));
               dispatch(toggleIsFollowing(false, id));
            }
         })
   }
};

export const getUsers = () => {
   return (dispatch) => {
      dispatch(toggleIsLoading(true));

      UsersService.getUsersList()
         .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
         })
         .then(() => dispatch(toggleIsLoading(false)));
   }
};

export const getNewUsersPage = (page) => {
   return (dispatch) => {
      UsersService.getUsersPage(page)
         .then(data => dispatch(setUsers(data.items)));
   }
}

export const getUserProfile = (id) => {
   return (dispatch) => {
      ProfileService.getUserProfile(id)
         .then(data => dispatch(setUserProfile(data)))
   }
};

export const getAuth = () => {
   return (dispatch) => {
      AuthMeService.authMe()
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthData(data.data));
            }
         });
   }
};

export const getStatus = (id) => {
   return (dispatch) => {
      ProfileService.getUserStatus(id)
         .then(data => dispatch(setStatus(data)));
   }
};

export const updateStatus = (text) => {
   return (dispatch) => {
      ProfileService.updateStatus(text)
         .then(response => {
            if (response.resultCode === 0) {
               dispatch(setStatus(text))
            };
         });
   }
};

export const signIn = (data) => {
   return (dispatch) => {
      AuthMeService.signIn(data)
         .then(data => {
            if (data.resultCode === 1) {
               dispatch(setAuthData())
            }
         })
   }
};