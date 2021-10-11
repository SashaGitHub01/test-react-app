import { connect } from "react-redux";
import React, { useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import { setCurrentPage } from '../actions/actionCreator';
import { getNewUsersPage } from "../thunks/thunkCreator";

const PaginationContainer = ({ currentPage, getNewUsersPage, ...other }) => {

   useEffect(() => {
      getNewUsersPage(currentPage);
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
   setCurrentPage: setCurrentPage,
   getNewUsersPage,
};

export default connect(
   mapStateToProps,
   dispatchToProps,
)(PaginationContainer);
