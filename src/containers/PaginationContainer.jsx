import { connect } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";

import Pagination from "../lesson1/Pagination/Pagination";
import {
   setTotalCountActionCreator,
   setCurrentPageAtionCreator,
   setUsersActionCreator
} from '../actions/actionCreator';

const PaginationContainer = ({ setTotalCount, currentPage, setUsers, ...other }) => {

   useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`)
         .then(response => setUsers(response.data.items));
   }, [currentPage]);

   return (
      <Pagination {...other} currentPage={currentPage} />
   )
}


let mapStateToProps = (state) => {
   return {
      limit: state.usersPage.limit,
      currentPage: state.usersPage.currentPage,
      totalCount: state.usersPage.totalCount,
   }
};

let dispatchToProps = {
   setTotalCount: setTotalCountActionCreator,
   setCurrentPage: setCurrentPageAtionCreator,
   setUsers: setUsersActionCreator,
};

export default connect(
   mapStateToProps,
   dispatchToProps,
)(PaginationContainer);
