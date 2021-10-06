import React, { useEffect } from "react";
import UsersList from "../lesson1/content/UsersPage/UsersList/UsersList";
import { connect } from "react-redux";
import { setUsers, setTotalCount, toggleIsLoading } from '../actions/actionCreator';
import { getUsers } from "../thunks/thunkCreator";

const UsersListContainer = ({ getUsers, ...other }) => {

   useEffect(() => {
      getUsers();
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
   getUsers,
}

export default connect(
   mapStateToProps,
   dispatchStateToProps,
)(UsersListContainer);
