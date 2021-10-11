import React, { useEffect } from "react";
import UsersList from "../components/Content/UsersPage/UsersList/UsersList";
import { connect } from "react-redux";
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
