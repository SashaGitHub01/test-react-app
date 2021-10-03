import React, { useEffect } from "react";
import axios from "axios";
import UsersList from "../lesson1/content/UsersPage/UsersList/UsersList";
import { connect } from "react-redux";
import { setUsersActionCreator, setTotalCountActionCreator, toggleIsLoadingAtionCreator } from '../actions/actionCreator';

const UsersListContainer = ({ setTotalCount, toggleIsLoading, getUsers, ...other }) => {

   useEffect(() => {
      toggleIsLoading(true);

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            getUsers(response.data.items);
            setTotalCount(response.data.totalCount);
         })
         .then(() => toggleIsLoading(false));
   }, []);

   return (
      <UsersList {...other} />
   )
}


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      isLoading: state.usersPage.isLoading,
   }
};

let dispatchStateToProps = {
   getUsers: setUsersActionCreator,
   setTotalCount: setTotalCountActionCreator,
   toggleIsLoading: toggleIsLoadingAtionCreator,
}

export default connect(
   mapStateToProps,
   dispatchStateToProps,
)(UsersListContainer);
