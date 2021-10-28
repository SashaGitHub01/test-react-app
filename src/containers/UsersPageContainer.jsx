import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers, getUsersWithTerm } from "../thunks/thunkCreator";
import UsersPage from "../components/Content/UsersPage/UsersPage";

const UsersPageContainer = ({ getUsers, getUsersWithTerm, ...other }) => {
   const [query, setQuery] = useState('');

   useEffect(() => {
      getUsers();
   }, []);

   useEffect(() => {
      if (query) getUsersWithTerm(query);
   }, [query]);

   return (
      <UsersPage {...other} setQuery={setQuery} />
   )
}


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      isLoading: state.usersPage.isLoading,
   }
};

const dispatchStateToProps = {
   getUsers,
   getUsersWithTerm,
}

export default connect(
   mapStateToProps,
   dispatchStateToProps,
)(UsersPageContainer);
